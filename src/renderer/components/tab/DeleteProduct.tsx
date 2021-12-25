import { Button, Card, Form, Input, message } from "antd";
import { ipcRenderer as ipc } from "electron";

export default function DeleteProductTab() {

  const handleDeleteProduct = (values: {id: number}) =>{
    console.log(values);
    ipc.invoke('partnerDeleteProduct', 9). then(() => {
      message.success("Product deleted successfully!");
    }).catch(error => {
      message.error(error.message);
    })
  }

  return (
    <Card
    title="Delete Product"
    style={{
      margin: '24px 16px',
      minHeight: 280,
    }}
    >
      <Form
      layout="vertical"
      onFinish={handleDeleteProduct}
      >
        <Form.Item
        label="Product ID"
        name="id"
        >
          <Input defaultValue={9} disabled/>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
    </Card>
  )
}
