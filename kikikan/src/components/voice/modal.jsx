import React, { useCallback ,useState} from 'react';
import './modal.css'
import imageUrl from '../../assets/kan.jpeg'
import imageUrl2 from '../../assets/test.png'
import benikoji from '../../assets/benikoji.png'
import bomkan from '../../assets/bomkan.png'
import lithium from '../../assets/lithium.png'

// 検索でどうにかする
const getImage = {
  'kan' : imageUrl,
  'test' : imageUrl2,
  'bomkan' :bomkan,
  'lithium':lithium,
  'benikoji':benikoji
};

//値があるときは初期値をlocalStorageで参照
const getLocalStorageValue = (key, initValue) => {
  const item = localStorage.getItem(key)
  return item ? item :initValue
}
const useLocalStorage = (key,initValue) => {
  const [value, setValue] = useState(() => getLocalStorageValue(key,initValue));
  
  //状態の変更とともにlocalStorageを更新する
  const setLocalStorageValue = useCallback(
    (setStateAction) => {
      const newValue = typeof setStateAction === 'function' ? setStateAction(value) : setStateAction;
      localStorage.setItem(key, newValue);
      setValue(() => newValue);
    },
    [key, value]
  );
  return [value, setLocalStorageValue];
}

const Modal = (props) => {
  const [count, setCount] = useLocalStorage("counter", "0");

  const toProcess = (filepath) => {
    if (filepath == 'bomkan') {
      // TODO: localStorageに保存
      setCount(() => `${Number(count) + 1}`)
      console.log(count)
      window.location.href = "/gameover";
    }
    else {
      window.location.href = "/gameover";
    }
  }
  
  const toExport = (filepath) => {
    if (filepath == 'lithium') {
      window.location.href = "/gameover";
    }
    else {
      window.location.href = "/gameover";
    }
  }
  const closeModel = () => {
    props.setShowModal(false);
  }
  return (
    <div>
      {props.showFlag ? (
        <div className='overlay'>
          <div className='modal-content'>
              {/* <p>{props.content}</p> */}
              <button onClick={closeModel}>別の缶を見る</button>
              <div className='modal-image'>
              <img 
                src={getImage[props.filepath]}
              />
              </div>
              <button onClick={() => toProcess(props.filepath)}>処理へ</button>
              <button onClick={() => toExport(props.filepath)}>輸出へ</button>
          </div>
        </div>
      ) : (
        <div></div> // showFlagがfalseの時は表示しない
      )}

    </div>
  );
};
export default Modal