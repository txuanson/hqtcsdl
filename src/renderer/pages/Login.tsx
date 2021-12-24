import {Col, Row, Form, Input, Button, message} from 'antd';
import { ipcRenderer as ipc } from 'electron';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import userSlice from 'renderer/redux/reducer/userSlice';
import bgImg from '../../../assets/img/login.png';

interface UserCertificate {
  user: string,
  password: string
}

export default function Login(){
  let history = useHistory();

  const dispatch = useDispatch();

  const login = ({user, password} : UserCertificate) => {
    ipc.invoke('login', user, password).then((user) => {
      dispatch(
        userSlice.actions.authenticate(user)
      );
      message.success("Login successfully!", 2, () => {
        history.push("/dashboard");
      });
    }).catch(_err => {
      message.error("Login unsuccessful. Please try again!")
    })
  }

  return (
    <Row className="h-screen">
      <Col span={16} style={{backgroundImage: `url(${bgImg})`}} className="bg-cover"></Col>
      <Col span={8} className="px-8">
        <div className="flex flex-col h-screen place-content-center">
          <Link to="/dashboard">dashboard</Link>
          <h3 className="font-bold text-4xl mb-7 text-center">Log in</h3>
          <Form
            layout="vertical"
            autoComplete="off"
            onFinish={login}
            >
            <Form.Item
              label="Username"
              name="user"
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
            <Form.Item>
              <Button className="w-full" type="primary" htmlType="submit">
                Log in
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Col>
    </Row>
  )
}
