import { Button, Form, Input } from "antd";
import ShoppingCartProductCell from "../cell/ShoppingCartProductCell";

export default function CartTab() {
  return (
    <div className="bg-white px-6 py-4">
      <div className="divide-y">
        <ShoppingCartProductCell/>
      </div>
      <div className="flex justify-end border-t border-b rounded-sm clear-both p-3 mb-4">
        <div>
          <div>Total: <strong className="text-lg">23.000</strong></div>
          <div>Total: <strong className="text-lg">23.000</strong></div>
        </div>
      </div>
      <Form
        layout="vertical"
      >
        <h3 className="text-2xl">Shipping Information</h3>
        <Form.Item
          label="Address"
          name="address"
          required
        >
          <Input/>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
    </div>
  )
}
