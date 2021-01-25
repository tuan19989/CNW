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
    CustomerName: "",
    ContactName: "",
    Address: "",
    City: "Quang Nam",
    PostalCode: "45000",
    Country: "VN",
  });

  useEffect(() => {
    console.log("Update Item: " + JSON.stringify(updateItem));
    if (updateItem) {
      setPostData({
        CustomerName: updateItem.CustomerName,
        ContactName: updateItem.ContactName,
        Address: updateItem.Address,
        City: updateItem.City,
        PostalCode: updateItem.PostalCode,
        Country: updateItem.Country,
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
        ? CRUD.updateOne(updateID, postData)
        : CRUD.create(postData);

    crudType
      .then((res) => {
        // set State check update success => true
        if (type === "create") {
          const check = res.data.message === "Insert successfully";

          onSubmitSuccess(check); // re-render if check is true
        } else if (type === "update") {
          if (res.data.message === "Updated successfully") history.goBack(); // Go back if update successfully
        }
      })
      .catch((err) => {
        alert(err || "Unknown Message"); // alert error messages
      });
    console.log("CustomerName : " + JSON.stringify(postData));
  }

  function handleOnSubmit(e) {
    e.preventDefault(); // prevent reload page if submit
  }

  return (
    <Form onSubmit={handleOnSubmit}>
      <FormGroup>
        <Label for="customerName">Customer Name</Label>
        <Input
          type="text"
          name="CustomerName"
          value={postData.CustomerName}
          onChange={handleChangeData}
          placeholder="Customer Name"
        />
      </FormGroup>
      <FormGroup>
        <Label for="contactName">Contact Name</Label>
        <Input
          type="text"
          name="ContactName"
          value={postData.ContactName}
          onChange={handleChangeData}
          placeholder="Contact Name"
        />
      </FormGroup>
      <FormGroup>
        <Label for="_address">Address</Label>
        <Input
          type="text"
          name="Address"
          value={postData.Address}
          onChange={handleChangeData}
          placeholder="Address"
          id=""
        />
      </FormGroup>

      <input type="text" name="city" value="this is city" hidden />
      <input type="text" name="postalCode" value="this is postalCode" hidden />
      <input type="text" name="country" value="this is country" hidden />
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
