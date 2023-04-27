import { useEffect, useState } from "react";
import "/src/css/LayoutColors.css";
import "/src/css/App.css";

import { idRandom, colorRandom } from "../Randomizers";

export default function LayoutColors({
  lifes,
  setLifes,
  trueColor,
  setTrueColor,
  score,
  setScore,
  openDifChecker,
}) {
  // set blocks wit false colors
  const [blocks, setBlocks] = useState([0, 1, 2, 3, 4, 5]);
  const [falseColors, setFalseColors] = useState([
    colorRandom(),
    colorRandom(),
    colorRandom(),
    colorRandom(),
    colorRandom(),
    colorRandom(),
  ]);

  // chooses a random block to true color
  const [trueId, setTrueId] = useState(idRandom(blocks.length));

  // set difficultylvl
  function setDiff(e) {
    if (e.target.id == "LvlEz") {
      setBlocks([0, 1, 2, 3]);
      setTrueId(idRandom(blocks.length));
      setLifes(3);

      document.querySelector(".LayoutColors").style.width = "min-content";

      e.target.style.backgroundColor = "#ddd";
      e.target.style.boxShadow = "#0005 inset -3px 4px 4px";

      document.getElementById("LvlJunior").style.backgroundColor = "";
      document.getElementById("LvlJunior").style.boxShadow = "";

      document.getElementById("LvlPleno").style.backgroundColor = "";
      document.getElementById("LvlPleno").style.boxShadow = "";
    } else if (e.target.id == "LvlJunior") {
      setBlocks([0, 1, 2, 3, 4, 5]);
      setTrueId(idRandom(blocks.length));
      setLifes(3);

      e.target.style.backgroundColor = "#ddd";
      e.target.style.boxShadow = "#0005 inset -3px 4px 4px";

      document.getElementById("LvlEz").style.backgroundColor = "";
      document.getElementById("LvlEz").style.boxShadow = "";

      document.getElementById("LvlPleno").style.backgroundColor = "";
      document.getElementById("LvlPleno").style.boxShadow = "";

      document.querySelector(".LayoutColors").style.width = "";
    } else if (e.target.id == "LvlPleno") {
      setBlocks([0, 1, 2, 3, 4, 5]);
      setTrueId(idRandom(blocks.length));
      setLifes(1);

      document.querySelector(".LayoutColors").style.width = "";

      e.target.style.backgroundColor = "#ddd";
      e.target.style.boxShadow = "#0005 inset -3px 4px 4px";

      document.getElementById("LvlJunior").style.backgroundColor = "";
      document.getElementById("LvlJunior").style.boxShadow = "";

      document.getElementById("LvlEz").style.backgroundColor = "";
      document.getElementById("LvlEz").style.boxShadow = "";
    }
    reset();
  }

  // ... resets... the game... ... ... bruh
  function reset() {
    setTrueColor(colorRandom());
    setTrueId(idRandom(blocks.length));
    setFalseColors([
      colorRandom(),
      colorRandom(),
      colorRandom(),
      colorRandom(),
      colorRandom(),
      colorRandom(),
    ]);
  }

  // fig out if u lost and shows the right color
  useEffect(() => {
    if (lifes === 0) {
      const wrongBlocks = blocks.filter((i) => i != trueId);
      wrongBlocks.map((i) => {
        document.getElementById(i).style.backgroundColor = "#0005";
      });
    }
    document.querySelector(".popupBtn").addEventListener(
      "click",
      () => {
        document.querySelector(".popupWrapper").style.display = "";
        document.getElementById("LvlPleno").style.backgroundColor !== ""
          ? setLifes(1)
          : setLifes(3);
        setScore(0);
        reset();
        setScore(0)
      },
      [lifes]
    );
  });
  // selects the normal lvl when load the page
  useEffect(() => {
    document.getElementById("LvlJunior").click();
  }, []);

  // ===============================HTML===============================
  return (
    <div className="LayoutColors">
      {blocks.map((i) =>
        // load the right block
        i == trueId ? (
          <span
            id={i}
            style={{ backgroundColor: trueColor }}
            key={blocks.indexOf(i)}
            className="colorBlock"
            onClick={() => {
              reset();
              (lifes < 3) &
                (document.getElementById("LvlPleno").style.backgroundColor ===
                  "") && setLifes(lifes + 1);
              setScore(score + 100);
            }}
          >
            <div id={`hover${i}`} className="blockHover"></div>
          </span>
        ) : (
          // load the right block
          <span
            id={i}
            style={{ backgroundColor: falseColors[i] }}
            key={blocks.indexOf(i)}
            className="colorBlock"
            onClick={(e) => {
              e.target.style.backgroundColor ="#444"
              setLifes(lifes - 1);
            }}
          >
            <div id={`hover${i}`} className="blockHover"></div>
          </span>
        )
      )}

      {/* ========================= difficulty lvl control ========================= */}
      <div
        className="difFControlWrapper"
        onClick={(e) => {
          openDifChecker(e);
        }}
      >
        <div className="difficultyControl">
          {/* NOOB LVL LOL */}
          <button id="LvlEz" className="btnDifficulty" onClick={setDiff}>
            noob
          </button>

          {/* normal LVL */}
          <button onClick={setDiff} id="LvlJunior" className="btnDifficulty">
            Junior
          </button>

          {/* pleno Lvl */}
          <button onClick={setDiff} id="LvlPleno" className="btnDifficulty">
            Pleno
          </button>
        </div>
      </div>
    </div>
  );
}
