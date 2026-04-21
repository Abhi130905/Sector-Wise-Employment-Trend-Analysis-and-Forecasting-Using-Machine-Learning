# Sector-Wise-Employment-Trend-Analysis-and-Forecasting-Using-Machine-Learning
# 🌍 Sector-Wise Employment Prediction System

## 📌 Project Overview

This project is a simple web application that helps users understand how employment is distributed across three main sectors:

* Agriculture
* Industry
* Services

It allows users to:

* View past employment trends
* Predict future employment percentages for any country

---

## 🎯 Purpose of the Project

Many countries are changing economically over time. For example:

* Agriculture jobs decrease
* Industry grows
* Services become dominant

This project helps predict these changes using data and machine learning.

---

## ⚙️ Technologies Used

### Frontend

* React.js
* Chart.js

### Backend

* Python (Flask)

### Machine Learning

* Linear Regression (from Scikit-learn)

### Data

* Employment data from 1991 to 2025
* Covers 200 countries

---

## 🧠 How the System Works

1. User selects a country

2. The system shows past employment data in a graph

3. User enters a future year (example: 2035)

4. The model predicts:

   * Agriculture %
   * Industry %
   * Services %

5. Results are displayed clearly

---

## 🤖 Machine Learning Explanation (Simple)

* The model looks at **past data (Year vs Employment %)**
* It finds a pattern using **Linear Regression**
* Then it predicts future values based on that pattern

👉 Separate models are used for each sector:

* One for Agriculture
* One for Industry
* One for Services

👉 Final output is adjusted so:

* Total = 100%

---

## 📊 Features

* Easy country selection
* Graphs for visualization
* Future prediction
* Simple and fast results

---

## 🔌 API Endpoints

### Get all countries

GET /countries

### Get historical data

GET /data/

### Predict future data

POST /predict

Example request:
{
"country": "India",
"year": 2035
}

---

## 🖥️ How to Run the Project

### Backend

1. Go to backend folder
2. Install dependencies
3. Run:
   python app.py

---

### Frontend

1. Go to frontend folder
2. Run:
   npm install
   npm start

---

## 📈 Results

* The model gives good predictions for long-term trends
* Accuracy is around 75–80%
* Works fast (less than 1 second)

---

## 🔍 Key Observations

* Most countries are moving toward **Services sector**
* Agriculture jobs are decreasing
* Industry grows in developing countries

---

## 🚀 Future Improvements

* Add more factors like GDP
* Use advanced models
* Deploy online

##

---

## 📌 Conclusion

This project shows how simple machine learning and web development can be used to:

* Analyze data
* Predict trends
* Help in decision making

It is easy to use and useful for students, researchers, and planners.
