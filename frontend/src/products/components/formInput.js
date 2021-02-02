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
    ProductName: "",
    Unit: "",
    Price: "",
    SupplierID: "",
    CategoryID: "",
  });

  useEffect(() => {
    console.log("Update Item: " + JSON.stringify(updateItem));
    if (updateItem) {
      setPostData({
        ProductName: updateItem.ProductName,
        Unit: updateItem.Unit,
        Price: updateItem.Price,
        SupplierID: updateItem.SupplierID,
        CategoryID: updateItem.CategoryID,
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
        ? CRUD.updateOnePor(updateID, postData)
        : CRUD.createPor(postData);

    crudType
      .then((res) => {
        // set State check update success => true
        if (type === "create") {
          const check = res.data.message === "Insert successfully";

          onSubmitSuccess(check); // re-render if check is true
        } else if (type === "update") {
          if (res.data.message === "Updated products") history.goBack(); // Go back if update successfully
        }
      })
      .catch((err) => {
        alert(err || "Unknown Message"); // alert error messages
      });
     console.log("ProductName : " + JSON.stringify(postData));
  }

  function handleOnSubmit(e) {
    e.preventDefault(); // prevent reload page if submit
  }

  return (
    <Form onSubmit={handleOnSubmit}>
      <FormGroup>
        <Label for="ProductName">Product Name</Label>
        <Input
          type="text"
          name="ProductName"
          value={postData.ProductName}
          onChange={handleChangeData}
          placeholder="Product Name"
        />
      </FormGroup>
      <FormGroup>
        <Label for="Unit">Unit</Label>
        <Input
          type="text"
          name="Unit"
          value={postData.Unit}
          onChange={handleChangeData}
          placeholder="Unit"
        />
      </FormGroup>
      <FormGroup>
        <Label for="Price">Price</Label>
        <Input
          type="text"
          name="Price"
          value={postData.Price}
          onChange={handleChangeData}
          placeholder="Price"
          id=""
        />
      </FormGroup>
      <FormGroup>
        <Label for="SupplierID">Supplier ID</Label>
        <Input
          type="text"
          name="SupplierID"
          value={postData.SupplierID}
          onChange={handleChangeData}
          placeholder="SupplierID"
        />
      </FormGroup>
      <FormGroup>
        <Label for="Unit">Category ID</Label>
        <Input
          type="text"
          name="CategoryID"
          value={postData.CategoryID}
          onChange={handleChangeData}
          placeholder="CategoryID"
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
