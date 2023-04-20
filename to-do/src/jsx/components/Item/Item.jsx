import { useState } from "react";
import "/src/css/Item.css";

export default function Item({ id, text, arr, set }) {
  const [linha, setLinha] = useState(true);
  return (
    <div key={id} id={id} className="item">
      <input type="checkbox" className="box" />
      <p>{text}</p>
      <span className="imgConteinner">
        <img
          id={id}
          onClick={(e) => {
            const index = arr.filter((i) => i.id != e.target.id);
            set(index);
          }}
          className="img"
          src="https://cdn-icons-png.flaticon.com/512/126/126468.png"
          alt="trash"
        />
      </span>
    </div>
  );
}
