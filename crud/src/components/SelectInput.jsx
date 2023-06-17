import { MenuItem, TextField } from "@mui/material";

export default function SelectInput({
  category,
  handlerCategory,
  handlerItem,
}) {
  const categories = [
    "verão",
    "inverno",
    "outono",
    "primavera",
    "social",
    "casual",
  ];

  return (
    <TextField
      select
      id="inp-category"
      label="Categoria"
      variant="outlined"
      name="cat"
      value={category}
      onChange={handlerCategory}
    >
      {categories.map((i) => (
        <MenuItem onChange={handlerItem} name="cat" key={i} value={i}>
          {i}
        </MenuItem>
      ))}
    </TextField>
  );
}
