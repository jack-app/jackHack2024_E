import React, { useCallback, useState, useContext} from "react";
import "./modal.css";
import imageUrl from "../../assets/kan.jpeg";
import imageUrl2 from "../../assets/test.png";
import benikoji from "../../assets/benikoji.png";
import bomkan from "../../assets/bomkan.png";
import lithium from "../../assets/lithium.png";
import hatena from "../../assets/hatena.png"
import { isVisibleContext } from "./vibrationImage2";
import { TimerContext } from "../../pages/NormalGame/normalGame";
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

  // context 用
  const {isVisible, setIsVisible} = useContext(isVisibleContext);
  const { handleAddTime,handleDecTime } = useContext(TimerContext);
  // const {handleAddTime2,handleDecTime2} = useContext(TimerContext2);

  const toProcess = (filepath) => {
    if (filepath === "bomkan") {
      if (count < 3) {
        // setIsVisible(true);
        setCount(() => `${Number(count) + 1}`);
        console.log(count);
        closeModel();
      } else {
        localStorage.setItem("clearTime", props.clearTime );
        console.log(props.clearTime);
        window.location.href = "/clear";
      }
    } else if (filepath === "lithium") {
      //timer減少
      handleDecTime()
      closeModel();
    }
  };

  const toExport = (filepath) => {
    if (filepath === "bomkan") {
      window.location.href = "/gameover";
    } else if (filepath === "lithium") {
      //timer増加
      handleAddTime()
      closeModel();
    }
  };
  const closeModel = () => {
    props.setShowModal(false);
  };

  const BackModel = () => {
    setIsVisible(true);
    props.setShowModal(false);
  };

  return (
    <div>
      {props.showFlag ? (
        <div className="overlay">
          <div className="modal-content">
            <button className="modal_back_button" onClick={BackModel}>
              別の缶を見る ↩︎
            </button>
            <div className="modal-image">
              <img src={hatena} alt="" />
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