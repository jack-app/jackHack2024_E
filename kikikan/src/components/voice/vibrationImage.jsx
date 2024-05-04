import React, { useRef, useEffect } from 'react';
import { CreateAudioContext } from './audioContext';
import { CalculatePeakLevel } from './utils';
import imageUrl from '../../assets/kan.jpeg'
import imageUrl2 from '../../assets/test.png'

// 検索でどうにかする
const getImage = {
  'kan' : imageUrl,
  'test' : imageUrl2
};

const VibrationImage = ({volumeData,filepath,x,y,size}) => {
  const imgRef = useRef(null);
  // imageUrl = '../../assets/kan.jpeg'
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

  return (
    <img
      ref={imgRef}
      src={getImage[filepath]}
      alt="Vibration Image"
      style={{
        display: 'block',
        transformOrigin: 'top left',
      }}
    />
  );
}
export default VibrationImage