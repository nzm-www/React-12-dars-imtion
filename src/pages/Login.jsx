import React, { useState } from "react";
import "../styles/login.css";
import { Input, Switch } from "antd";
import Logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import axios from "axios";


// axsios fetchni urniga ishlatilingan kutibxona
// npm i axios 
const onChange = (checked) => {
  console.log(`switch to ${checked}`);
};

function Login() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  function handle(e) {
    const newLogin = { ...login };
    newLogin[e.target.id] = e.target.value;
    setLogin(newLogin);
    console.log(login);
  }

  function Login() {
    axios
      .post("https://api.escuelajs.co/api/v1/auth/login", login)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }

  return (
    <div className="login d-flex w-100">
      <div className="left w-75"></div>
      <div className="right p-5">
        <div className="logo d-flex w-100 gap-2 align-items-center pt-5">
          <img className="logo" src={Logo} alt="" />
          <p className="m-0 fw-bold">UI Unicorn</p>
        </div>
        <div className="title pt-5">
          <p className="m-0 mt-5 fw-bold fs-5">Nice to see you again</p>
        </div>
        <form action="login" className="w-100 pt-4 d-flex flex-column gap-4">
          <div className="username w-100 gap-2 d-flex flex-column">
            <label className="login-label fw-light ms-1" htmlFor="login">
              Login
            </label>
            <Input
              onChange={(e) => handle(e)}
              id="email"
              value={login.email}
              className="login-input"
              placeholder="Email or phone number"
            />
          </div>
          <div className="password w-100 gap-2 d-flex flex-column">
            <label htmlFor="password" className="login-label fw-light ms-1">
              Password
            </label>
            <Input.Password
              onChange={(e) => handle(e)}
              id="password"
              value={login.password}
              className="login-input"
              placeholder="Enter password"
            />
          </div>
          <div className="forgot-password d-flex align-items-center justify-content-between">
            <div className="remember-me d-flex align-items-center gap-2">
              <Switch onChange={onChange} />
              <p className="remember m-0 fw-bold">Remember me</p>
            </div>
            <div className="restore-password">
              <a className="text-decoration-none" href="#">
                Forgot Password?
              </a>
            </div>
          </div>
          <button onClick={() => Login()} className="btn btn-primary">
            Login
          </button>
          <div className="to-register d-flex gap-3 justify-content-center">
            <p>Don't have an account ?</p>
            <Link to="/register" className="text-decoration-none">
              Sign up now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
