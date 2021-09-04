import React from "react";
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import PlayingScreen from './PlayingScreen';

const App = () => {
    return (
        <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/play" component={PlayingScreen}/>
        </Switch>
    );
};

export default App;

