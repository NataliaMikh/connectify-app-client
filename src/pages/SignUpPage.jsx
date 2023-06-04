import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import config from "../config/config";

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
    <div>
      <h2>Create an account!</h2>
    </div>
  );
}
