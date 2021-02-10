import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Currency from "../pages/currency/Currency";
import Main from "../pages/main/Main";
import "./App.less";
import Test from "./test/Test";
import UserList from "./UserList/UserList";
import TodoList from "./TodoList/TodoList";
import Navigation from "./navigation/Navigation";

const App = () => {
	return (
        <BrowserRouter>
			<Navigation />
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/currency" exact component={Currency} />
                <Route path="/test" exact component={Test} />
                <Route path="/users" exact component={UserList} />
                <Route path="/todos" exact component={TodoList} />
                <Redirect to="/" />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
