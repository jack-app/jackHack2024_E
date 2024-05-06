import {NavLink} from "react-router-dom";
import './explain.css';
import normal from "../../assets/normal.png"
import bomkan from "../../assets/bomkan.png"
import lithium from "../../assets/lithium.png"
import benikoji from "../../assets/benikoji.png"

export const Explain = () => {
  return (
    <div className="explaintext">
     メンズコーチジョージがジョージが危機感を与えるために街中に爆弾入り缶を設置したぞ！<br />
      制限時間内にジョージが仕掛けた爆弾を全て処理しよう！<br />
      街中には４種類の缶が紛れているぞ！<br />
      ①<img src={normal} className="normal"/>  ②<img src={bomkan} className="bomkan"/>  ③<img src={lithium} className="lithium"/>  ④<img src={benikoji} className="benikoji"/><br />
      ①以外の缶をタップすると「処理」と「輸出」の２つの選択肢が出てくる。<br />
      ４種類の缶をこの下にあるルールに従って操作しよう！<br /><br />
      ①普通の缶<br /><img src={normal} className="normal"/><br />
      ポイ捨てされた普通の缶だ。<br />
      このゲームでは何の意味もない。<br />
      地球環境のために現実では回収しよう。<br /><br />
      ②爆弾入り缶<br /><img src={bomkan} className="bomkan"/><br />
      ジョージが仕掛けた缶だ！<br />
      缶をタップして処理しよう！<br />
      すべて処理するとゲームクリアだ。<br />
      ただし！輸出すると国際問題の危機でゲームオーバーになるので注意！<br /><br />
      ③リチウム缶<br /><img src={lithium} className="lithium"/><br />
      ポイ捨てされたリチウム製の缶だ。<br />
      資源を欲する諸外国に輸出しよう！<br />
      輸出すると制限時間が延びるが、処理すると制限時間が短くなるぞ！<br /><br />
      ④紅麹サプリメント入りの缶<br /><img src={benikoji} className="benikoji"/><br />
      多くは語らない。<br />
      カーソルをあてるだけでゲームオーバーだ！<br /><br />
      ゲームは初級、中級、上級があるぞ！<br />
      すべてクリアでジョージの危機は解決だ！
    </div>
  );
};