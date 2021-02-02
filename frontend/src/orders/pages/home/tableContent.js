import React from "react";
import CRUD from "services/crud";
import { useHistory } from "react-router-dom";
import { Table, Button } from "reactstrap";

function TableContent({ items, onDeleteSuccess }) {
  let history = useHistory();

  // === props.checkUpdateSuccess
  function handleOnDelete(id) {
    //Handle when click button Delete
    CRUD.deleteOneOder(id).then((res) => {
      // Call CURD from services
      // check response message
      onDeleteSuccess(true);
    });
  }

  function handleOnEdit(item) {
    // Route sang UpdatePage
    history.push(`/orders/update/${item.OrderID}`, { updateItem: item });
  }

  return (
    <Table striped>
      <thead>
        <tr>
          <th>OrderID</th>
          <th>Customer ID</th>
          <th>Employee ID</th>
          <th>OrderDate</th>
          <th>ShipperID</th>
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
            <td>{item.OrderID}</td>
            <td>{item.CustomerID}</td>
            <td>{item.EmployeeID}</td>
            <td>{item.OrderDate}</td>
            <td>{item.ShipperID}</td>
            <td>
              <Button
                color="danger"
                onClick={() => handleOnDelete(item.OrderID)}
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
