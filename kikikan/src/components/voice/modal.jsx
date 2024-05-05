import React, { useCallback, useState } from "react";
import "./modal.css";
import imageUrl from "../../assets/kan.jpeg";
import imageUrl2 from "../../assets/test.png";
import benikoji from "../../assets/benikoji.png";
import bomkan from "../../assets/bomkan.png";
import lithium from "../../assets/lithium.png";

// 検索でどうにかする
const getImage = {
  kan: imageUrl,
  test: imageUrl2,
  bomkan: bomkan,
  lithium: lithium,
  benikoji: benikoji,
};

//値があるときは初期値をlocalStorageで参照
const getLocalStorageValue = (key, initValue) => {
  const item = localStorage.getItem(key);
  return item ? item : initValue;
};
const useLocalStorage = (key, initValue) => {
  const [value, setValue] = useState(() =>
    getLocalStorageValue(key, initValue)
  );

  //状態の変更とともにlocalStorageを更新する
  const setLocalStorageValue = useCallback(
    (setStateAction) => {
      const newValue =
        typeof setStateAction === "function"
          ? setStateAction(value)
          : setStateAction;
      localStorage.setItem(key, newValue);
      setValue(() => newValue);
    },
    [key, value]
  );
  return [value, setLocalStorageValue];
};

const Modal = (props) => {
  const [count, setCount] = useLocalStorage("counter", "0");

  const toProcess = (filepath) => {
    if (filepath === "bomkan") {
      if (count < 3) {
        setCount(() => `${Number(count) + 1}`);
        console.log(count);
        closeModel();
      } else {
        const clearTime = props.gameTimer;
        localStorage.setItem("clearTime", clearTime );
        window.location.href = "/clear";
      }
    } else if (filepath === "lithium") {
      //timer減少
    }
  };

  const toExport = (filepath) => {
    if (filepath === "bomkan") {
      window.location.href = "/gameover";
    } else if (filepath === "lithium") {
      //timer増加
    }
  };
  const closeModel = () => {
    props.setShowModal(false);
  };
  return (
    <div>
      {props.showFlag ? (
        <div className="overlay">
          <div className="modal-content">
            {/* <p>{props.content}</p> */}
            <button className="modal_back_button" onClick={closeModel}>
              別の缶を見る ↩︎
            </button>
            <div className="modal-image">
              <img src={getImage[props.filepath]} alt="" />
            </div>
            <button
              className="modal_choice_button"
              onClick={() => toProcess(props.filepath)}
            >
              処理へ
            </button>
            <button
              className="modal_choice_button"
              onClick={() => toExport(props.filepath)}
            >
              輸出へ
            </button>
          </div>
        </div>
      ) : (
        <div></div> // showFlagがfalseの時は表示しない
      )}
    </div>
  );
};
export default Modal;
