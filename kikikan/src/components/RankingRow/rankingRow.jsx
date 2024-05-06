import React from "react";
import "./rankingRow.css";

export const RankingRow = ({ rank, name, time, isMine = false }) => {
  if (isMine) {
    return (
      <div className="ranking-table-content my-ranking">
        {rank}位 {name} {formatTime(time)}
      </div>
    );
  }
  return (
    <div className="ranking-table-content">
      {rank}位 {name} {formatTime(time)}
    </div>
  );
};

function formatTime(timeInSeconds) {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;
  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
}
