import {Col, Row, Form, Input, Button, Select} from 'antd';
const {Option} = Select;
import { Link } from 'react-router-dom';
import bgImg from '../../../assets/img/register.png';

export default function Register(){
  return (
    <Row className="h-screen">
      <Col span={16} style={{backgroundImage: `url(${bgImg})`}} className="bg-cover"></Col>
      <Col span={8} className="px-8">
        <div className="flex flex-col h-screen place-content-center">
          <h3 className="font-bold text-4xl mb-7 text-center">Register</h3>
          <Form
            layout="vertical"
            autoComplete="off"
            scrollToFirstError
            >
            <Form.Item
              label="Account type"
              name="type"
              rules={[{ required: true, message: 'Please input your account type!' }]}
              >
              <Select>
                <Option value="1">Admin</Option>
                <Option value="1">Admin</Option>
                <Option value="1">Admin</Option>
                <Option value="1">Admin</Option>
                <Option value="1">Admin</Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
              >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
              >
              <Input.Password />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[{
                type: 'email',
                message: 'The input is not valid E-mail!',
              },{
                required: true,
                message: 'Please input your E-mail!',
              },]}
              >
              <Input />
            </Form.Item>

            <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please input your name'}]}
            >
              <Input/>
              </Form.Item>

            <Form.Item>
              <Button className="w-full" type="primary" htmlType="submit">
                Sign In
              </Button>
            </Form.Item>
          </Form>
          <span className="text-center">Already had an account? <Link to="/">Register</Link></span>
        </div>
      </Col>
    </Row>
  )
}
