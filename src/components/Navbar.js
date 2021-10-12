import React from "react";
import {Menu, Container} from "semantic-ui-react";
import {Link} from "react-router-dom";

//Navbar function
export default function Navbar() {
    return (
        //Semantic Menu and Container
        <Menu inverted>
            {/*Semantic Container*/}
            <Container>
                {/*Link to home*/}
                <Link to = "/">
                    <Menu.Item name = "Star Wars API"></Menu.Item>
                </Link>
                {/*Link to people*/}
                <Link to= "/people">
                    <Menu.Item name = "People"></Menu.Item>
                </Link>
                {/*Link to planets*/}
                <Link to = "/planets">
                    <Menu.Item name = "Planets"></Menu.Item>
                </Link>
            </Container>
        </Menu>
    )
}