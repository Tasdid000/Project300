import React from "react";
import { Row, Col, Card, CardBody, CardText, Button } from "reactstrap";
const Web_Application = () => {
    return (
        <div>
            <br /><br /><br />
            <div style={{ backgroundImage: "url('/assets/images/17.png')", height: "250px", backgroundSize: "cover", backgroundPosition: "center center" }}>
                <p style={{ color: "#ea7826", fontSize: "30px", textAlign: "center", paddingTop: "100px" }}>Our Services</p>
            </div>
            <div className="container my-2">
                <br /><br /><br /><br /><br /><br />
                <p align="center" style={{ color: "#ea7826", fontSize: "40px" }}>
                    Web Application Development
                </p><br /><br />
                <div className="offset-lg-2 col-lg-10">
                    <p style={{ textAlign: "left" }}>
                        Mobile devices are quickly overtaking desktop usage. More people than ever first refer to a product<br />
                        or service on their smartphone or tablet, becoming the primary lead generation source. Users are <br />
                        more likely to veer towards an offering with a native device experience. <em>We can create mobile apps<br />
                            that enhance your brand.</em>
                    </p><br />
                </div>
                <div className="offset-lg-2 col-lg-10">
                    <p style={{ textAlign: "left" }}>
                        We develop Android and iOS apps from the very foundations, tailoring in the user experience you<br /> want to bring to your clients. Our expert team will facilitate any ideas, from social media, gaming,<br /> streaming, and much more. Let us deliver mobile software that grows your business
                    </p><br /><br />
                </div>
                <p align="center" style={{ color: "#2969a9", fontSize: "40px" }}>
                    Offered services
                </p><br /><br />
                <div className="container" style={{ color: "#2969a9", fontSize: "18px", }}>
                    <Row>
                        <Col>
                            <ul className="col-lg-12" style={{ listStyle: "none" }}>
                                <li>
                                    <Col>
                                        <img src="https://www.sjinnovation.com/themes/custom/sji_theme/images/tick.svg"
                                            style={{ marginRight: "5px" }} alt="pic" />
                                        UX design and Prototype

                                    </Col>


                                </li><br />
                                <li>
                                    <Col>
                                        <img src="https://www.sjinnovation.com/themes/custom/sji_theme/images/tick.svg"
                                            style={{ marginRight: "5px" }} alt="pic" />
                                        Customize E-commerce website for buy sell and rent

                                    </Col>


                                </li><br />
                                <li>
                                    <Col>
                                        <img src="https://www.sjinnovation.com/themes/custom/sji_theme/images/tick.svg"
                                            style={{ marginRight: "5px" }} alt="pic" />
                                        Agile website design and development methodology

                                    </Col>


                                </li>

                            </ul>
                        </Col>

                        <Col>
                            <ul className="offset-lg-0 col-lg-12" style={{ listStyle: "none" }}>
                                <li>
                                    <Col>
                                        <img src="https://www.sjinnovation.com/themes/custom/sji_theme/images/tick.svg"
                                            style={{ marginRight: "5px" }} alt="pic" />
                                        Website for the tourism industry

                                    </Col>


                                </li><br />
                                <li>
                                    <Col>
                                        <img src="https://www.sjinnovation.com/themes/custom/sji_theme/images/tick.svg"
                                            style={{ marginRight: "5px" }} alt="pic" />
                                        Web Application based problems solution

                                    </Col>


                                </li><br />
                                <li>
                                    <Col>
                                        <img src="https://www.sjinnovation.com/themes/custom/sji_theme/images/tick.svg"
                                            style={{ marginRight: "5px" }} alt="pic" />
                                        Mobile app prototype / MVP

                                    </Col>


                                </li>
                            </ul>
                        </Col>
                        <Col>
                            <ul className="offset-lg-0 col-lg-12" style={{ listStyle: "none" }}>
                                <li>
                                    <Col>
                                        <img src="https://www.sjinnovation.com/themes/custom/sji_theme/images/tick.svg"
                                            style={{ marginRight: "5px" }} alt="pic" />
                                        Customized restaurant App for business

                                    </Col>


                                </li><br />
                                <li>
                                    <Col>
                                        <img src="https://www.sjinnovation.com/themes/custom/sji_theme/images/tick.svg"
                                            style={{ marginRight: "5px" }} alt="pic" />
                                        Custom website for healthcare and education sector

                                    </Col>


                                </li>
                                <li>
                                    <Col>
                                        <img src="https://www.sjinnovation.com/themes/custom/sji_theme/images/tick.svg"
                                            style={{ marginRight: "5px" }} alt="pic" />
                                        Web Application Development

                                    </Col>


                                </li>
                            </ul>
                        </Col>
                    </Row>

                </div>

                <br /><br /><br />
                <p align="center" style={{ color: "#2969a9", fontSize: "40px" }}>
                    Technologies we use
                </p>
                <br /><br /><br />
                <Row>
                    <Col md="12">
                        <img src="/assets/images/django.png" alt="pic" height="100px" style={{ marginRight: "50px" }} />
                        <img src="/assets/images/rest.png" alt="pic" height="100px" style={{ marginRight: "50px" }} />
                        <img src="/assets/images/mongodb.png" alt="pic" style={{ marginRight: "50px" }} />
                        <img src="/assets/images/Nodc.png" alt="pic" style={{ marginRight: "50px" }} /><br /><br />
                        <img src="/assets/images/react.png" alt="pic" />
                    </Col>
                </Row>
                <div>
                    <Card
                        style={{
                            width: '600px',
                            height: '150px',
                            marginLeft: '250px',
                            marginTop: '60px',
                            backgroundColor: '#2969A9',
                            border: '1px solid #ef771c',
                            borderRadius: '15px!important',
                        }}
                    >
                        <CardBody>
                            <Row>
                                <Col md='7' style={{ marginTop: '10px' }}>
                                    <CardText
                                        style={{
                                            fontSize: '30px',
                                            fontWeight: 'bold',
                                            color: 'white',
                                        }}
                                    >
                                        Take your business to new heights with
                                        us
                                    </CardText>
                                </Col>
                                <Col
                                    md='4'
                                    style={{
                                        marginTop: '30px',
                                        marginLeft: '45px',
                                    }}
                                >
                                    <a href='/contactus'>
                                        <Button
                                            color='warning'
                                            outline
                                            size='lg'
                                            style={{ color: 'white' }}
                                        >
                                            Contact Us
                                        </Button>
                                    </a>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );

}
export default Web_Application;