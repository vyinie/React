import "./crudTable.css";
import TableRow from "./TableRow";

import { useEffect, useState } from "react";
import Axios from "axios";

function CrudTable({ categories, list, }) {
  // func to edit item

  return (
    <div className="tableArea">
      <table className="table">
        <tbody className="tbody">
          <tr className="tr">
            <th className="th tdId">ID</th>
            <th className="th">NOME</th>
            <th className="th">CATEGORIA</th>
            <th className="th">PREÇO</th>
            <th className="th">QUANT</th>
            <th className="th">AÇÕES</th>
          </tr>
          {list.map((i) => (
            <TableRow
              key={"tr" + i.id}
              name={i.name}
              price={i.price}
              category={i.category}
              quantity={i.quantity}
              categories={categories}
              id={i.id}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CrudTable;
