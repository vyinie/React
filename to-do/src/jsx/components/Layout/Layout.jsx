import { Button, TextField } from "@mui/material";
import "/src/css/Layout.css";
import Item from "../Item/Item";
import { useState } from "react";

export default function Layout() {
  const [text, setText] = useState(null);
  const [id, setId] = useState(0);
  const [list, setList] = useState([]);
  const add = () => {
    setList([...list, { text: text, id: id }]);
    setId(id + 1);
    setText(null);
    document.getElementById("inp").focus();
    document.getElementById("inp").value = null;
  };

  return (
    <div className="conteinner">
      <div className="form">
        <TextField
          fullWidth
          id="inp"
          onKeyDown={(e) => {
            if ((e.key === "Enter") & (text !== null)) {
              add();
            }
          }}
          onChange={(e) => {
            setText(e.target.value);
          }}
          label="Add To Do"
          variant="outlined"
        />
        <Button
          onClick={() => {
            if (text !== null) {
              add();
            }
          }}
          variant="outlined"
        >
          Add
        </Button>
      </div>
      <div className="listItem">
        {list.map((i) => (
          <div key={i.id}>
            <Item id={i.id} text={i.text} arr={list} setList={setList} />
          </div>
        ))}
      </div>
      <Button
        variant="contained"
        color="error"
        className="delBtn"
        onClick={() => {
          setList([]);
          setId(0);
        }}
      >
        Apagar tudo
      </Button>
    </div>
  );
}
