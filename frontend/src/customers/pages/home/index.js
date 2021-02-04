import CRUD from "services/crud";
import React from "react";
import TableContent from "./tableContent";
import FormInput from "customers/components/formInput";
import { Container, Row, Col } from "reactstrap";

function Home() {
  // Dùng duy nhất cho React Hooks FUNCTION COMPONENT. KHÔNG ĐƯỢC DÙNG REACT CLASS COMPONENT
  const [listCustomers, setListCustomers] = React.useState([]); //Create listCustomers State
  const [checkUpdate, setCheckUpdate] = React.useState(false);

  // Nếu giá trị state cũ là A, sau khi mình update thành B => render lại, A set thành A => không render lại

  const RetrieveAllCustomers = () => {
    // <=> function RetrieveAllCustomers(){}
    console.log("Retrieve all customer");
    CRUD.getAllCus().then((res) => {
      //console.log(res);
      setListCustomers(res.data); //Set list customers after get all result from server
      setCheckUpdate(false);
    });
  };

  const onUpdateSuccess = (status) => {
    setCheckUpdate(status);
  };

  // useEffect: 1 dạng reactr hooks
  React.useEffect(() => {
    RetrieveAllCustomers(); //Retrieve data when component rendered
  }, [checkUpdate]); //Dependencies, checkUpdate thay đổi => chạy lại useEffect

  return (
    // Short hand React.Fragment
    <Container fluid={true}>
      <h2 className="text-center">CUSTOMERS</h2>
      <Row>
        <Col xs="8">
          <TableContent
            items={listCustomers}
            onDeleteSuccess={onUpdateSuccess}
          />
        </Col>
        <Col xs="4">
          <h3 className="text-center">Create Customer</h3>
          <FormInput onSubmitSuccess={onUpdateSuccess} type="create" />
        </Col>
      </Row>
    </Container>
  );
}
export default Home;
