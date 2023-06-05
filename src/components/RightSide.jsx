import React from "react";
import { Form, Button } from "react-bootstrap";

function RightSide() {
  return (
    <div className="rightSide">
      <Form
        style={{
          width: "70%",
          margin: "20%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h5 style={{ color: "white" }}>Welcome to</h5>
        <img style={{ width: "180px" }} src="/img/logo.svg" alt="" />
        <h4 style={{ color: "white", marginTop: "30px" }}>Sign Up</h4>
        <Form.Control type="text" placeholder="Name" />
        <br />
        <Form.Control type="text" placeholder="Email" />
        <br />
        <Form.Control type="text" placeholder="Password" />
        <br />
        <Button className="button" type="submit">
          Create account
        </Button>
      </Form>
    </div>
  );
}

export default RightSide;
