import { Layout, Menu, Tag } from "antd";
import { useState } from "react";
import {UserOutlined, ShoppingCartOutlined, PaperClipOutlined, ShoppingOutlined, PlusOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Link, Switch, Route } from "react-router-dom";
import ProfileTab from "renderer/components/tab/ProfileTab";
import OrderTab from "renderer/components/tab/OrderTab";
import OrderDetailTab from "renderer/components/tab/OrderDetailTab";
import ProductListTab from "renderer/components/tab/ProductListTab";
// import PartnerTab from "renderer/components/tab/PartnerTab";
import ContractListTab from "renderer/components/tab/ContractListTab";
import { useSelector } from "react-redux";
import { UserState } from "renderer/redux/reducer/userSlice";
import ProductDetailTab from "renderer/components/tab/ProductDetailTab";
import EditProductDetailTab from "renderer/components/tab/EditProductDetailTab";
import DeleteProductTab from "renderer/components/tab/DeleteProduct";
import AddProductToOrderTab from "renderer/components/tab/AddProductToOrderTab";

const { Header, Footer, Sider } = Layout;

const roleMap = [{
  name: "Admin",
  color: "red"
}, {
  name: "Employee",
  color: "lime"
}, {
  name: "Partner",
  color: "purple"
}, {
  name: "Guest",
  color: "blue"
}, {
  name: "Driver",
  color: "green"
}]

export default function Dashboard() {
  const [collapsed, setCollapsed] = useState(false);

  const user = useSelector((state: {user: UserState}) => state.user);

  return (
    <Layout style={{minHeight: "100vh"}}>
      <Sider collapsible collapsed={collapsed} onCollapse={(val) => setCollapsed(val)}>
        <div className="my-4 text-center">
          <div className="w-16 h-16 rounded-full bg-white mx-auto mb-2"></div>
          <div className="text-white font-semibold text-lg text-center mb-2">{user.user}</div>
          <Tag color={roleMap[user.role].color}>{roleMap[user.role].name}</Tag>
        </div>
        <Menu theme="dark" defaultSelectedKeys={['profile']} mode="inline">
          <Menu.Item key="profile" icon={<UserOutlined/>}>
            <Link to="/dashboard">Profile</Link>
          </Menu.Item>

          {/* {user.role === 2 && <Menu.Item key="partner" icon={<UserSwitchOutlined />}>
            <Link to="/dashboard/partner">Partner</Link>
          </Menu.Item>} */}

          {(user.role === 1 || user.role === 2) && <Menu.Item key="contract" icon={<PaperClipOutlined />}>
            <Link to="/dashboard/contract">Contract</Link>
          </Menu.Item>}


          {(user.role === 2 || user.role === 3 || user.role === 4) && <Menu.Item key="order" icon={<ShoppingCartOutlined />}>
            <Link to="/dashboard/order">Order</Link>
          </Menu.Item>}

          {user.role === 3 && <Menu.Item key="shopping" icon={<ShoppingOutlined />}>
            <Link to="/dashboard/product-detail">Product Detail</Link>
          </Menu.Item>}

          {user.role === 3 && <Menu.Item key="add-product-to-order" icon={<PlusOutlined />}>
            <Link to="/dashboard/add-product-to-order">Add Product To Order</Link>
          </Menu.Item>}

          {user.role === 2 && <Menu.Item key="delete-product" icon={<DeleteOutlined />}>
            <Link to="/dashboard/delete-product">Delete Product</Link>
          </Menu.Item>}

          {user.role === 2 && <Menu.Item key="edit-product" icon={<EditOutlined />}>
            <Link to="/dashboard/edit-product-detail">Edit Product</Link>
          </Menu.Item>}
        </Menu>
      </Sider>
      <Layout>
        <Header style={{backgroundColor: "white"}} className="shadow"></Header>
        <Switch>
          <Route path="/dashboard/add-product-to-order" component={AddProductToOrderTab}/>
          <Route path="/dashboard/delete-product" component={DeleteProductTab}/>
          <Route path="/dashboard/edit-product-detail" component={EditProductDetailTab}/>
          <Route path="/dashboard/product-detail" component={ProductDetailTab}/>
          <Route path="/dashboard/product" component={ProductListTab}/>
          <Route path="/dashboard/contract" component={ContractListTab}/>
          {/* <Route path="/dashboard/partner" component={PartnerTab}/> */}
          <Route path="/dashboard/order/:orderId" component={OrderDetailTab}/>
          <Route path="/dashboard/order" component={OrderTab}/>
          <Route path="/dashboard" component={ProfileTab}/>
        </Switch>
        <Footer className="text-center">
          Footer
        </Footer>
      </Layout>
    </Layout>
  )
}
