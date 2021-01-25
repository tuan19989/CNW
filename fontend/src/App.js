import "./App.css";
import Home from "./pages/home";
import UpdatePage from "./pages/update";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/customers" exact>
          <Home />
        </Route>
        <Route path="/customers/update/:id">
          <UpdatePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
