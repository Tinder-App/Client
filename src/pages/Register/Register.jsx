import React, { useEffect, useState } from "react";
import styles from "./Register.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);
const Register = () => {
  const [registerForm, setRegisterForm] = useState({
    avatar: "",
    age: "",
    username: "",
    gender: "",
    email: "",
    password: "",
    likeNumber: 0,
    post: {},
    friends: {},
  });

  const [previewImage, setPreviewURL] = useState(null);

  const handleSelectedFile = (file) => {
    if (file) console.log(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChangeInput = (e) => {
    setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });
  };
  return (
    <div className={cx("register")}>
      <div className={cx("register-container")}>
        <h1>Log in</h1>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Email"
            name="email"
            className={cx("input-email")}
            onChange={(e) => {
              handleChangeInput(e);
              //   setregisterForm(...registerForm, { name: e.target.value });
              //   console.log(e.target.value);
            }}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            className={cx("input-password")}
            onChange={(e) => {
              handleChangeInput(e);
              // setregisterForm(...registerForm, { name: e.target.value });
            }}
          />
          <div className={cx("register-area")}>
            <button className={cx("btn-register")}>Log in</button>
          </div>
          <input
            type="file"
            onChange={(file) => {
              handleSelectedFile(file);
            }}
          />
        </form>
        <p>
          Dont have an account? <Link to="/register">Register</Link> here
        </p>
      </div>
    </div>
  );
};

export default Register;
