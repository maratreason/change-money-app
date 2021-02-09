import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Currency from "./currency/Currency";
import Main from "./main/Main";
import "./App.less";
import Navigation from "./main/navigation/Navigation";

const App = () => {

	return (
        <BrowserRouter>
			<Navigation />
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/currency" exact component={Currency} />
                <Redirect to="/" />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
