import React, { Fragment } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Routes from "./routes/Routes";
import "./Portfolio.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Portfolio = () => {
    return (
        <div className="portfolio">
            <Router>
                <Fragment>
                    <Navbar />
                    <Switch>
                        <div className="w-75 justify-content-center m-auto row text-light text-center pt-4">
                            <Route exact path="/" component={Home} />
                            <Route component={Routes} />
                        </div>
                    </Switch>
                </Fragment>
            </Router>
        </div>
    );
};

export default Portfolio;
