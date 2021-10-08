import React, { useRef } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import About from '../views/About';
import Contact from '../views/Contact';
import Home from '../views/Home';

function Router() {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/contact" component={Contact} />
        </Switch>
    )
}

export default Router;