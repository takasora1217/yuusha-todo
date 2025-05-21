import { BrowserRouter, Switch, Route } from "react-router-dom";
import Top from "./pages/Top";
import Congrat from "./pages/Congrat";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Top} />
          <Route path="/congrat" component={Congrat} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
