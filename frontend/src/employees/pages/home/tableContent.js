import React from "react";
import CRUD from "services/crud";
import { useHistory } from "react-router-dom";
import { Table, Button } from "reactstrap";

function TableContent({ items, onDeleteSuccess }) {
  let history = useHistory();

  // === props.checkUpdateSuccess
  function handleOnDelete(id) {
    //Handle when click button Delete
    CRUD.deleteOneEm(id).then((res) => {
      // Call CURD from services
      // check response message
      onDeleteSuccess(true);
    });
  }

  function handleOnEdit(item) {
    // Route sang UpdatePage
    history.push(`/Employees/update/${item.EmployeeID}`, { updateItem: item });
  }

  return (
    <Table striped>
      <thead>
        <tr>
          <th>EmployeeID</th>
          <th>Last Name</th>
          <th>First Name</th>
          <th>Birthdate</th>
          <th>Photo</th>
          <th>Notes</th>
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
            <td>{item.EmployeeID}</td>
            <td>{item.LastName}</td>
            <td>{item.FirstName}</td>
            <td>{item.Birthdate}</td>
            <td>{item.Photo}</td>
            <td>{item.Notes}</td>
            <td>
              <Button
                color="danger"
                onClick={() => handleOnDelete(item.EmployeeID)}
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
