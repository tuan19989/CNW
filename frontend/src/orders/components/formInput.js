import React, { useEffect } from "react";
import CRUD from "services/crud";
import { useHistory } from "react-router-dom";
import { Form, FormGroup, Button, Input, Label } from "reactstrap";

function FormInput({ onSubmitSuccess, type, updateID, updateItem }) {
  let history = useHistory();

  // onSubmitSuccess => onUpdateSuccess
  // Syntax js, defind {abc: "text", def: 12} => object (properties: abc, def)
  const [postData, setPostData] = React.useState({
    //Create postData state
    CustomerID: "",
    EmployeeID: "",
    OrderDate: "",
    ShipperID: "",
  });

  useEffect(() => {
    console.log("Update Item: " + JSON.stringify(updateItem));
    if (updateItem) {
      setPostData({
        CustomerID: updateItem.CustomerID,
        EmployeeID: updateItem.EmployeeID,
        OrderDate: updateItem.OrderDate,
        ShipperID: updateItem.ShipperID,
      });
    }
  }, []);

  function handleChangeData(e) {
    setPostData({ ...postData, [e.target.name]: e.target.value }); //Only change customer name in postData
  }

  function handleOnClickSubmit(e) {
    // Handle event when click submit button
    console.log("POST DATA: " + JSON.stringify(postData));
    const crudType =
      type === "update"
        ? CRUD.updateOneOder(updateID, postData)
        : CRUD.createOder(postData);

    crudType
      .then((res) => {
        // set State check update success => true
        if (type === "create") {
          const check = res.data.message === "Insert successfully";

          onSubmitSuccess(check); // re-render if check is true
        } else if (type === "update") {
          if (res.data.message === "Updated Oders") history.goBack(); // Go back if update successfully
        }
      })
      .catch((err) => {
        alert(err || "Unknown Message"); // alert error messages
      });
  //  console.log("CustomerName : " + JSON.stringify(postData));
  }

  function handleOnSubmit(e) {
    e.preventDefault(); // prevent reload page if submit
  }

  return (
    <Form onSubmit={handleOnSubmit}>
      <FormGroup>
        <Label for="CustomerID">Customer ID</Label>
        <Input
          type="text"
          name="CustomerID"
          value={postData.CustomerID}
          onChange={handleChangeData}
          placeholder="Customer ID"
        />
      </FormGroup>
      <FormGroup>
        <Label for="EmployeeID">Employee ID</Label>
        <Input
          type="text"
          name="EmployeeID"
          value={postData.EmployeeID}
          onChange={handleChangeData}
          placeholder="EmployeeID"
        />
      </FormGroup>
      <FormGroup>
        <Label for="OrderDate">OrderDate</Label>
        <Input
          type="text"
          name="OrderDate"
          value={postData.OrderDate}
          onChange={handleChangeData}
          placeholder="OrderDate"
          id=""
        />
      </FormGroup>
      <FormGroup>
        <Label for="ShipperID">Shipper ID</Label>
        <Input
          type="text"
          name="ShipperID"
          value={postData.ShipperID}
          onChange={handleChangeData}
          placeholder="ShipperID"
        />
      </FormGroup>
      <div className="text-center">
        <Button
          name="btnSubmit"
          value="Submit"
          onClick={handleOnClickSubmit}
          color="primary"
        >
          Submit{" "}
        </Button>
      </div>
    </Form>
  );
}
export default FormInput;
