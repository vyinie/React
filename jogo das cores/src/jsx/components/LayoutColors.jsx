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
}) {
  const [blocks, setBlocks] = useState([0, 1, 2, 3, 4, 5]);
  const [falseColors, setFalseColors] = useState([
    colorRandom(),
    colorRandom(),
    colorRandom(),
    colorRandom(),
    colorRandom(),
    colorRandom(),
  ]);

  const [trueId, setTrueId] = useState(idRandom(blocks.length));

  const radios = document.getElementsByClassName("inpRad");

  function setLvlEz() {
    setBlocks([0, 1, 2, 3]);
    setTrueId(idRandom(blocks.length));
    document.querySelector(".LayoutColors").style.width = "350px";
    setLifes(3);
    reset();
  }
  function setLvlNormal() {
    setBlocks([0, 1, 2, 3, 4, 5]);
    setTrueId(idRandom(blocks.length));
    document.querySelector(".LayoutColors").style.width = "";
    setLifes(3);
    reset();
  }
  function setLvlPleno() {
    setBlocks([0, 1, 2, 3, 4, 5]);
    document.querySelector(".LayoutColors").style.width = "";
    setTrueId(idRandom(blocks.length));
    setLifes(1);
    reset();
  }

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

  return (
    <div className="LayoutColors">
      {blocks.map((i) =>
        i == trueId ? (
          <span
            id={i}
            style={{ backgroundColor: trueColor }}
            key={blocks.indexOf(i)}
            className="colorBlock"
            onClick={(e) => {
              reset();
              (lifes < 3) &
                (document.getElementById("btnSetLvlPleno").style
                  .backgroundColor ===
                  "") && setLifes(lifes + 1);
              setScore(score + 100);
              console.log(e.target.style.backgroundColor);
            }}
          >
            <div id={`hover${i}`} className="blockHover"></div>
          </span>
        ) : (
          <span
            id={i}
            style={{ backgroundColor: falseColors[i] }}
            key={blocks.indexOf(i)}
            className="colorBlock"
            onClick={() => {
              setLifes(lifes - 1);
              if (lifes === 1) {
                // setDifficult();
                reset();
              }
            }}
          >
            <div id={`hover${i}`} className="blockHover"></div>
          </span>
        )
      )}

      {/* ========================= difficult control ======================================= */}
      <div className="difficultControl">
        <button
          onClick={(e) => {
            e.target.style.backgroundColor = "#ddd";
            document.getElementById("btnSetLvlNormal").style.backgroundColor =
              "";
            document.getElementById("btnSetLvlPleno").style.backgroundColor =
              "";
            setLvlEz();
          }}
          id="btnSetLvlEz"
          className="btnDifficult"
        >
          noob
        </button>
        <button
          onClick={(e) => {
            e.target.style.backgroundColor = "#ddd";
            document.getElementById("btnSetLvlEz").style.backgroundColor = "";
            document.getElementById("btnSetLvlPleno").style.backgroundColor =
              "";

            setLvlNormal();
          }}
          id="btnSetLvlNormal"
          className="btnDifficult"
        >
          normal
        </button>
        <button
          onClick={(e) => {
            e.target.style.backgroundColor = "#ddd";
            document.getElementById("btnSetLvlEz").style.backgroundColor = "";
            document.getElementById("btnSetLvlNormal").style.backgroundColor =
              "";

            setLvlPleno();
          }}
          id="btnSetLvlPleno"
          className="btnDifficult"
        >
          pleno
        </button>
      </div>
    </div>
  );
}
