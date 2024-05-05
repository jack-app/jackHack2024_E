import React, { useRef, useEffect, useState } from 'react';
import { CreateAudioContext, CreateProcessor, CreateSource } from './audioContext';
import { RenderMeter, CalculatePeakLevel } from './utils';
import VibrationImage from './vibrationImage';
import test from '../../assets/kan.jpeg';
import Modal from './modal'

const KanComponent = (props) => {

  // メータ要素への参照を保持するref
  const meterRef = useRef(null);
  const [volumeData, setVolumeData] = useState(null);

  useEffect(() => {
    const startAudio = async () => {
      const {ctx, media} = await CreateAudioContext();
      
      // eventhandler
      const onProcess = (event) => {
        const data = event.inputBuffer.getChannelData(0);
        // const percent = CalculatePeakLevel(data);
        // RenderMeter(percent, meterRef.current);
        setVolumeData(data)
      };

      // ScriptProcessorNodeを作成　イベントハンドラ設定
      const processor = CreateProcessor(ctx, onProcess);

      // MediaStreamSourceを作成、ProcessorNodeに接続
      CreateSource(ctx, media, processor);
    };
    //オーディオ処理開始
    startAudio();
  },[]
  );

  return (
    <div >
      {/* 音量データが存在する場合のみImageDistortionコンポーネントを表示 */}
      {volumeData && <VibrationImage volumeData={volumeData} filepath={props.img} x={props.x} y={props.y} size={props.size} clearTime={props.clearTime}/>}
    </div>
  )
}

export default KanComponent;