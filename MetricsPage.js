import React, { useEffect, useState } from "react";
import axios from "axios";

function MetricsPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/metrics")
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, []);

  if (!data) return <h2>Loading...</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>📊 Model Comparison</h1>

      {Object.keys(data).map((model) => (
        <div key={model} style={{ marginBottom: "20px" }}>
          <h2>{model}</h2>
          <p>MAE: {data[model].MAE.toFixed(2)}</p>
          <p>R² Score: {data[model].R2.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
}

export default MetricsPage;