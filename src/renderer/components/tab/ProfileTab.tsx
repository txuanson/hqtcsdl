import { Button, Card, Form, Input, message } from "antd";
import { ipcRenderer as ipc } from "electron";
import { useEffect, useState } from "react";

interface IData {
  name: string[],
  value: string
}

const dataMapper = (data: any) => {
  const res : any = {} ;
  res["fullName"] = data["HOTEN"];
  res["email"] = data["EMAIL"];
  res["username"] = data["TENTK"];
  res["phone"] = data["SODIENTHOAI"];
  res["address"] = data["DIACHI"];
  return res;
}

export default function ProfileTab() {
  const [data, setData] = useState([
    {
      name: ["fullName"],
      value: ""
    },
    {
      name: ["email"],
      value: ""
    },
    {
      name: ["username"],
      value: ""
    },
    {
      name: ["phone"],
      value: ""
    },
    {
      name: ["address"],
      value: ""
    },
  ])


  useEffect(() => {
    ipc.invoke('allGetProfile').then((res) => {
      const mappedData = dataMapper(res);
      const newData = data.map((item: IData) => {
        return {
          ...item,
          value: mappedData[item.name[0]] || ""
        }
      })
      setData(newData);
    }).catch((error) => {
      message.error(error.message)
    })
  }, [])

  const handleSubmitProfile = (values: any) => {
    ipc.invoke('updateProfile', values.email, values.fullName, values.address, values.phone).then(() => {
      message.success("Update profile successfully!");
    }).catch(error => {
      message.error(error.message); 
    })
  }

  return (
    <Card
      title="Profile"
      style={{
        margin: '24px 16px',
        minHeight: 280,
      }}
      >
          <Form
            layout="vertical"
            fields={data}
            autoComplete="off"
            onFinish={handleSubmitProfile}
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
              <Input type="email"/>
            </Form.Item>
            <Form.Item
              label="Username"
              name="username"
              required
              >
              <Input disabled/>
            </Form.Item>
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
            <Form.Item>
              <Button className="float-right" type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
    </Card>
  )
}
