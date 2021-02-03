import "./App.css";
import HomeCus from "customers/pages/home";
import UpdatePageCus from "customers/pages/update";
import HomeCate from "category/pages/home";
import UpdatePageCate from "category/pages/update";
import HomeEm from "employees/pages/home";
import UpdatePageEm from "employees/pages/update";
import HomeOD from "orderDetails/pages/home";
import UpdatePageOD from "orderDetails/pages/update";
import HomeODer from "orders/pages/home";
import UpdatePageODer from "orders/pages/update";
import HomePor from "products/pages/home";
import UpdatePagePor from "products/pages/update";
import HomeSp from "shippers/pages/home";
import UpdatePageSp from "shippers/pages/update";
import HomeSup from "suppliers/pages/home";
import UpdatePageSup from "suppliers/pages/update";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/customers" exact>
          <HomeCus />
        </Route>
        <Route path="/customers/update/:id">
          <UpdatePageCus />
        </Route>

        <Route path="/category" exact>
          <HomeCate />
        </Route>
        <Route path="/category/update/:id">
          <UpdatePageCate />
        </Route>
        <Route path="/employees" exact>
          <HomeEm />
        </Route>
        <Route path="/employees/update/:id">
          <UpdatePageEm/>
        </Route>
        <Route path="/orderDetails" exact>
          <HomeOD />
        </Route>
        <Route path="/orderDetails/update/:id">
          <UpdatePageOD />
        </Route>
        <Route path="/orders" exact>
          <HomeODer />
        </Route>
        <Route path="/orders/update/:id">
          <UpdatePageODer />
        </Route>
        <Route path="/products" exact>
          <HomePor />
        </Route>
        <Route path="/products/update/:id">
          <UpdatePagePor />
        </Route>
        <Route path="/shippers" exact>
          <HomeSp />
        </Route>
        <Route path="/shippers/update/:id">
          <UpdatePageSp />
        </Route>
        <Route path="/suppliers" exact>
          <HomeSup />
        </Route>
        <Route path="/suppliers/update/:id">
          <UpdatePageSup />
        </Route>



      </Switch>
    </BrowserRouter>
  );
}

export default App;
