import React from "react";
import { Switch, Route } from "react-router-dom";
import Sitemap from "../Sitemap";

const Routes = () => {
    return (
        <section>
            <Switch>
                <Route exact path="/week1" component={Sitemap.BasicWebPage} />
                <Route exact path="/week2" component={Sitemap.HobbyWebsite} />
                <Route exact path="/week4" component={Sitemap.JavaScriptQuiz} />
                <Route
                    exact
                    path="/week5"
                    component={Sitemap.OOPAdventureGame}
                />
                <Route exact path="/week7" component={Sitemap.CaesarCipher} />
                <Route exact path="/week9" component={Sitemap.Calculator} />
                <Route exact path="/week10" component={Sitemap.Noteable} />
                <Route exact path="/week11" component={Sitemap.WhatToDo} />
                <Route exact path="/week12" component={Sitemap.WeatherWatch} />
                <Route exact path="/week13" component={Sitemap.BookListAPI} />
                <Route exact path="/week14" component={Sitemap.Eventful} />
                <Route component={Sitemap.NotFound} />
            </Switch>
        </section>
    );
};

export default Routes;
