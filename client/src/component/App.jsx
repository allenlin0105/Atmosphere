import React from "react";
import { Route, Switch, HashRouter, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import PlayScreen from "./PlayScreen";
import Record from "./Record";

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={["/", "/home"]} component={Home} />
                <Route exact path="/play" component={PlayScreen}/>
                <Route exact path="/record" component={Record} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;

