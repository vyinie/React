import "./form.css";
import { useState } from "react";
import Axios from "axios";

// material
import {
  TextField,
  Button,
  MenuItem,
  InputAdornment,
  FormHelperText,
} from "@mui/material";

//  ================== component ==================

export default function CrudForm({ categories, list }) {
  const [category, setCategory] = useState("");
  const handlerCategory = (e) => {
    setCategory(e.target.value);
  };

  // ================== pega os dados do formulario ==================
  const [newItem, setNewItem] = useState({});
  const handlerItem = (e) => {
    setNewItem((old) => ({
      ...old,
      [e.target.name]: e.target.value,
    }));
  };

  // ================== salva os dados ==================
  const saveData = () => {
    const inputs = [
      "inp-name",
      "inp-price",
      "inp-quant",
      "inp-quant",
    ];
    const arr = inputs.filter(
      (i) => document.getElementById(i).value == ""
    );

    if (arr.length == 0) {
      Axios.post("http://localhost:3307/register", {
        name: newItem.name,
        price: newItem.price,
        quantity: newItem.quant,
        category: newItem.cat,
      }).then((res) => console.log(res));

      setNewItem({});
      inputs.map((i) => (document.getElementById(i).value = null));
      setCategory("");
    }
  };

  console.log(list);
  return (
    <div onChange={handlerItem} className="form">
      {/* ======== input do nome ======== */}
      <TextField
        id="inp-name"
        label="Nome"
        name="name"
        variant="outlined"
      />
      {/* ======== input do preço ======== */}
      <TextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">R$</InputAdornment>
          ),
        }}
        id="inp-price"
        label="Preço"
        name="price"
        variant="outlined"
      />

      {/* ======== input da categoria ======== */}
      <TextField
        select
        id="inp-category"
        label="Categoria"
        variant="outlined"
        name="cat"
        value={category}
        onChange={(e) => {
          handlerCategory(e);
          handlerItem(e);
        }}
      >
        {categories.map((i) => (
          <MenuItem key={"menuItem" + i.id} value={i.categories}>
            {i.categories}
          </MenuItem>
        ))}
      </TextField>

      {/* ======== input da quantidade ======== */}
      <TextField
        id="inp-quant"
        label="Quantidade"
        name="quant"
        variant="outlined"
      />
      {/* ======== input da quantidade ======== */}
      <Button onClick={saveData} variant="contained">
        cadastrar
      </Button>
      
    </div>
  );
}
