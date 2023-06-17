const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "a1234567",
  database: "crud",
});

app.use(cors());
app.use(express.json());

// to add a product
app.post("/register", (req, res) => {
  const { name } = req.body;
  const { price } = req.body;
  const { quantity } = req.body;
  const { category } = req.body;

  const SQL =
    "INSERT INTO products (name, price, quantity, category) VALUES ( ?,?,?,?)";

  db.query(SQL, [name, price, quantity, category], (err, data) =>
    err ? console.log(err) : res.send(data)
  );
});

app.delete("/delitem/:id", (req, res) => {
  let SQL = "DELETE FROM products WHERE id = ?";
  const { id } = req.params;
  db.query(SQL, [id], (err, data) => {
    err ? console.log(err) : res.send(data);
  });
});

// to get all products
app.get("/getdata", (req, res) => {
  let SQL = "SELECT * FROM products";

  db.query(SQL, (err, data) =>
    err ? console.log(err) : res.send(data)
  );
});

// to get the categories list
app.get("/getcategories", (req, res) => {
  let SQL = "SELECT * FROM categories";

  db.query(SQL, (err, data) =>
    err ? console.log(err) : res.send(data)
  );
});

// pra rodar tudo
app.listen(3307, () => console.log("============ deu ============"));
