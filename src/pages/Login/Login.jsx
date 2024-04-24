import React, { useState } from "react";
import styles from "./Login.module.scss";
import classNames from "classnames/bind";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import imageUrl from "../../assets/images/2.png";
import rocket from "../../assets/images/rocket-158_256.gif";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/api/authApi";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
const cx = classNames.bind(styles);

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);

  const [isShowPassword, setIsShowPassword] = useState(false);
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = loginForm;
    if (!email || !password)
      toast.error("Please enter your email and password");
    else {
      dispatch(loginUser(loginForm)).then((result) => {
        if (result.payload.code !== 400) {
          toast.success(`${result.payload.message}`);
          setTimeout(() => {
            navigate("/post");
          }, 1000);
        } else {
          toast.error(`${result.payload.message}`);
        }
      });
    }
  };

  const handleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  const handleInputChange = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  return (
    <div className={cx("login")}>
      <ToastContainer className={cx("toast-message")} />
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="img-fluid"
                alt="Phone image"
              />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form onSubmit={handleSubmit}>
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="email">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control form-control-lg"
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="password">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="form-control form-control-lg"
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-block"
                >
                  Log in
                </button>

                <p className="text-center mt-4">
                  Do not have an account? <Link to="/register">Register</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
