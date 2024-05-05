// modules
import {
  child,
  get,
  ref,
  set,
  onValue,
  query,
  orderByChild,
  equalTo,
  limitToFirst,
} from "firebase/database";
import { useState, useEffect } from "react";
import { db } from "../../utils/firebase";
import { v4 as uuid } from "uuid";

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
  // const [result, setResults] = useState([]);
  // const dbRef = ref(db, "result");

  const [easyResults, setEasyResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const dbRef = ref(db);
      const resultRef = child(dbRef, "result");

      // rankが"easy"のデータを取得し、clear_timeでソートする
      const queryRef = query(
        resultRef,
        orderByChild("rank"),
        equalTo("easy")
        // orderByChild("clear_time"),
        // limitToFirst(5)
      );

      try {
        const snapshot = await get(queryRef);
        if (snapshot.exists()) {
          const data = snapshot.val();
          const sortedResults = Object.entries(data)
            .map(([id, result]) => ({ id, ...result }))
            .sort((a, b) => a.clear_time.localeCompare(b.clear_time));
          setEasyResults(sortedResults);
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  console.log(easyResults);
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
          <RankingRow rank="1" name="ヌヌーピー" time="00:40" />
          <RankingRow rank="2" name="ヌヌーピー" time="00:41" />
          <RankingRow rank="3" name="ヌヌーピー" time="00:42" />
          <RankingRow rank="4" name="ヌヌーピー" time="00:43" />
          <RankingRow rank="5" name="ヌヌーピー" time="00:44" />
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
