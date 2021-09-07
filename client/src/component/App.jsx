import React from "react";
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import PlayScreen from "./PlayScreen";

const App = () => {
    return (
        <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/play" component={PlayScreen}/>
        </Switch>
    );
};

export default App;

