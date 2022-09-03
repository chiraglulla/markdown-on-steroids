import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Editor from './Components/Editor';
import Dashboard from './Components/Dashboard';
import Home from './Components/Home';
import Profile from './Components/Profile';
import ForgotPassword from './Components/ForgotPassword';

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
            <Route path="/profile" exact>
              <Profile />
            </Route>
            <Route path="/forgot" exact>
              <ForgotPassword />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
