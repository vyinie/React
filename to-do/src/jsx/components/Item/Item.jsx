import { Button, Box, Modal, TextField } from "@mui/material";
import { useState } from "react";
import "/src/css/Item.css";

export default function Item({ id, text, arr, setList }) {
  const [open, setOpen] = useState(false);
  const openModfy = () => setOpen(!open);
  const [editedText, setEditedText] = useState(null);
  const saveId = id;
  return (
    <div
      key={saveId}
      id={saveId}
      className="item"
    >
      <input type="checkbox" id={`box${saveId}`} className="box" />
      <label id={`label${saveId}`} for={`box${saveId}`}>
        {text}
      </label>
      <span
        onClick={(e) => {
          const newArr = arr.filter((i) => i.id != e.target.id);
          setList(newArr);
        }}
        className="imgConteinner"
      >
        <img
          id={saveId}
          className="imgDel"
          src="https://cdn-icons-png.flaticon.com/512/126/126468.png"
          alt="trash"
        />
      </span>
      <span
        onClick={() => {
          openModfy();
          setTimeout(() => {
            document.getElementById("inpEdit").focus();
          }, 100);
        }}
        className="imgConteinner imgEdit"
        id={saveId}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/1904/1904300.png"
          alt="edit"
        />
      </span>
      <div>
        <Modal
          open={open}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            className="boxModel"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                document.querySelector(`#label${saveId}`).textContent =
                  editedText;
                openModfy();
              }
            }}
          >
            <TextField
              className="inpEdit"
              id="inpEdit"
              fullWidth
              onChange={(e) => {
                setEditedText(e.target.value);
              }}
              label="Edit To Do"
              variant="outlined"
            />
            <Button
              className="btnEdit"
              onClick={() => {
                document.querySelector(`#label${saveId}`).textContent =
                  editedText;
                setEditedText(null);
                openModfy();
              }}
              variant="outlined"
            >
              editar
            </Button>
            <Button
              className="btnCancelEdit"
              onClick={openModfy}
              variant="outlined"
              color="error"
            >
              Cancelar
            </Button>
          </Box>
        </Modal>
      </div>
    </div>
  );
}
