import React from "react";
import Home from "./Home";
import Culture from "./about/culture"
import About from "./about/aboutus"
import Contact from "./Contactus";
import UI_UX from "./services/ui&ux";
import Web_Application from "./services/webapplication";
import Flutter from "./services/Flutter";
import Data_Analyst from "./services/dataanalyst";
import Digital_Marketing from "./services/digitalmarketing";
import Web_Design from "./services/webdesign";
import Softwere from "./services/softwere";
import React_Native from "./services/native";
import Blog from "./Blog";
import Portfolio from "./portfolio/Portfolio";
import Craeers from "./Craeers";
import { Route, Redirect, Switch } from 'react-router-dom';
const Body = () =>{
    return(
        <div>
            <Switch>
                <Route path="/home" exact component={Home} />
                <Route path="/culture" exact component={Culture} />
                <Route path="/contactus" exact component={Contact} />
                <Route path="/portfolio" exact component={Portfolio} />
                <Route path="/craeers" exact component={Craeers} />
                <Route path="/blog" exact component={Blog} />
                <Route path="/about" exact component={About} />
                <Route path="/UI&UX" exact component={UI_UX} />
                <Route path="/webdesign" exact component={Web_Design} />
                <Route path="/webapplication" exact component={Web_Application} />
                <Route path="/softwaredevelopment" exact component={Softwere} />
                <Route path="/dataanalyst" exact component={Data_Analyst} />
                <Route path="/flutterdevelopment" exact component={Flutter} />
                <Route path="/digitalmarkiting" exact component={Digital_Marketing} />
                <Route path="/native" exact component={React_Native} />
                <Redirect from="/" to="/home" />
            </Switch>
        </div>
    );
}
export default Body;