import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import './css/App.css';
import { LoginContext } from './context/loginContext';
import Users from './components/Users';
import resources from './components/resources';

function App() {
  return (
    <div className="App">
      <h1>Welcome</h1>
      <LoginContext.Provider value={{ email: '', password: '' }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/users" component={Users} />
          <Route path="/resources" component={resources} />
        </Switch>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
