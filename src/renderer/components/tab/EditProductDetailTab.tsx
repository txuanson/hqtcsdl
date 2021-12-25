import { Button, Card, Form, Input, InputNumber, message } from "antd";
import { ipcRenderer as ipc} from "electron";

interface IProduct {
  id: number,
  name: string,
  quantity: number,
  price: number
}

export default function EditProductDetailTab() {

  const handleSubmitEditProduct = (values: IProduct) => {
    ipc.invoke('partnerEditProduct', 8, values.name, values.quantity, values.price).then(() => {
      message.success("Edit product successfully!");
    }).catch(error => {
      message.error(error.message)
    })
  }

  return (
    <Card
    title="Edit Product"
    style={{
      margin: '24px 16px',
      minHeight: 280,
    }}
    >
      <Form
        layout="vertical"
        autoComplete="false"
        onFinish={handleSubmitEditProduct}
      >
        <Form.Item
        label="Product ID"
        name="id"
        required
        >
          <Input defaultValue={8} disabled/>
        </Form.Item>

        <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Please input product name!' }]}
        >
          <Input/>
        </Form.Item>
        <Form.Item
        label="In Stock"
        name="quantity"
        rules={[{ required: true, message: 'Please input in stock value!' }]}
        >
          <InputNumber/>
        </Form.Item>
        <Form.Item
        label="Price"
        name="price"
        rules={[{ required: true, message: 'Please input price!' }]}
        >
          <Input/>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
    </Card>
  )
}
