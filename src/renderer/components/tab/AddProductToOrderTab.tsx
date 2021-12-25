import { Button, Card, Form, Input, InputNumber, message } from "antd";
import { ipcRenderer as ipc } from "electron";

interface IAddProductToOrder {
  orderId: number,
  productId: number,
  quantity: number,
  money: number
}

export default function AddProductToOrderTab() {

  const handleAddProduct = (values: IAddProductToOrder) =>{
    ipc.invoke('guestAddProductToOrder', values.orderId, values.productId, values.quantity, values.money). then(() => {
      message.success("Product added to order successfully!");
    }).catch(error => {
      message.error(error.message);
    })
  }

  return (
    <Card
    title="Add Product To Order"
    style={{
      margin: '24px 16px',
      minHeight: 280,
    }}
    >
      <Form
      layout="vertical"
      onFinish={handleAddProduct}
      >
        <Form.Item
        label="Order ID"
        name="orderId"
        >
          <Input defaultValue={5}/>
        </Form.Item>
        <Form.Item
        label="Product ID"
        name="productId"
        >
          <Input defaultValue={8}/>
        </Form.Item>
        <Form.Item
        label="Quantity"
        name="quantity"
        >
          <InputNumber defaultValue={3}/>
        </Form.Item>
        <Form.Item
        label="Price"
        name="price"
        >
          <Input defaultValue={300000}/>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
    </Card>
  )
}
