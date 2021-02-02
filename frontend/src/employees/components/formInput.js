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
    LastName: "",
    FirstName: "",
    Birthdate: "",
    Photo: "",
    Notes: "",
  });

  useEffect(() => {
    console.log("Update Item: " + JSON.stringify(updateItem));
    if (updateItem) {
      setPostData({
        LastName: updateItem.LastName,
        FirstName: updateItem.FirstName,
        Birthdate: updateItem.Birthdate,
        Photo: updateItem.Photo,
        Notes: updateItem.Notes,
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
      type === "updateEm"
        ? CRUD.updateOneEm(updateID, postData)
        : CRUD.createEm(postData);

    crudType
      .then((res) => {
        // set State check update success => true
        if (type === "createEm") {
          const check = res.data.message === "Insert successfully";

          onSubmitSuccess(check); // re-render if check is true
        } else if (type === "updateEm") {
          if (res.data.message === "Updated employees") history.goBack(); // Go back if update successfully
        }
      })
      .catch((err) => {
        alert(err || "Unknown Message"); // alert error messages
      });
 //   console.log("LastName : " + JSON.stringify(postData));
  }

  function handleOnSubmit(e) {
    e.preventDefault(); // prevent reload page if submit
  }

  return (
    <Form onSubmit={handleOnSubmit}>
      <FormGroup>
        <Label for="LastName">Last Name</Label>
        <Input
          type="text"
          name="LastName"
          value={postData.LastName}
          onChange={handleChangeData}
          placeholder="Last Name"
        />
      </FormGroup>
      <FormGroup>
        <Label for="FirstName">First Name</Label>
        <Input
          type="text"
          name="FirstName"
          value={postData.FirstName}
          onChange={handleChangeData}
          placeholder="First Name"
        />
      </FormGroup>
      <FormGroup>
        <Label for="Birthdate">Birthdate</Label>
        <Input
          type="text"
          name="Birthdate"
          value={postData.Birthdate}
          onChange={handleChangeData}
          placeholder="Birthdate"
          id=""
        />
      </FormGroup>
      <FormGroup>
        <Label for="Photo">Photo</Label>
        <Input
          type="text"
          name="Photo"
          value={postData.Photo}
          onChange={handleChangeData}
          placeholder="Photo"
          id=""
        />
      </FormGroup>
      <FormGroup>
        <Label for="Notes">Notes</Label>
        <Input
          type="text"
          name="Notes"
          value={postData.Notes}
          onChange={handleChangeData}
          placeholder="Notes"
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
