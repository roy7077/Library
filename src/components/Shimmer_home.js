import React from "react";
import "../style/shimmer_home.css";

const Shimmer_home = () => {
  return (
    <div className="main-shimmer">
      <div className="shimmer-search">
      <div className="shimmer-input"></div>
      <div className="btn"> </div>
      </div>
      <div className="shimmer">
        {Array(20)
          .fill("")
          .map((e, index) => (
            <div className="shimmer-card" key={index}>
              {" "}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Shimmer_home;
