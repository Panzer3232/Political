import React from  "react";
import {Switch,Route} from "react-router-dom";
import LandingPage from "./Landingpage";
import Photo from "./Photo";
import Contact from "./Contact";

const Main=()=>(
    <Switch>
        <Route exact path="/" component={LandingPage}></Route>
        <Route path ="/photo" component={Photo}></Route>
        <Route path ="/contact" component={Contact}></Route>
        </Switch>
)

export default Main ;