import { Button, Card, Form, Input, Typography } from "antd";
import React, { FC } from "react";
const { Title, Text } = Typography;

const Login: FC<LoginProps> = ({ setmainUser }) => {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "5rem",
        height: "100vh",
      }}
    >
      <div
        style={{
          width: "50%",
          height: "50%",
          boxShadow:
            "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
        }}
      >
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-around",
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "row",
              background: "linear-gradient(to right, #FF4B2B, #FF416C)",
              justifyContent: "center",
              alignItems: "center",
              padding: "1rem",
            }}
          >
            <Text
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                color: "white",
                textAlign: "center",
              }}
            >
              Cloud Computing
              <br /> Assignment
            </Text>
          </div>
          <div
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              padding: "1rem",
            }}
          >
            <Form
              {...layout}
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button
                  type="primary"
                  htmlType="submit"
                  onClick={() => {
                    setmainUser((prev: any) => ({ ...prev, login: false }));
                  }}
                >
                  Signin
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

interface LoginProps {
  setmainUser: any;
}

export default Login;