// modules
import {
  child,
  get,
  ref,
  set,
  query,
  orderByChild,
  equalTo,
} from "firebase/database";
import { useState, useEffect } from "react";
import { db } from "../../utils/firebase";
import { v4 as uuidv4 } from "uuid";

// components
import { TitleButton } from "../../components/TitleButton/titleButton";
import { RankingRow } from "../../components/RankingRow/rankingRow";

// assets
import logo from "../../assets/kikikan_logo.png";
import congratulation from "../../assets/congratulations.png";
import face from "../../assets/face.png";

// styles
import "./gameClear.css";

export const GameClear = () => {
  const [results, setResults] = useState([]);
  const uuid = uuidv4();
  const name = localStorage.getItem("name");
  const level = localStorage.getItem("level");
  const clearTime = localStorage.getItem("clearTime");
  const createdAt = new Date().toISOString();

  useEffect(() => {
    const fetchData = async () => {
      const dbRef = ref(db);
      const resultRef = child(dbRef, "result");
      // データを保存
      const myResult = {
        name,
        level,
        clear_time: clearTime,
        created_at: formatDate(createdAt),
      };
      const myResultRef = child(dbRef, `result/${uuid}`);
      await set(myResultRef, myResult);

      // rankが"easy"のデータを取得する
      const queryRef = query(resultRef, orderByChild("level"), equalTo("初級"));

      try {
        const snapshot = await get(queryRef);
        if (snapshot.exists()) {
          const data = snapshot.val();
          const sortedResults = Object.entries(data)
            .map(([id, result]) => ({ id, ...result }))
            .sort((a, b) => a.clear_time.localeCompare(b.clear_time));
          setResults(sortedResults);
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  const length = 5 < results.length ? 5 : results.length; // 最大5位まで表示
  return (
    <div className="clear-container">
      <img src={logo} className="logo_clear" alt="kikikan" />
      <div className="container-title">
        <img
          src={congratulation}
          className="congratulations"
          alt="congratulation!"
        />
      </div>
      <div className="content-wrapper">
        <div className="ranking-wrapper">
          <div className="ranking-table-title">- 初級 RANKING -</div>
          {results.slice(0, length).map((result, index) => (
            <RankingRow
              key={result.id}
              rank={index + 1}
              name={result.name}
              time={result.clear_time}
            />
          ))}
          <div className="ranking-table-content">...</div>
          <div className="ranking-table-content-me">44位 マロン 44:44</div>
        </div>
        <div className="button-wrapper">
          <img src={face} className="clear-face" alt="clear!" />
          <div className="clear-massage">良いKIKIKANを持っているじゃないか</div>
        </div>
      </div>
      <TitleButton />
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

function formatDate(dateString) {
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: "Asia/Tokyo",
  };
  return new Date(dateString).toLocaleString("ja-JP", options);
}
