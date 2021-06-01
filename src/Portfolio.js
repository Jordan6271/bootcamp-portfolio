import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Routes from "./routes/Routes";

const Portfolio = () => {
    return (
        <Fragment>
            <Router>
                <Switch>
                    <Route component={Routes} />
                </Switch>
            </Router>
        </Fragment>
    );
};

export default Portfolio;
