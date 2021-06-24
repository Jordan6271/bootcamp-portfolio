import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Routes from "./routes/Routes";
import "./Portfolio.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Portfolio = () => {
    return (
        <div className="portfolio">
            <Router>
                <Navbar />
                <Switch>
                    <div className="w-75 justify-content-center m-auto row text-light text-center pt-4">
                        <Route exact path="/" component={Home} />
                        <Route component={Routes} />
                    </div>
                </Switch>
            </Router>
        </div>
    );
};

export default Portfolio;
