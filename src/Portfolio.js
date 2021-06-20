import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Routes from "./routes/Routes";
import "./Portfolio.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Portfolio = () => {
    return (
        <div className="portfolio bg-secondary">
            <Router>
                <Navbar />
                <Switch>
                    <div className="portfolio w-75 justify-content-center m-auto row bg-dark text-red text-center rounded">
                        <Route component={Routes} />
                    </div>
                </Switch>
            </Router>
        </div>
    );
};

export default Portfolio;
