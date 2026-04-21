import React, { useState } from "react";
import Prediction from "./Prediction";

function Dashboard() {
  const [country, setCountry] = useState("Afghanistan");

  return (
    <div style={{ padding: "20px" }}>
      <h1>🌍 Employment Analytics Dashboard</h1>

      <select onChange={(e) => setCountry(e.target.value)}>
        <option>Afghanistan</option>
        <option>Albania</option>
        <option>Algeria</option>
        <option>India</option>
      </select>

      <Prediction country={country} />

      <br /><br />

      <button onClick={() => window.open("/metrics", "_blank")}>
        📊 View Model Performance
      </button>
    </div>
  );
}

export default Dashboard;