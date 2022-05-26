import React, { Component } from "react";
import axios from "axios";
import Portfoliodetail from "./portfoliodetail";
const api = axios.create(
    {
        baseURL:`http://127.0.0.1:8000/apiv1/Portfolio/`
    }
)
class Portfoliolist extends Component {
    state = {
        portfolio:[]
    }
    constructor(){
        super();
        api.get('/').then(res => {
            console.log(res.data)
            this.setState({portfolio: res.data})
        })
    }
    render() {
        return (
            <div className="container">
                
                <Portfoliodetail/>
            </div>
        );
    }
}
export default Portfoliolist;