import {
  Button,
  InputAdornment,
  MenuItem,
  TextField,
  Modal,
  Box,
} from "@mui/material";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import Axios from "axios";

function TableRow({
  id,
  name,
  category,
  price,
  quantity,
  categories,
}) {
  // open modal to edit
  const [open, setOpen] = useState(false);
  const handleModal = () => setOpen(!open);

  const [categorySelected, setCategorySelected] = useState("");
  const handlerCategorySelected = (e) => {
    setCategorySelected(e.target.value);
  };

  const [editItem, setEditItem] = useState({});
  const editData = () => {};

  const delItem = () => {
    Axios.delete(`http://localhost:3307/delitem/${id}`);
  };
  return (
    <tr className="tr">
      <td className="td tdId">{id}</td>
      <td className="td tdName">{name}</td>
      <td className="td tdCat">{category}</td>
      <td className="td tdPrice">{price}</td>
      <td className="td tdQuant">{quantity}</td>
      <td className="td" id="tdAction">
        <div className="editIcon" onClick={handleModal}>
          <EditIcon className="icon" />
        </div>
        <div onClick={delItem} className="delIcon">
          <DeleteOutlineIcon className="icon" />
        </div>

        <div>
          <Modal
            open={open}
            onClose={handleModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="modal"
          >
            <Box className="boxModal">
              <TextField
                id="inp-edit-name"
                label="Nome"
                name="name"
                variant="outlined"
                defaultValue={name}
              />

              {/* ======== input do preço ======== */}
              <TextField
                defaultValue={price}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      R$
                    </InputAdornment>
                  ),
                }}
                id="inp-edit-price"
                label="Preço"
                name="price"
                variant="outlined"
              />

              {/* ======== input da categoria ======== */}
              <TextField
                defaultValue={category}
                select
                id="inp-edit-category"
                label="Categoria"
                variant="outlined"
                name="cat"
                onChange={(e) => {
                  handlerCategorySelected(e);
                }}
              >
                {categories.map((i) => (
                  <MenuItem
                    key={"caregory" + i.id}
                    value={i.categories}
                  >
                    {i.categories}
                  </MenuItem>
                ))}
              </TextField>

              {/* ======== input da quantidade ======== */}
              <TextField
                id="inp-edit-quant"
                label="Quantidade"
                name="quant"
                variant="outlined"
                defaultValue={quantity}
              />
              {/* ======== botao cancelar ======== */}
              <Button
                onClick={handleModal}
                color="error"
                variant="contained"
              >
                cancelar
              </Button>

              {/* ======== botao editar ======== */}
              <Button onClick={editData} variant="contained">
                editar
              </Button>
            </Box>
          </Modal>
        </div>
      </td>
    </tr>
  );
}

export default TableRow;
