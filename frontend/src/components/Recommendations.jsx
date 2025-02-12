import React from "react";
import "../css/Recommendations.css";

function Recommendations({ recommendations }) {
  return (
    <div className="recommendations">
      <h4>Recommended Movies:</h4>
      <ul>
        {recommendations.map((rec) => (
          <li key={rec.id}>{rec.title} - {rec.vote_average.toFixed(1)}</li>
        ))}
      </ul>
    </div>
  );
}

export default Recommendations;