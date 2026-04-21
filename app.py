from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd

from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_absolute_error, r2_score

app = Flask(__name__)
CORS(app)

# =============================
# LOAD DATA
# =============================
df = pd.read_csv("employment_data.csv")

# Pivot (Agriculture, Industry, Services)
df_pivot = df.pivot_table(
    index=["Country", "Year"],
    columns="Sector",
    values="Employment"
).reset_index()

df_pivot = df_pivot.dropna()

# Encode country
df_pivot["Country"] = df_pivot["Country"].astype("category")
country_mapping = dict(enumerate(df_pivot["Country"].cat.categories))
reverse_mapping = {v: k for k, v in country_mapping.items()}
df_pivot["Country"] = df_pivot["Country"].cat.codes

# Features & Targets
X = df_pivot[["Country", "Year"]]
y = df_pivot[["Agriculture", "Industry", "Services"]]

# Train/Test Split
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# =============================
# MODELS
# =============================
models = {
    "Linear Regression": LinearRegression(),
    "Random Forest": RandomForestRegressor(n_estimators=100)
}

trained_models = {}
metrics = {}

for name, model in models.items():
    model.fit(X_train, y_train)
    y_pred = model.predict(X_test)

    trained_models[name] = model

    metrics[name] = {
        "MAE": float(mean_absolute_error(y_test, y_pred)),
        "R2": float(r2_score(y_test, y_pred))
    }

# =============================
# ROUTES
# =============================

# Home route (fix 404)
@app.route("/")
def home():
    return "Backend is running ✅"

# Prediction API
@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()

    year = int(data.get("year"))
    country = data.get("country")

    country_code = reverse_mapping.get(country, 0)

    input_data = pd.DataFrame([[country_code, year]], columns=["Country", "Year"])

    model = trained_models["Random Forest"]
    pred = model.predict(input_data)[0]

    return jsonify({
        "agriculture": float(pred[0]),
        "industry": float(pred[1]),
        "services": float(pred[2])
    })

# Metrics API
@app.route("/metrics", methods=["GET"])
def get_metrics():
    return jsonify(metrics)


if __name__ == "__main__":
    app.run(debug=True)
