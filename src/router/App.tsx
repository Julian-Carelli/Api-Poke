import * as React from 'react'
import {Switch, BrowserRouter, Route} from 'react-router-dom';
import {hot} from 'react-hot-loader'

import {Home} from '../containers/Home/index'

const App:any = () => (
    <BrowserRouter>
           <Switch>
              <Route exact path="/" component={Home}></Route>
            </Switch>
    </BrowserRouter>
    
)

export default hot(module)(App);    
