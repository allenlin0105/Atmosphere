import React from "react";
import { Route, Switch, HashRouter } from 'react-router-dom';
import Home from './Home';
import PlayScreen from "./PlayScreen";

const App = () => {
    return (
        <HashRouter>
            <Switch>
                <Route exact path={["/", "/home"]} component={Home} />
                <Route exact path="/play" component={PlayScreen}/>
            </Switch>
        </HashRouter>
    );
};

export default App;

