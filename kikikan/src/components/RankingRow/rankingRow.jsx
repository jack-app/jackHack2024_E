import React from "react";
import "./rankingRow.css";

export const RankingRow = ({ rank, name, time }) => {
  return (
    <div className="ranking-table-content">
      {rank}位 {name} {time}
    </div>
  );
};
