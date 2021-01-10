import { Breadcrumb, Button, Layout, Menu, Typography } from "antd";
import React, { FC, useState } from "react";
import {
  PieChartOutlined,
  FileOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./home";
import ServicesMain from "./services";
import AssignmentDoc from "./assignmentDoc";
import { USER } from "../App";
const { Content, Sider } = Layout;

const Dashboard: FC<DashboardProps> = ({ setmainUser, mainUser }) => {
  const [collapsed, setcollapsed] = useState(false);
  const toggleCollapsed = () => {
    setcollapsed(!collapsed);
  };

  const [Crumbs, setCrumbs] = useState("Assignment Description");
  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsible collapsed={collapsed} onCollapse={toggleCollapsed}>
          <div
            style={{
              height: 80,
            }}
            className="flex flex-1 justify-center items-center"
          >
            {!collapsed ? (
              <Typography.Title
                level={4}
                style={{
                  color: "white",
                  textAlign: "center",
                }}
              >
                Cloud Computing Assignment
              </Typography.Title>
            ) : (
              <Typography.Text style={{ color: "white" }}>
                CC ASG
              </Typography.Text>
            )}
          </div>
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              <Link to="/">Assignment Description</Link>
            </Menu.Item>

            <Menu.Item key="2" icon={<FileOutlined />}>
              <Link to="/services">Lambda Services</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UserOutlined />}>
              <Link to="/asg-doc">Assignment Documentation</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <div
            style={{
              paddingLeft: "1rem",
              paddingRight: "1rem",
              backgroundColor: "#747d8c",
            }}
            className="flex flex-row justify-between items-center"
          >
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>
                <Typography.Title level={5} style={{ color: "white" }}>
                  {Crumbs}
                </Typography.Title>
              </Breadcrumb.Item>
            </Breadcrumb>
            <Button
              type="dashed"
              onClick={() =>
                setmainUser((prev: any) => ({ ...prev, login: true }))
              }
              icon={<LogoutOutlined />}
            />
          </div>

          <Content style={{ margin: "0 16px" }}>
            <Switch>
              <Route path="/services">
                <div
                  className="site-layout-background"
                  style={{ padding: 24, minHeight: 360 }}
                >
                  <ServicesMain mainUser={mainUser} setCrumbs={setCrumbs} />
                </div>
              </Route>
              <Route path="/asg-doc">
                <div
                  className="site-layout-background"
                  style={{ padding: 24, minHeight: 360 }}
                >
                  <AssignmentDoc setCrumbs={setCrumbs} />
                </div>
              </Route>
              <Route path="/">
                <div
                  className="site-layout-background"
                  style={{ padding: 24, minHeight: 360 }}
                >
                  <Home setCrumbs={setCrumbs} />
                </div>
              </Route>
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

interface DashboardProps {
  setmainUser: any;
  mainUser: USER;
}

export default Dashboard;
