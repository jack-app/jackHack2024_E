import React, { useRef, useEffect, useState } from 'react';
import { CreateAudioContext, CreateProcessor, CreateSource } from './audioContext';
import { RenderMeter, CalculatePeakLevel } from './utils';
import VibrationImage from './vibrationBeni';
import test from '../../assets/kan.jpeg';

const VolumeMeter = () => {
  // メータ要素への参照を保持するref
  const meterRef = useRef(null);
  const [volumeData, setVolumeData] = useState(null);

  useEffect(() => {
    const startAudio = async () => {
      const {ctx, media} = await CreateAudioContext();
      
      // eventhandler
      const onProcess = (event) => {
        const data = event.inputBuffer.getChannelData(0);
        const percent = CalculatePeakLevel(data);
        RenderMeter(percent, meterRef.current);
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
    <div>
      <div style={{ border: '1px solid black', width: '500px' }}>
        <div ref={meterRef} style={{ height: '10px', background: 'white', transition: 'width .5s', width: '0%' }} />
      </div>
    </div>
  )
}

export default VolumeMeter;