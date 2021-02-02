import React from "react";
import CRUD from "services/crud";
import { useHistory } from "react-router-dom";
import { Table, Button } from "reactstrap";

function TableContent({ items, onDeleteSuccess }) {
  let history = useHistory();

  // === props.checkUpdateSuccess
  function handleOnDelete(id) {
    //Handle when click button Delete
    CRUD.deleteOneOD(id).then((res) => {
      // Call CURD from services
      // check response message
      onDeleteSuccess(true);
    });
  }

  function handleOnEdit(item) {
    // Route sang UpdatePage
    history.push(`/orderDetails/update/${item.OrderDetailID}`, { updateItem: item });
  }

  return (
    <Table striped>
      <thead>
        <tr>
          <th>OrderDetailID</th>
          <th>Order ID</th>
          <th>Product ID</th>
          <th>Quantity</th>
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
            <td>{item.OrderDetailID}</td>
            <td>{item.OrderID}</td>
            <td>{item.ProductID}</td>
            <td>{item.Quantity}</td>
            <td>
              <Button
                color="danger"
                onClick={() => handleOnDelete(item.OrderDetailID)}
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
