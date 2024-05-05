import React, { useRef, useEffect,useState } from 'react';
import { CreateAudioContext } from './audioContext';
import { CalculatePeakLevel } from './utils';
import imageUrl from '../../assets/kan.jpeg'
import imageUrl2 from '../../assets/test.png'
import benikoji from '../../assets/benikoji.png'
import bomkan from '../../assets/bomkan.png'
import lithium from '../../assets/lithium.png'
import Modal from './modal'

// 検索でどうにかする
const getImage = {
  'kan' : imageUrl,
  'test' : imageUrl2,
  'bomkan' :bomkan,
  'lithium':lithium,
  'benikoji':benikoji
};

// 振動
const VibrationImage = ({volumeData,filepath,x,y,size}) => {
  const imgRef = useRef(null);
  const [showModal, setShowModal] = useState(false); 
  // click用
  const onModal = () => {
    setShowModal(true);
  }

  useEffect(() => {
    const img = imgRef.current;
    const scaleFactor = size / 100;
    img.style.transform = `translate(${x}vw, ${y}vw) scale(${scaleFactor})`;
    
    const renderMeter = (percent) => {
        const vibFactor = percent / 10; // 0~1の範囲のスケール係数
        const vibHeight = y + y * vibFactor; // 音量に応じた縦サイズ
        img.style.transform = `translate(${x}vw, ${vibHeight}vw) scale(${scaleFactor})`;
       
      };
    const intervalId = setInterval(() => {
        const percent = volumeData.reduce((max, sample) => Math.max(max, Math.abs(sample) * 100), 0);
        renderMeter(percent);
    }, 100);
  
  },[volumeData, filepath, x, y, size]);

  // console.log(showTooltip)
  return (
    <div className="hover-image-container">
        <img
        ref={imgRef}
        src={getImage[filepath]}
        alt="Vibration Image"
        style={{
          display: 'block',
          position: 'absolute',
        }}
        className='image'
        onClick = {() => {onModal()}}
        />
        <Modal showFlag={showModal} setShowModal={setShowModal} content="てすと" filepath={filepath}/>
    </div>
  );
}
export default VibrationImage