import { Button, Card, Col, Form, Input, Row } from "antd";

export default function PartnerTab() {
  return (
    <Card
      title="Partner Information"
      style={{
        margin: '24px 16px',
        minHeight: 280,
      }}
      >
      <Form
        layout="vertical"
        autoComplete="off"
        >
        <Row gutter={48}>
          <Col span={12}>
            <Form.Item
            label="Company Name"
            name="companyName"
            required
            >
              <Input/>
            </Form.Item>

            <Form.Item
            label="Email"
            name="email"
            required
            >
              <Input type="email"/>
            </Form.Item>

            <Form.Item
            label="Tax Code"
            name="taxCode"
            required
            >
              <Input/>
            </Form.Item>

            <Form.Item
            label="Phone"
            name="phone"
            required
            >
              <Input type="tel"/>
            </Form.Item>

            <Form.Item
            label="Type Of Product"
            name="typeOfProduct"
            required
            >
              <Input/>
            </Form.Item>

            <Form.Item
            label="Branches Count"
            name="branchCount"
            required
            >
              <Input type="number" min={0}/>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="City/Province"
              name="province"
              required
              >
              <Input/>
            </Form.Item>

            <Form.Item
              label="District"
              name="district"
              required
              >
              <Input/>
            </Form.Item>

            <Form.Item
              label="Address"
              name="address"
              required
              >
              <Input/>
            </Form.Item>

            <Form.Item
              label="Order Per Day"
              name="orderPerDay"
              required
              >
              <Input type="number" min={0} step={100}/>
            </Form.Item>

            <Form.Item
              label="Representative"
              name="representative"
              required
              >
              <Input/>
            </Form.Item>
          </Col>
        </Row>

        <Form.Item>
          <Button className="float-right" type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>

      </Form>
    </Card>
  )
}
