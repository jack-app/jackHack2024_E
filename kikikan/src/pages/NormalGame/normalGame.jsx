import {NavLink} from "react-router-dom";
import { useState, useEffect, useRef } from 'react';
import VolumeMeter from '../../components/voice/volumeMeter';
import BeniConponent from "../../components/voice/beniComponent";
import KanConponent from "../../components/voice/kanComponent";
import test from '../../assets/kan.jpeg';

let animationController;

export const NormalGame = () => {
  
  const [file, setFile] = useState(null);
  const canvasRef = useRef();
  const audioRef = useRef();
  const source = useRef();
  const analyzer = useRef();

  const handleAudioPlay = () => {
    let audioContext = new AudioContext();
    if (!source.current) {
      source.current = audioContext.createMediaElementSource(audioRef.current);
      analyzer.current = audioContext.createAnalyser();
      source.current.connect(analyzer.current);
      analyzer.current.connect(audioContext.destination);
    }
    visualizeData();
  };
  const visualizeData = () => {
    animationController = window.requestAnimationFrame(visualizeData);
    if (audioRef.current.paused) {
      return cancelAnimationFrame(animationController);
    }
    const songData = new Uint8Array(140);
    analyzer.current.getByteFrequencyData(songData);
    const bar_width = 3;
    let start = 0;
    const ctx = canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    for (let i = 0; i < songData.length; i++) {
      // compute x coordinate where we would draw
      start = i * 4;
      //create a gradient for the  whole canvas
      let gradient = ctx.createLinearGradient(
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      );
      gradient.addColorStop(0.2, "#2392f5");
      gradient.addColorStop(0.5, "#fe0095");
      gradient.addColorStop(1.0, "purple");
      ctx.fillStyle = gradient;
      ctx.fillRect(start, canvasRef.current.height, bar_width, -songData[i]);
    }
  };
  return (
    <div>
      <h1>NormalGame</h1>
      <VolumeMeter />
      {/* <VolumeMeter/> */}
      {/* <KanConponent x={0} y={10} img={'kan'} size={100}/> */}
      {/* <BeniConponent x={30} y={40} img={'test'} size={50}/> */}
      <KanConponent x={3} y={1} img={'bomkan'} size={20}/>
      <input
        type="file"
        onChange={({ target: { files } }) => files[0] && setFile(files[0])}
      />
      {file && (
        <audio
          ref={audioRef}
          onPlay={handleAudioPlay}
          src={window.URL.createObjectURL(file)}
          controls
        />
      )}
      <canvas ref={canvasRef} width={500} height={200} />
    </div>
  );
};