import React from 'react';
import { Switch, Route } from 'react-router-dom';

import FourOhFour from './views/fourOhFour/FourOhFour';
import Home from './views/home/Home';
import Info from './views/info/Info';
import Games from './views/games/Games';
import GameDetail from './views/games/GameDetail';
import MyPage from './views/my-page/MyPage';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/info" exact component={Info} />
    <Route path="/games" exact component={Games} />
    <Route path="/games/:game" exact component={GameDetail} />
    <Route path="/my-page" exact component={MyPage} />
    <Route path="*" component={FourOhFour} />
  </Switch>
);

export default Routes;
