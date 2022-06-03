import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useClientsCrud } from "../customHooks/useClientsCrud";

export default function TableItem(props) {
  let {deleteClient} = useClientsCrud()

  let handledelete = async (id) => {
    await deleteClient(id)
    props.handleChange()
  }

  return (
    <tr>
            <th scope="row">{props.id}</th>
            <td>{props.name}</td>  
            <td colspan="2">
              <center> 
                {" "}
                <Link to={`detail/${props.id}`}>
                <button type="button" className="btn btn-warning">
                   Edit
                </button>
                </Link>{" "}
                <button type="button" className="btn btn-danger" onClick={() => handledelete(props.id)}>
                  Delete
                </button>
              </center>
            </td>
          </tr>
  )
}
