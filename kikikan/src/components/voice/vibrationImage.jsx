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
    }, 1000);
    
      //     const scaleFactor = percent / 100; // 0~1の範囲のスケール係数
      //     const canvasHeight = img.height + img.height * scaleFactor; // 音量に応じた縦サイズ
  
      //     canvas.height = canvasHeight;
      //     context.drawImage(img, 0, 0, img.width, img.height, x, y, img.width*size/100, canvasHeight*size/100);
         
      //   };
      //   const intervalId = setInterval(() => {
      //     const percent = volumeData.reduce((max, sample) => Math.max(max, Math.abs(sample) * 100), 0);
      //     renderMeter(percent);
      //   }, 1000);
      //     const scaleFactor = percent / 100; // 0~1の範囲のスケール係数
      //     const canvasHeight = img.height + img.height * scaleFactor; // 音量に応じた縦サイズ
  
      //     canvas.height = canvasHeight;
      //     context.drawImage(img, 0, 0, img.width, img.height, x, y, img.width*size/100, canvasHeight*size/100);
         
      //   };
      //   const intervalId = setInterval(() => {
      //     const percent = volumeData.reduce((max, sample) => Math.max(max, Math.abs(sample) * 100), 0);
      //     renderMeter(percent);
      //   }, 1000);
    
    
    // const canvas = canvasRef.current;
    // // const canvas = document.getElementById("canvas");
    // const context = canvas.getContext('2d');
    // const img = new Image()
    // img.src = getImage[filepath];
    // console.log(imageUrl)
    // img.onload = () => {
    //   //canvasサイズを画像のサイズに合わせる
    //   canvas.width = img.width+x;
    //   canvas.height = img.height+y;
    //   context.drawImage(img,0,0,img.width,img.height,x,y,(img.width)*size/100,img.height*size/100);

    //   // 画像のpxデータを取得 getImageData(sx, sy, sw, sh, settings)
    //   // 矩形の左上の角の座標は (sx, sy) であり、下の角の座標は (sx + sw - 1, sy + sh - 1) 
    //   const imageData = context.getImageData(0,0, canvas.width, canvas.height);
    //   const data = imageData.data;
      
    //   const renderMeter = (percent) => {
    //     const scaleFactor = percent / 100; // 0~1の範囲のスケール係数
    //     const canvasHeight = img.height + img.height * scaleFactor; // 音量に応じた縦サイズ

    //     canvas.height = canvasHeight;
    //     context.drawImage(img, 0, 0, img.width, img.height, x, y, img.width*size/100, canvasHeight*size/100);
       
    //   };
    //   const intervalId = setInterval(() => {
    //     const percent = volumeData.reduce((max, sample) => Math.max(max, Math.abs(sample) * 100), 0);
    //     renderMeter(percent);
    //   }, 1000);
    // };
    // // 画像の読み込みに失敗した際のハンドラ
    // img.onerror = () => {
    //   console.error('Failed to load image:', img.src);
    // };
  
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