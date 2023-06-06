import "bootstrap/dist/css/bootstrap.css";
import { Row, Col, Form, Button,  Container } from "react-bootstrap";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import config from "../config/config";
import LeftSide from "../components/LeftSide";

const API_URL = config.API_URL;

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const navigate = useNavigate();

  const handleEmail = (event) => setEmail(event.target.value);
  const handlePassword = (event) => setPassword(event.target.value);
  const handleName = (event) => setName(event.target.value);
  const handleSurname = (event) => setSurname(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();

    const body = { email, password, name, surname };
    axios
      .post(`${API_URL}/auth/signup`, body)
      .then(() => {
        alert("A new User has been created!");
        navigate("/auth/login");
      })
      .catch((error) => {
        console.log("There is an error creating a new user!", error);
      });
  };
  return (
    <Container>
      <Row>
        <Col>
          <LeftSide></LeftSide>
        </Col>

        <Col style={{ height: "100hv" }}>
          <Form
            onSubmit={handleSubmit}
            style={{
              width: "50%",
              margin: "20%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h5 style={{ color: "white" }}>Welcome to</h5>
            <img style={{ width: "180px" }} src="/img/logo.svg" alt="" />
            <h4 style={{ color: "white", marginTop: "70px" }}>Sign Up</h4>

            <Form.Control
              style={{ borderRadius: "30px" }}
              type="text"
              placeholder="Name"
            />
            <br />
            <Form.Control
              style={{ borderRadius: "30px" }}
              type="text"
              placeholder="Email"
            />
            <br />
            <Form.Control
              style={{ borderRadius: "30px" }}
              type="text"
              placeholder="Password"
            />
            <br />
            <Button
              className="button"
              style={{
                background:
                  "linear-gradient(89.12deg, #9721f3 27.66%, #2136f3 91.42%)",
                borderRadius: "30px",
                width: "180px",
              }}
              type="submit"
            >
              Create account
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
