import React, { useRef, useEffect } from 'react';
import { CreateAudioContext } from './audioContext';
import { CalculatePeakLevel } from './utils';
// fileのパスを引数で渡す
import imageUrl from '../../assets/kan.jpeg'

const VibrationImage = ({volumeData,filepath}) => {
  const canvasRef = useRef(null);
  const imgRef = useRef(null);
  // filepath = '../assets/kan.jpeg'
  useEffect(() => {
    const canvas = canvasRef.current;
    // const canvas = document.getElementById("canvas");
    const context = canvas.getContext('2d');
    const img = new Image()
    img.src = imageUrl;
    img.onload = () => {
      //canvasサイズを画像のサイズに合わせる
      canvas.width = img.width;
      canvas.height = img.height;
      context.drawImage(img,0,0,canvas.width,canvas.height);

      // 画像のpxデータを取得 getImageData(sx, sy, sw, sh, settings)
      const imageData = context.getImageData(0,0, canvas.width, canvas.height);
      const data = imageData.data;
      
      const renderMeter = (percent) => {
        const scaleFactor = percent / 100; // 0~1の範囲のスケール係数
        const canvasHeight = img.height + img.height * scaleFactor; // 音量に応じた縦サイズ
        const canvasWidth = img.width - img.width * scaleFactor;
        canvas.height = canvasHeight;
        context.drawImage(img, 0, 0, img.width, img.height, 0, 0, canvasWidth, canvasHeight);
      };
      const intervalId = setInterval(() => {
        const percent = volumeData.reduce((max, sample) => Math.max(max, Math.abs(sample) * 100), 0);
        renderMeter(percent);
      }, 100);
      // // 音量データに基づいてpxデータを操作
      // for (let i = 0; i < data.length; i+= 4) {
      //   // 音量データを0~100の範囲に変換
      //   const vibration = volumeData[i / 4] * 100;
      //   data[i] += Math.min(255,data[i] + vibration / 100); // Rに歪み
      //   data[i + 1] += Math.min(255,data[i + 1] + vibration / 100); // G に歪み
      //   data[i + 2] += Math.min(255,data[i + 1] + vibration / 100); // B に歪み
      // }
      // context.putImageData(imageData, 0,0);
    };
    // 画像の読み込みに失敗した際のハンドラ
    img.onerror = () => {
      console.error('Failed to load image:', filepath);
    };

  },[volumeData,filepath]);

  // useEffect(() => {
  //   const canvas = canvasRef.current;
  //   const context = canvas.getContext('2d');

  // })
  return <canvas ref={canvasRef} />;
}
export default VibrationImage