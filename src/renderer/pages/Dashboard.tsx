import { Layout, Menu } from "antd";
import { useState } from "react";
import {UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Link, Switch, Route } from "react-router-dom";
import ProfileTab from "renderer/components/tab/ProfileTab";
import OrderTab from "renderer/components/tab/OrderTab";
import OrderDetailTab from "renderer/components/tab/OrderDetailTab";
import ProductListTab from "renderer/components/tab/ProductListTab";
import PartnerTab from "renderer/components/tab/PartnerTab";

const { Header, Footer, Sider } = Layout;

export default function Dashboard() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{minHeight: "100vh"}}>
      <Sider collapsible collapsed={collapsed} onCollapse={(val) => setCollapsed(val)}>
        <div className="w-16 h-16 rounded-full bg-white mx-auto my-4"></div>
        <Menu theme="dark" defaultSelectedKeys={['profile']} mode="inline">
          <Menu.Item key="profile" icon={<UserOutlined/>}>
            <Link to="/">Profile</Link>
          </Menu.Item>
          <Menu.Item key="order" icon={<ShoppingCartOutlined />}>
            <Link to="/dashboard/order">Order</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{backgroundColor: "white"}} className="shadow"></Header>
        <Switch>
          <Route path="/" exact component={PartnerTab}/>
          <Route path="/" exact component={ProductListTab}/>
          <Route path="/" exact component={OrderDetailTab}/>
          <Route path="/" exact component={ProfileTab}/>
          <Route path="/dashboard/order" exact component={OrderTab}/>
        </Switch>
        <Footer className="text-center">
          Footer
        </Footer>
      </Layout>
    </Layout>
  )
}
