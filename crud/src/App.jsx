import "./App.css";
import { useEffect, useState } from "react";
import CrudForm from "./components/form/Form";
import CrudTable from "./components/table/CrudTable";
import Axios from "axios";
function App() {
  const updateData = () => {
    Axios.get("http://localhost:3307/getdata").then((res) =>
      setlist(old =>(res.data))
    );
  };
  const updateCategories = () => {
    Axios.get("http://localhost:3307/getcategories").then((res) =>
    setCategories(res.data)
    );
  };

  useEffect(() => {
    // pega as categorias
  updateCategories()
    
    // pega as od items da lista
    updateData();
  }, []);

  // req to db show lsit
  const [list, setlist] = useState([]);
  const [categories, setCategories] = useState([]);

  return (
    <div className="app">
      <CrudForm categories={categories} />
      <CrudTable
        list={list}
        setlist={setlist}
        categories={categories}
      />
    </div>
  );
}

export default App;
