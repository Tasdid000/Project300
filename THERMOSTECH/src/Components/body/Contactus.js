import React, { Component } from "react";
import { Col, Form, FormGroup, Row, Input, Label, Button } from "reactstrap";

class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fname: "",
            email: "",
            Website_URL: "",
            Phone_number: "",
            textarea: ""
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInputChange = event => {
        const value = event.target.type === "checkbox" ? event.target.checkbox : event.target.value;
        const name = event.target.name
        this.setState({
            [name]: value
        })
    }
    handleSubmit = event => {
        console.log(this.state);
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <br /><br /><br />
            <div style={{ backgroundImage: "url('/assets/images/17.png')", height: "250px", backgroundSize: "cover", backgroundPosition: "center center" }}>
                <p style={{ color: "#ea7826", fontSize: "30px", textAlign: "center", paddingTop: "100px" }}>Our Services</p>
            </div>

                <br /><br />
                <div>
                    <p align="center" style={{ color: "#ea7826", fontSize: "40px" }}>
                        Request a Quote
                    </p>
                    <p align="center" style={{ fontSize: "14px" }}>
                        Whether you have a question about features, trials, pricing, need a demo, or anything else, our<br /> team is ready to answer all your questions
                    </p>
                </div>
                <div className="shadow p-5 bg-white">
                    <div className="container my-3" style={{ marginLeft: "130px" }}>
                        <Form>
                            <Row>
                                <Col md="5">
                                    <FormGroup>
                                        <Row>
                                            <label for="name" style={{ fontSize: "14px" }}>
                                                Name<em style={{ color: "red" }}>*</em>
                                            </label>
                                            <Input
                                                id="name"
                                                name="fname"
                                                type="text"
                                                placeholder=""
                                                value={this.state.fname}
                                                style={{ height: "40px" }}
                                                onChange={this.handleInputChange}
                                            />
                                        </Row>
                                    </FormGroup>
                                </Col>
                                <Col md="5" style={{ marginLeft: "50px" }}>
                                    <FormGroup>
                                        <Row>
                                            <label for="exampleEmail" style={{ fontSize: "14px" }}>
                                                Email<em style={{ color: "red" }}>*</em>
                                            </label>
                                            <Input
                                                id="Email"
                                                name="email"
                                                type="email"
                                                value={this.state.email}
                                                placeholder=""
                                                onChange={this.handleInputChange}
                                                style={{ height: "40px" }}
                                            />
                                        </Row>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="5">
                                    <FormGroup>
                                        <Row>
                                            <label for="Website" style={{ fontSize: "14px" }}>
                                                Website URL
                                            </label>
                                            <Input
                                                id="Website"
                                                name="Website_URL"
                                                type="text"
                                                placeholder=""
                                                onChange={this.handleInputChange}
                                                value={this.state.Website_URL}
                                                style={{ height: "40px" }} />
                                                
                                        </Row>
                                    </FormGroup>
                                </Col>
                                <Col md="5" style={{ marginLeft: "50px" }}>
                                    <FormGroup>
                                        <Row>
                                            <label for="Phone" style={{ fontSize: "14px" }}>
                                                Phone number
                                            </label>
                                            <Input
                                                id="Phone"
                                                name="Phone_number"
                                                type="number"
                                                placeholder=""
                                                value={this.state.Phone_number}
                                                style={{ height: "40px" }}
                                                onChange={this.handleInputChange}
                                            />
                                        </Row>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <FormGroup>
                                <Row>
                                    <label for="text_area" style={{ fontSize: "14px" }}>
                                        Submit Your Requirements/Query
                                    </label>
                                    <Input
                                        id="message"
                                        name="textarea"
                                        type="textarea"
                                        value={this.state.textarea}
                                        placeholder=""
                                        style={{ height: "100px", width: "1000px" }}
                                        onChange={this.handleInputChange}
                                    />
                                </Row>
                            </FormGroup><br />
                            <Row>
                                <Col md="7">
                                    <FormGroup>
                                        <p style={{ fontSize: "14px" }}>
                                            Service you want
                                        </p>
                                        <Row style={{ marginLeft: "20px" }}>
                                            <Col md="6">
                                                <Input
                                                    type="radio"
                                                />
                                                <Label style={{ fontSize: "14px" }}>
                                                    WEB APPLICATION
                                                </Label>
                                            </Col>
                                        </Row>
                                        <Row style={{ marginLeft: "20px" }}>
                                            <Col md="6">
                                                <Input
                                                    type="radio"
                                                />
                                                <Label style={{ fontSize: "14px" }}>
                                                    MOBILE APPLICATION (ANDROID/IOS)
                                                </Label>
                                            </Col>
                                        </Row>
                                        <Row style={{ marginLeft: "20px" }}>
                                            <Col md="6">
                                                <Input
                                                    type="radio"
                                                />
                                                <Label style={{ fontSize: "14px" }}>
                                                    WEBSITE
                                                </Label>
                                            </Col>
                                        </Row>
                                        <Row style={{ marginLeft: "20px" }}>
                                            <Col md="6">
                                                <Input
                                                    type="radio"
                                                />
                                                <Label style={{ fontSize: "14px" }}>
                                                    DESIGN
                                                </Label>
                                            </Col>
                                        </Row>
                                        <Row style={{ marginLeft: "20px" }}>
                                            <Col md="6">
                                                <Input
                                                    type="radio"
                                                />
                                                <Label style={{ fontSize: "14px" }}>
                                                    QA
                                                </Label>
                                            </Col>
                                        </Row>
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <p style={{ fontSize: "25px", color: "#ea7826" }}>
                                        Need any other information
                                    </p>
                                    <a href="tel:01709882474"><p style={{ fontSize: "20px", color: "#ea7826" }}>Call Now</p></a>
                                </Col>
                            </Row><br />
                            <a href="/">
                                <Button color="warning" outline size="lg">
                                    Submit
                                </Button>
                            </a>
                            
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}
export default Contact;