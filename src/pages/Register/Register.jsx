import React, { useState } from "react";
import styles from "./Register.module.scss";
import classNames from "classnames/bind";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import defaultAvatar from "E:/Tinder/client/src/assets/images/7.jpg";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/api/authApi";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.css";

const cx = classNames.bind(styles);

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [registerForm, setRegisterForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });
    console.log(registerForm);
  };

  const validateData = () => {
    const { username, email, password } = registerForm;
    const passwordRegex = /^(?=.*[0-9])(?=.*[a-zA-Z]).{6,}$/;
    const emailRegex = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/;

    if (!username || !email || !password) {
      toast.error("Please fill in all fields");
      return false;
    }

    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email");
      return false;
    }

    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must be at least 6 characters long and contain at least one letter and number"
      );
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateData()) return;

    try {
      dispatch(registerUser(registerForm)).then((result) => {
        if (result.payload.code !== "200") {
          toast.error(`${result.payload.message}`);
          return;
        }

        toast.success(`${result.payload.message}`);
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      });
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <div className={cx("register")}>
      <ToastContainer />

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
                  <label className="form-label" htmlFor="username">
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    className="form-control form-control-lg"
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-outline mb-4">
                  {" "}
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
                  Register
                </button>

                <p className="text-center mt-4">
                  Already have an account? <Link to="/login">Log in</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
