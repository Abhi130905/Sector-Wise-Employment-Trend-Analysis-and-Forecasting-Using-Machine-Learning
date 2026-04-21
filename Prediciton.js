import React, { useState } from "react";
import axios from "axios";

function Prediction({ country }) {
  const [year, setYear] = useState("");
  const [result, setResult] = useState(null);

  const handlePredict = async () => {
    if (!year) {
      alert("Enter year");
      return;
    }

    try {
      const res = await axios.post("http://127.0.0.1:5000/predict", {
        year: Number(year),
        country
      });

      setResult(res.data);
    } catch (error) {
      console.log(error);
      alert("Error: " + error.message);
    }
  };

  return (
    <div>
      <h2>🔮 Prediction</h2>

      <input
        type="number"
        placeholder="Enter Year"
        onChange={(e) => setYear(e.target.value)}
      />

      <button onClick={handlePredict}>Predict</button>

      {result && (
        <div style={{ marginTop: "10px" }}>
          <p>🌾 Agriculture: {result.agriculture.toFixed(2)}</p>
          <p>🏭 Industry: {result.industry.toFixed(2)}</p>
          <p>💼 Services: {result.services.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}

export default Prediction;