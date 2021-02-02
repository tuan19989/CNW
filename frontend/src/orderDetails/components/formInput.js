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
    OrderID: "",
    ProductID: "",
    Quantity: "",
  });

  useEffect(() => {
    console.log("Update Item: " + JSON.stringify(updateItem));
    if (updateItem) {
      setPostData({
        OrderID: updateItem.OrderID,
        ProductID: updateItem.ProductID,
        Quantity: updateItem.Quantity,
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
        ? CRUD.updateOneOD(updateID, postData)
        : CRUD.createOD(postData);

    crudType
      .then((res) => {
        // set State check update success => true
        if (type === "create") {
          const check = res.data.message === "Insert successfully";

          onSubmitSuccess(check); // re-render if check is true
        } else if (type === "update") {
          if (res.data.message === "Updated OOrderdetails") history.goBack(); // Go back if update successfully
        }
      })
      .catch((err) => {
        alert(err || "Unknown Message"); // alert error messages
      });
   // console.log("CustomerName : " + JSON.stringify(postData));
  }

  function handleOnSubmit(e) {
    e.preventDefault(); // prevent reload page if submit
  }

  return (
    <Form onSubmit={handleOnSubmit}>
      <FormGroup>
        <Label for="OrderID">Order ID</Label>
        <Input
          type="text"
          name="OrderID"
          value={postData.OrderID}
          onChange={handleChangeData}
          placeholder="Order ID"
        />
      </FormGroup>
      <FormGroup>
        <Label for="ProductID">Product ID</Label>
        <Input
          type="text"
          name="ProductID"
          value={postData.ProductID}
          onChange={handleChangeData}
          placeholder="Product ID"
        />
      </FormGroup>
      <FormGroup>
        <Label for="Quantity">Quantity</Label>
        <Input
          type="text"
          name="Quantity"
          value={postData.Quantity}
          onChange={handleChangeData}
          placeholder="Quantity"
          id=""
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
