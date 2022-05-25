import React, { Component } from "react";
import axios from "axios";
import Portfoliolist from "./portfoliodetail";
const api = axios.create(
    {
        baseURL: `http://127.0.0.1:8000/apiv1/Portfolio/`
    }
)
class Portfolio extends Component {
    state = {
        portfolio: []
    }
    constructor() {
        super();
        api.get('/').then(res => {
            console.log(res.data)
            this.setState({ portfolio: res.data })
        })
    }
    render() {
        return (
            <div>
                <br /><br /><br />
                <div style={{ backgroundImage: "url('/assets/images/17.png')", height: "250px", backgroundSize: "cover", backgroundPosition: "center center" }}>
                    <p style={{ color: "#ea7826", fontSize: "30px", textAlign: "center", paddingTop: "100px" }}> 
                    Featured Projects
                    </p>

                </div>
                <div className="container">
                    <br /><br /><br />
                    
                    <p style={{ fontSize: "18px", textAlign: "center" }}>
                        Explore some of the success stories we are proud to be associated with. We would be <br />happy to have one with you.
                    </p>
                    <Portfoliolist />
                </div></div>
        );
    }
}
export default Portfolio;