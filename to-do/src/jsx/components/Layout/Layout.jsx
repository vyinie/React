import { Button, TextField } from "@mui/material";
import "/src/css/Layout.css";
import Item from "../Item/Item";
import { useState } from "react";

export default function Layout() {
  const [text, setText] = useState(null);
  const [id, setId] = useState(0);
  const [list, setList] = useState([]);

  return (
    <div className="conteinner">
      <div className="form">
        <TextField
          fullWidth
          color="primary"
          id="inp"
          onChange={(e) => setText(e.target.value)}
          label="Add To Do"
          variant="outlined"
        />
        <Button
          onClick={() => {
            setList([...list, { text: text, id: id }]);
            setId(id + 1);
            setText(null)
            document.getElementById("inp").focus();
            document.getElementById("inp").value = null;
          }}
          color="primary"
          variant="outlined"
        >
          Add
        </Button>
      </div>
      <div className="listItem">
        {list.map((i) => (
          <div key={i.id}>
            <Item id={i.id} text={i.text} arr={list} set={setList}/>
          </div>
        ))}
      </div>
    </div>
  );
}
