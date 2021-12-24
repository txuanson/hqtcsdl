import { ShoppingCartOutlined } from "@ant-design/icons";
import { Card, Col, message } from "antd";

export default function ShoppingProductCell(){
  return (
    <Col span={6}>
        <Card
        hoverable
        className="inline-block"
        style={{ width: 240 }}
        actions={[
          <ShoppingCartOutlined onClick={() => message.info("clicked")} />
        ]}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
        <Card.Meta title="Product Name" description="www.instagram.com"/>
      </Card>
    </Col>
  )
}
