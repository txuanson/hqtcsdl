import { Button, Card, Form, Row, Select, Table } from "antd";

const columns = [
  {
    title: 'Product Name',
    dataIndex: 'productName',
    key: 'productName',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'quantity',
  },
  {
    title: 'Subtotal',
    dataIndex: 'subtotal',
    key: 'subtotal',
  },
]

export default function OrderDetailTab() {
  return (
    <>
      <Row>
        <Card
          title="Order Shipping Information"
          style={{
            width: 500,
            minHeight: 200,
            margin: '24px 16px 16px 16px'
          }}
          >
          <div> Customer: <span className="font-semibold text-lg">Alexxxx</span></div>
          <div> Address: <span className="font-medium italic">ffuhwh fwehfuweh fweuhfuweh fwufhwu fwheufhwu fweufwuh</span></div>
          <div> Phone: <span className="font-medium italic">0123456789</span></div>
        </Card>
        <Card
          title="Order Status"
          style={{
            width: 300,
            minHeight: 200,
            margin: '24px 16px 16px 0'
          }}
          >
            <Form>
              <Form.Item>
                <Select className="w-full" defaultValue="1">
                  <Select.Option value="1">Preparing</Select.Option>
                  <Select.Option value="2">Preparing</Select.Option>
                  <Select.Option value="3">Preparing</Select.Option>
                  <Select.Option value="4">Preparing</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item>
                <Button className="float-right" type="primary" htmlType="submit">Submit</Button>
              </Form.Item>
            </Form>
        </Card>
      </Row>
      <Card
        title="Order Information"
        style={{
          minHeight: 1000,
          margin: '0px 16px'
        }}
        >
        <Table columns={columns}/>
      </Card>
    </>
  )
}
