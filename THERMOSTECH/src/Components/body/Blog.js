import React, { Component } from "react";

class Blog extends Component {
    render() {
        return (
            <div>
                <br /><br /><br />
            <div style={{ backgroundImage: "url('/assets/images/17.png')", height: "250px", backgroundSize: "cover", backgroundPosition: "center center" }}>
                <p style={{ color: "#ea7826", fontSize: "30px", textAlign: "center", paddingTop: "100px" }}>  
                Blog
                </p>
           
            </div>
            <div className="container">
                <br /><br/>
                <p style={{ fontSize: "18px", textAlign: "center" }}>
                    Knowledge sharing had always been our goal.<br />
                    Explore the unique thoughts and experiences straight from the minds of our think tanks.
                </p>
            </div> </div>
        );
    }
}
export default Blog;