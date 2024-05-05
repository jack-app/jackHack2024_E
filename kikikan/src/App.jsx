import "./App.css";
import "./reset.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { EasyGame } from "./pages/EasyGame/easyGame";
import { Explain } from "./pages/Explain/explain";
import { GameClear } from "./pages/GameClear/gameClear";
import { HardGame } from "./pages/HardGame/hardGame";
import { Level } from "./pages/Level/level";
import { NormalGame } from "./pages/NormalGame/normalGame";
import { GameOver } from "./pages/GameOver/gameOver";
import { Start } from "./pages/Start/start";
import { Pnf } from "./pnf";

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <ul></ul>
        <Routes>
          <Route activeClassName="active" path="*" element={<Pnf />} />
          <Route activeClassName="active" path="/" element={<Start />} />
          <Route activeClassName="active" path="/level" element={<Level />} />
          <Route
            activeClassName="active"
            path="/explain"
            element={<Explain />}
          />
          <Route
            activeClassName="active"
            path="/easygame"
            element={<EasyGame />}
          />
          <Route
            activeClassName="active"
            path="/normalgame"
            element={<NormalGame />}
          />
          <Route
            activeClassName="active"
            path="/hardgame"
            element={<HardGame />}
          />
          <Route
            activeClassName="active"
            path="/clear"
            element={<GameClear />}
          />
          <Route
            activeClassName="active"
            path="/gameover"
            element={<GameOver />}
          />
        </Routes>

      </BrowserRouter>
    </div>
  );
}
