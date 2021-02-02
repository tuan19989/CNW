import React from "react";
import CRUD from "services/crud";
import { useHistory } from "react-router-dom";
import { Table, Button } from "reactstrap";

function TableContent({ items, onDeleteSuccess }) {
  let history = useHistory();

  // === props.checkUpdateSuccess
  function handleOnDelete(id) {
    //Handle when click button Delete
    CRUD.deleteOnePor(id).then((res) => {
      // Call CURD from services
      // check response message
      onDeleteSuccess(true);
    });
  }

  function handleOnEdit(item) {
    // Route sang UpdatePage
    history.push(`/products/update/${item.ProductID}`, { updateItem: item });
  }

  return (
    <Table striped>
      <thead>
        <tr>
          <th>Product ID</th>
          <th>Product Name</th>
          <th>Unit</th>
          <th>Price</th>
          <th>SupplierID</th>
          <th>CategoryID</th>
          <th>Delete</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {items.map((
          item,
          index //Map responses list data to table row
        ) => (
          <tr>
            <td>{item.ProductID}</td>
            <td>{item.ProductName}</td>
            <td>{item.Unit}</td>
            <td>{item.Price}</td>
            <td>{item.SupplierID}</td>
            <td>{item.CategoryID}</td>
            <td>
              <Button
                color="danger"
                onClick={() => handleOnDelete(item.ProductID)}
              >
                Delete
              </Button>
            </td>
            <td>
              <Button color="warning" onClick={() => handleOnEdit(item)}>
                Edit
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
export default TableContent;
