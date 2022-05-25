import React, { Component } from "react";
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap'

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        }
    }
    navToggle = () => {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }
    render() {
        return (
            <div>
                <div>
                    <Navbar
                        expand="md"
                        fixed="top"
                        light
                        className="shadow p-3 md-5"
                        color="light"
                    >
                        <NavbarToggler onClick={this.navToggle} />
                        <NavbarBrand href="/">
                            <img src="assets/images/2.png" height="50px" alt="pic" />
                        </NavbarBrand>

                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className="offset-lg-6 col-lg-7"
                                navbar
                            >

                                <UncontrolledDropdown
                                    inNavbar
                                    nav
                                >
                                    <DropdownToggle
                                        nav
                                    >
                                        ABOUT US
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem style={{ color: "orange" }} href="/about">
                                            About us
                                        </DropdownItem><br />
                                        <DropdownItem style={{ color: "orange" }} href="/culture">
                                            Our Culture
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <UncontrolledDropdown
                                    inNavbar
                                    nav

                                >
                                    <DropdownToggle
                                        nav
                                    >
                                        SERVICES
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem style={{ color: "orange" }} href="/UI&UX">
                                            UI & UX | Graphic | 3D Design
                                        </DropdownItem>
                                        <DropdownItem style={{ color: "orange" }} href="/webdesign">
                                            Web Design
                                        </DropdownItem>
                                        <DropdownItem style={{ color: "orange" }} href="/webapplication">
                                            Web Application Development
                                        </DropdownItem>
                                        <DropdownItem style={{ color: "orange" }} href="/softwaredevelopment">
                                            Softwere Development
                                        </DropdownItem>
                                        <DropdownItem style={{ color: "orange" }} href="/dataanalyst">
                                            Data Analyst | ML| AL
                                        </DropdownItem>
                                        <DropdownItem style={{ color: "orange" }} href="/flutterdevelopment">
                                            Flutter  Mobile App Development
                                        </DropdownItem>
                                        <DropdownItem style={{ color: "orange" }} href="/digitalmarkiting">
                                            Digital Marketing | CMS
                                        </DropdownItem>
                                        <DropdownItem style={{ color: "orange" }} href="/native">
                                            Cross-Platform and Native App Development
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <NavItem>
                                    <NavLink href="/portfolio">
                                        PORTFOLIO
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/craeers">
                                        CAREERS
                                    </NavLink>
                                </NavItem>
                                <NavItem >
                                    <NavLink href="/blog">
                                        BLOG
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/contactus">
                                        <Button
                                            color="warning"
                                            outline
                                        >
                                            CONTACT US
                                        </Button>
                                    </NavLink>
                                </NavItem>

                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>
            </div>
        );
    }
}

export default NavBar;