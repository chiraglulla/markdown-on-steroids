import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Editor from './Components/Editor';
import Dashboard from './Components/Dashboard';
import Home from './Components/Home';
import Profile from './Components/Profile';

const App = () => {
  return (
    <Router>
      <div className="App container-fluid lead">
        <div className="row px-4">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/editor" exact>
              <Editor />
            </Route>
            <Route path="/editor/:id">
              <Editor />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
