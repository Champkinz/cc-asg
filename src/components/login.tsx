import { Button, Typography } from "antd";
import React, { FC, useState } from "react";
import { AccessOAuth } from "../sdk/access";
const { Text } = Typography;

const Login: FC<LoginProps> = ({ setmainUser }) => {
  const sdk = new AccessOAuth();
  const [isLoading, setisLoading] = useState(false);
  // const layout = {
  //   labelCol: { span: 8 },
  //   wrapperCol: { span: 16 },
  // };
  // const tailLayout = {
  //   wrapperCol: { offset: 8, span: 16 },
  // };

  // const onFinish = (values: any) => {
  //   console.log("Success:", values);
  // };

  // const onFinishFailed = (errorInfo: any) => {
  //   console.log("Failed:", errorInfo);
  // };

  const onLogin = async () => {
    setisLoading(true);
    let res: any = await sdk.getAccessToken();
    console.log("res :", res);
    if (res) {
      setmainUser((prev: any) => ({
        ...prev,
        userToken: res.access_token,
        login: false,
      }));
      setisLoading(false);
    }
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
            {/* <Form
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
                <Button type="primary" htmlType="submit" onClick={onLogin}>
                  Signin
                </Button>
              </Form.Item>
            </Form> */}

            <Button
              loading={isLoading}
              type="primary"
              htmlType="submit"
              onClick={onLogin}
            >
              Authentication
            </Button>
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
