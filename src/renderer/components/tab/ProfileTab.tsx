import { Button, Card, Col, Form, Input, Row } from "antd";

export default function ProfileTab() {
  return (
    <Card
      title="Profile"
      style={{
        margin: '24px 16px',
        minHeight: 280,
      }}
      >
      <Row gutter={48} className="w-full">
        <Col span={12}>
          <h3 className="text-3xl font-bold">
            Account Information
          </h3>
          <Form
            layout="vertical"
            autoComplete="off"
            >
            <Form.Item
              label="Full Name"
              name="fullName"
              required
              >
              <Input/>
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              required
              >
              <Input type="email" disabled/>
            </Form.Item>
            <Form.Item
              label="Username"
              name="username"
              required
              >
              <Input disabled/>
            </Form.Item>
            <Form.Item>
              <Button className="float-right" type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col span={12}>
          <h3 className="text-3xl font-bold">
            Additional Infomation
          </h3>
          <Form
            layout="vertical"
            autoComplete="off"
            >
            <Form.Item
              label="Phone"
              name="phone"
              required
              >
              <Input type="tel"/>
            </Form.Item>
            <Form.Item
              label="Address"
              name="address"
              required
              >
              <Input/>
            </Form.Item>
            <Form.Item
              label="ID Number"
              name="idNumber"
              required
              >
              <Input/>
            </Form.Item>
            <Form.Item>
              <Button className="float-right" type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Card>
  )
}
