import React, { useRef, useEffect,useState } from 'react';
import { CreateAudioContext } from './audioContext';
import { CalculatePeakLevel } from './utils';
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

const handleClick1 = () => {
  window.location.href = "/gameover";
}

// 振動
const VibrationBeni = ({volumeData,filepath,x,y,size}) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const imgRef = useRef(null);
  useEffect(() => {
    const img = imgRef.current;
    const scaleFactor = size / 100;
    img.style.transform = `translate(${x}vw, ${y}vw) scale(${scaleFactor})`;
    
    const renderMeter = (percent) => {
        const vibFactor = percent / 100; // 0~1の範囲のスケール係数
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
          opacity : 0.4
        }}
        className='image'
        onMouseEnter={() => handleClick1()}
        // onMouseLeave={() => setShowTooltip(false)}
        />
    </div>
  );
}
export default VibrationBeni