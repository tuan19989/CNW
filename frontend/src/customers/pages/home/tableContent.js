import React from "react";
import CRUD from "services/crud";
import { useHistory } from "react-router-dom";
import { Table, Button } from "reactstrap";

function TableContent({ items, onDeleteSuccess }) {
  let history = useHistory();

  // === props.checkUpdateSuccess
  function handleOnDelete(id) {
    //Handle when click button Delete
    CRUD.deleteOneCus(id).then((res) => {
      // Call CURD from services
      // check response message
      onDeleteSuccess(true);
    });
  }

  function handleOnEdit(item) {
    // Route sang UpdatePage
    history.push(`/customers/update/${item.CustomerID}`, { updateItem: item });
  }

  return (
    <Table striped>
      <thead>
        <tr>
          <th>ID</th>
          <th>Customer Name</th>
          <th>Contact Name</th>
          <th>Address</th>
          <th>City</th>
          <th>Postal Code</th>
          <th>Country</th>
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
            <td>{item.CustomerID}</td>
            <td>{item.CustomerName}</td>
            <td>{item.ContactName}</td>
            <td>{item.Address}</td>
            <td>{item.City}</td>
            <td>{item.PostalCode}</td>
            <td>{item.Country}</td>
            <td>
              <Button
                color="danger"
                onClick={() => handleOnDelete(item.CustomerID)}
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
