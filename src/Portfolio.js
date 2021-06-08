import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Routes from "./routes/Routes";
import "bootstrap/dist/css/bootstrap.min.css";

const Portfolio = () => {
    return (
        <div className="bg-secondary">
            <Router>
                <Navbar />
                <Switch>
                    <div className="w-75 justify-content-center m-auto row bg-dark text-danger text-center rounded">
                        <Route component={Routes} />
                    </div>
                </Switch>
            </Router>
        </div>
    );
};

export default Portfolio;
