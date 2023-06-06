import "bootstrap/dist/css/bootstrap.css";
import { Row, Col, Form, Button, Container } from "react-bootstrap";
import LeftSide from "../components/LeftSide";

import config from "../config/config";

import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

const API_URL = config.API_URL;

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();

    const body = { email, password };

    axios
      .post(`${API_URL}/auth/login`, body)
      .then((response) => {
        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/chatpage");
      })
      .catch((error) => {
        console.log("There is an error Logging in.", error);
      });
    // const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get("email"),
    //   password: data.get("password"),
    // });
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
            noValidate
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
              type="Email"
              placeholder="Name"
              margin="normal"
              required
              fullWidth
              id="email"
              name="Email"
              value={email}
              autoComplete="Email"
              autoFocus
              onChange={handleEmail}
            />
            <br />
            <Form.Control
              style={{ borderRadius: "30px" }}
              type="Password"
              placeholder="Password"
              margin="normal"
              required
              fullWidth
              id="Password"
              name="Password"
              value={password}
              autoComplete="Password"
              autoFocus
              onChange={handlePassword}
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
              Log In
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
