import React from "react";
import CRUD from "services/crud";
import { useHistory } from "react-router-dom";
import { Table, Button } from "reactstrap";

function TableContent({ items, onDeleteSuccess }) {
  let history = useHistory();

  // === props.checkUpdateSuccess
  function handleOnDelete(id) {
    //Handle when click button Delete
    CRUD.deleteOneSup(id).then((res) => {
      // Call CURD from services
      // check response message
      onDeleteSuccess(true);
    });
  }

  function handleOnEdit(item) {
    // Route sang UpdatePage
    history.push(`/suppliers/update/${item.SupplierID}`, { updateItem: item });
  }

  return (
    <Table striped>
      <thead>
        <tr>
          <th>ID</th>
          <th>Supplier Name</th>
          <th>Contact Name</th>
          <th>Address</th>
          <th>City</th>
          <th>Postal Code</th>
          <th>Country</th>
          <th>Phone</th>
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
            <td>{item.SupplierID}</td>
            <td>{item.SupplierName}</td>
            <td>{item.ContactName}</td>
            <td>{item.Address}</td>
            <td>{item.City}</td>
            <td>{item.PostalCode}</td>
            <td>{item.Country}</td>
            <td>{item.Phone}</td>
            <td>
              <Button
                color="danger"
                onClick={() => handleOnDelete(item.SupplierID)}
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
