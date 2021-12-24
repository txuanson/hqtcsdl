import { ArrowLeftOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Badge, Layout } from "antd";
import { Switch, Route, Link } from "react-router-dom";
import CartTab from "renderer/components/tab/CartTab";
import ProductDetailTab from "renderer/components/tab/ProductDetailTab";
import ShoppingTab from "renderer/components/tab/ShoppingTab";
const {Header} = Layout;

export default function Shopping() {
  return (
    <Layout style={{minHeight: "100vh"}}>
      <Header style={{backgroundColor: "#396ea9", color: "white"}}>
        <div className="flex justify-between mt-3">
          <Link className="font-medium text-white p-2 leading-5" to="/dashboard">
            <ArrowLeftOutlined className="text-2xl inline-block"/>
            <span> Back To Dashboard</span>
          </Link>
          <Link className="text-white text-lg leading-4 block" to="/shopping/cart">
            <Badge count={1}>
              <div className="p-2.5 bg-gray-200 rounded-full">
                <ShoppingCartOutlined/>
              </div>
            </Badge>
          </Link>
        </div>
      </Header>
      <div className="container mx-auto my-6">
        <Switch>
          <Route path="/shopping/cart" component={CartTab}/>
          <Route path="/shopping/product/:id" component={ProductDetailTab}/>
          <Route path="/shopping" component={ShoppingTab}/>
        </Switch>
      </div>
    </Layout>
  )
}
