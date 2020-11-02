import React from 'react';
import { Wrapper } from './App.css';
import Main from './page/Main';
import {Route, Switch} from 'react-router-dom';

function App() {  
  return (
    <Wrapper>
        <Switch>
          <Route exact path="/who-is-faster/" component={Main} />
        </Switch>
    </Wrapper>
  );
}

export default App;
