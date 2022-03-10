import React from "react";
import { Button, Form, Input, Divider } from "antd";
import { MailOutlined, LockOutlined, AppleOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import { GoogleSVG, FacebookSVG } from "assets/svg/icon";
import CustomIcon from "./CustomIcon";
import axios from "axios";

export const LoginForm = (props) => {
  const { loading } = props;
  const onLogin = async (values) => {
    console.log(values);
    try {
      const response = await axios.post(
        "https://api-dev.rescounts.com/api/v1/users/login",
        JSON.stringify(values),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response));
    } catch (err) {
      console.log(err);
    }
  };
  const renderOtherSignIn = (
    <div>
      <Divider>
        <span className="text-muted font-size-base font-weight-normal">
          or login with
        </span>
      </Divider>
      <div className="d-flex flex-column justify-content-center">
        <Button
          onClick={() => {}}
          icon={<CustomIcon svg={FacebookSVG} />}
          disabled={loading}
        >
          Login with Facebook
        </Button>
        <Button
          onClick={() => {}}
          className="my-1"
          disabled={loading}
          icon={<CustomIcon svg={GoogleSVG} />}
        >
          Login with Google
        </Button>
        <Button
          onClick={() => {}}
          className="my-1"
          disabled={loading}
          icon={<AppleOutlined className="text-dark" />}
        >
          Login with Apple
        </Button>
      </div>
    </div>
  );

  return (
    <>
      <Form layout="vertical" name="login-form" onFinish={onLogin}>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email",
            },
            {
              type: "email",
              message: "Please enter a validate email!",
            },
          ]}
        >
          <Input prefix={<MailOutlined className="text-warning" />} />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password",
            },
          ]}
        >
          <Input.Password prefix={<LockOutlined className="text-warning" />} />
        </Form.Item>
        <Form.Item>
          <Button type="secondary" htmlType="submit" block loading={loading}>
            Login In
          </Button>
        </Form.Item>
        <span
          onClick={() => {}}
          className="cursor-pointer font-size-sm font-weight-normal d-flex justify-content-center"
        >
          Forget Password?
        </span>
        {renderOtherSignIn}
      </Form>
    </>
  );
};

LoginForm.propTypes = {
  otherSignIn: PropTypes.bool,
  showForgetPassword: PropTypes.bool,
  extra: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

LoginForm.defaultProps = {
  otherSignIn: true,
  showForgetPassword: false,
};

export default LoginForm;
