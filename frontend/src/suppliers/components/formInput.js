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
    SupplierName: "",
    ContactName: "",
    Address: "",
    City: "Da Nang",
    PostalCode: "45000",
    Country: "VN",
    Phone:"",
  });

  useEffect(() => {
    console.log("Update Item: " + JSON.stringify(updateItem));
    if (updateItem) {
      setPostData({
        SupplierName: updateItem.SupplierName,
        ContactName: updateItem.ContactName,
        Address: updateItem.Address,
        City: updateItem.City,
        PostalCode: updateItem.PostalCode,
        Country: updateItem.Country,
        Phone: updateItem.Phone,
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
        ? CRUD.updateOneSup(updateID, postData)
        : CRUD.createSup(postData);

    crudType
      .then((res) => {
        // set State check update success => true
        if (type === "create") {
          const check = res.data.message === "Insert successfully";

          onSubmitSuccess(check); // re-render if check is true
        } else if (type === "update") {
          if (res.data.message === "Updated suppliers") history.goBack(); // Go back if update successfully
        }
      })
      .catch((err) => {
        alert(err || "Unknown Message"); // alert error messages
      });
    console.log("SupplierName : " + JSON.stringify(postData));
  }

  function handleOnSubmit(e) {
    e.preventDefault(); // prevent reload page if submit
  }

  return (
    <Form onSubmit={handleOnSubmit}>
      <FormGroup>
        <Label for="SupplierName">Supplier Name</Label>
        <Input
          type="text"
          name="SupplierName"
          value={postData.SupplierName}
          onChange={handleChangeData}
          placeholder="Supplier Name"
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
      <FormGroup>
        <Label for="Phone">Phone</Label>
        <Input
          type="text"
          name="Phone"
          value={postData.Phone}
          onChange={handleChangeData}
          placeholder="Phone"
        />
      </FormGroup>

      <input type="text" name="City" value="this is city" hidden />
      <input type="text" name="PostalCode" value="this is postalCode" hidden />
      <input type="text" name="Country" value="this is country" hidden />
      <input type="text" name="Phone" value="this is Phone" hidden />
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
