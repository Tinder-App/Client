import React, { useState } from "react";
import styles from "./Login.module.scss";
import classNames from "classnames/bind";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import imageUrl from "../../assets/images/2.png";
import "react-toastify/dist/ReactToastify.css";

const cx = classNames.bind(styles);

const Login = () => {
  const navigate = useNavigate();

  const [isShowPassword, setIsShowPassword] = useState(false);
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = loginForm;
    if (!email || !password)
      toast.error("Please enter your email and password");
    else {
      toast.success("Login successfully");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  };

  const handleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  const handleChangeInput = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  return (
    <div className={cx("login")}>
      <ToastContainer className={cx("toast-message")} />
      <div className={cx("login__container")}>
        <div className={cx("login__wrapper")}>
          <div className={cx("image")} onClick={() => navigate("/")}>
            <img src={imageUrl} alt="image" />
          </div>
          <form className={cx("login__form")}>
            <h1>Log in</h1>

            <label>Email</label>
            <input
              type="text"
              placeholder="Your email . . ."
              name="email"
              className={cx("input--email")}
              onChange={(e) => handleChangeInput(e)}
            />
            <label>Password</label>
            <input
              type={isShowPassword ? "text" : "password"}
              placeholder="Your password . . ."
              name="password"
              className={cx("input--password")}
              onChange={(e) => handleChangeInput(e)}
            />
            <div className={cx("show-password")}>
              <input
                type="checkbox"
                className={cx("input-show-password")}
                onClick={() => {
                  handleShowPassword();
                }}
              />
              <span>Show password</span>
            </div>
            <button
              className={cx("btn-login")}
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              Log in
            </button>
            <p className={cx("message")}>
              Do not have an account? <Link to="/register">Register now</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
