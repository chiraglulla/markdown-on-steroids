import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Editor from "./Components/Editor";
import Dashboard from "./Components/Dashboard";

const App = () => {
  return (
    <Router>
      <div className="App container-fluid lead">
        <div className="row px-4">
          <Switch>
            <Route path="/" exact>
              <Dashboard />
            </Route>
            <Route path="/editor/:id">
              <Editor />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
