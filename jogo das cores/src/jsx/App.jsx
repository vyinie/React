import { useEffect, useState } from "react";
import "../css/App.css";
import { colorRandom } from "./Randomizers";
import LayoutColors from "./components/LayoutColors";
import Lifes from "./components/lifes";

function App() {
  const [trueColor, setTrueColor] = useState(colorRandom());
  const [lifes, setLifes] = useState(3);
  const [score, setScore] = useState(0);
  const [hightScore, setHightScore] = useState(0);

  //========================= limita a vida =======================================
  useEffect(() => {
    if (lifes == 0) {
      document.querySelector(".popupWrapper").style.display = "flex";
    }
  }, [lifes]);

  //========================= registra os pontos =======================================
  useEffect(() => {
    if (score > hightScore) {
      setHightScore(score);
    }
  }, [score]);

  // ========================= score area =======================================

  return (
    <div className="App">
      {/* ========================= score area ======================================= */}
      <div className="scoreContainer">
        <div className="score">
          <h2>Pontos</h2>
          <h2 id="currentlyScore">{score}</h2>
        </div>
        <div className="score">
          <h2>Record</h2>
          <h2 id="hightScore">{hightScore}</h2>
        </div>
      </div>

      {/* ========================= main layout ======================================= */}
      <Lifes lifes={lifes} />

      <div className="displayText">
        <h1>{trueColor.slice(4, -1)}</h1>
      </div>

      <LayoutColors
        lifes={lifes}
        setLifes={setLifes}
        trueColor={trueColor}
        setTrueColor={setTrueColor}
        score={score}
        setScore={setScore}
      />

      {/* ========================= popup to loosers ======================================= */}
      <div className="popupWrapper">
        <div className="popup">
          <h2>perdeu, troxa</h2>
          <button
            className="popupBtn"
            onClick={() => {
              document.querySelector(".popupWrapper").style.display = "";
              document.getElementById("btnSetLvlPleno").style
                .backgroundColor !== ""
                ? setLifes(1)
                : setLifes(3);
              setScore(0);
            }}
          >
            Recomeçar
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
