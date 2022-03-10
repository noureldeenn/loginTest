import React from "react";
import LoginForm from "../../components/LoginForm";
import { Card, Row, Col } from "antd";
import CustomIcon from "views/auth-views/components/CustomIcon";
import { callBackSVG } from "assets/svg/icon";
import whatsApp from "assets/whatsApp.jpg";
import logo from "assets/Logo-image.png";

const backgroundStyle = {
  backgroundImage: "url(/img/others/img-17.jpg)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const LoginOne = (props) => {
  return (
    <div className="h-100" style={backgroundStyle}>
      <div className="container d-flex flex-column justify-content-center h-100">
        <Row justify="center">
          <Col xs={20} sm={20} md={20} lg={7}>
            <Card>
              <div className="my-1">
                <div className="d-flex justify-content-end">
                  <CustomIcon svg={callBackSVG} />
                  <img src={whatsApp} alt="" />
                </div>
                <div className="d-flex justify-content-center mt-1">
                  <img className="img-fluid" src={logo} alt="" width="50%" />
                </div>
                <div className="text-center mt-1">
                  <p className="m-0 font-weight-bold text-black">Login</p>
                  <p>Add your details to login</p>
                </div>
                <Row justify="center">
                  <Col xs={24} sm={24} md={20} lg={20}>
                    <LoginForm {...props} />
                  </Col>
                </Row>
                <div className="text-center mt-1">
                  <p>
                    Don't have an account yet?{" "}
                    <a style={{ color: "black" }} href="/">
                      Sign Up
                    </a>
                  </p>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default LoginOne;
