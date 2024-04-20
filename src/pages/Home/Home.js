import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import { useNavigate } from "react-router-dom";
import image1 from "../../assets/images/1.png";
import logo from "../../assets/images/3.png";
import rocketGif from "../../assets/images/rocket-158_256.gif";

const cx = classNames.bind(styles);

const Home = () => {
  const navigate = useNavigate();

  const [isClick, setIsClick] = useState(false);

  // useEffect(() => {
  //   setIsClick(false);
  // }, [isClick]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsClick(true);
    setTimeout(() => {
      navigate(`/${e.target.name}`);
    }, 3000);
  };

  return (
    <div className={cx("home")}>
      <div className={cx("home__content-left")}>
        <img src={image1} alt="image1" />
      </div>
      <div className={cx("home__content-right")}>
        <div className={cx("logo")}>
          <img src={logo} alt="logo" />
        </div>
        <h1>Chat App</h1>

        <div className={cx("button--group")}>
          {/* <Link to="/login"> */}
          <button
            className={cx("btn-login")}
            name="login"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Login
          </button>
          {/* </Link> */}
          <button
            className={cx("btn-register")}
            name="register"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Register{" "}
          </button>
        </div>
      </div>

      <img
        src={rocketGif}
        alt="rocketGif"
        className={cx("rocket", { "rocket--active": isClick })}
      />
    </div>
  );
};

export default Home;
