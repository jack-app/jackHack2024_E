export const RenderMeter = (percent, element) => {
  // console.log('Percent:',percent);
  // 100以上なら背景を赤
  element.style.background = percent <100 ? 'black' : 'red';

  // メーターの幅をパーセンテージに合わせて設定
  element.style.width = `${Math.min(Math.max(0, percent), 100)}%`;
};

export const CalculatePeakLevel = (data) => {
  // データ配列から絶対値のmax を求める
  const peak = data.reduce((max, sample) => {
    const cur = Math.abs(sample);
    return max > cur ? max : cur;
  });

  //ピークからデシベル値を計算　0~100に変換
  return (100/32) * 10 * Math.log10(peak) + 100;
};