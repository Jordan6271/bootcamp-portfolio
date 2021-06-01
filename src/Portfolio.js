import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Routes from "./routes/Routes";
import "bootstrap/dist/css/bootstrap.min.css";

const Portfolio = () => {
    return (
        <Fragment>
            <Router>
                <Navbar />
                <Switch>
                    <Route component={Routes} />
                </Switch>
            </Router>
        </Fragment>
    );
};

export default Portfolio;
