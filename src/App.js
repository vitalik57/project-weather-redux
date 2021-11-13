import { Route, Switch } from "react-router";
import Detail from "./Components/Main/Detail/Detail";
import Main from "./Components/Main/Main";
import NotFound from "./NotFound";
function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/detail" component={Detail} />
        <Route exact component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
