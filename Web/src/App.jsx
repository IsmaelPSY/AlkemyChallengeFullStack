import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import MyProfile from './pages/Private/MyProfile/MyProfile';
import Operations from './pages/Private/Operations/Operations';
import Landing from './pages/Public/Lading/Landing';
import Login from './pages/Public/Login/Login';
import Singin from './pages/Public/Singin/Singin';

const App = () =>{
    return (
    <BrowserRouter>
            <Switch>
              {/* PUBLIC ROUTES */}
              <Route exact path="/" component={Landing} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/singin" component={Singin} />
              {/* PRIVATE ROUTES */}
              <Route exact path="/users/:uuid" component={MyProfile} />
              <Route exact path="/operations" component={Operations} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
