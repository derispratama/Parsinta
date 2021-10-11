import React, { useRef } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import About from '../views/About';
import Contact from '../views/Contact';
import Home from '../views/Home';
import NotFound from '../views/errors/NotFound';
import Navbar from '../components/Navbar';
import Login from '../views/auth/Login';
import UsersIndex from '../views/users/index';
import UsersShow from '../views/users/Show';

function Router() {
    return (
        <Switch>
            <Route exact path="/">
                <Navbar>
                    <Home />
                </Navbar>
            </Route>
            <Route path="/about">
                <Navbar>
                    <About />
                </Navbar>
            </Route>
            <Route path="/contact">
                <Navbar>
                    <Contact />
                </Navbar>
            </Route>
            <Route path="/users" exact>
                <Navbar>
                    <UsersIndex />
                </Navbar>
            </Route>
            <Route path="/users/:identifier">
                <Navbar>
                    <UsersShow />
                </Navbar>
            </Route>
            <Route path="/login" component={Login} />
            <Route path="*" component={NotFound} />
        </Switch>
    )
}

export default Router;