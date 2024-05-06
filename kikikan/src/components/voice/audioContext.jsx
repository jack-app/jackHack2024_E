// Web Audioの仕様の互換性を考慮して、AudioContextを取得する関数
const AudioContext = window.AudioContext || window.webkitAudioContext;

export const CreateAudioContext = async () => {
  // getUserMesiaでマイクへのアクセス要求
  const media = await navigator.mediaDevices.getUserMedia({ audio: true }).catch(console.error);
  // AudioContextを作る(複数作るとバグる)
  const ctx = new AudioContext();
  console.log('Sampling Rate:', ctx.sampleRate);
  return { ctx, media };
};

export const CreateProcessor = (ctx, onProcess) => {
  // バッファサイズ1024(イベントが起こる単位),入力チャンネル1,出力チャンネル1で新しいScriptProcessor
  const processor = ctx.createScriptProcessor(1024, 1, 1);
  // オーディオプロセスイベントハンドラを設定
  processor.onaudioprocess = onProcess;
  // 出力先にdestinationを設定
  processor.connect(ctx.destination);
  return processor;
};

// MediaStreamSourceを作成し、ProcessorNodeに接続する関数
export const CreateSource = (ctx, media, processor) => {
  // MediaStreamSourceを作成
  const source = ctx.createMediaStreamSource(media);
  // ProcessorNodeに接続
  source.connect(processor);
};