import { Button, Card, message, Row, Select, Table } from "antd";
import { ipcRenderer as ipc } from "electron";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { UserState } from "renderer/redux/reducer/userSlice";
import { useParams } from 'react-router-dom';

const statusMap = [
  "In Transit",
  "Delivered",
  "Preparing",
]


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
  const { orderId } : any = useParams();

  const [address, setAddress] = useState("");
  const [status, setStatus] = useState(1);
  const [alterStatus, setAlterStatus] = useState(1);

  const user = useSelector((state: {user: UserState}) => state.user);

  const handleChangeOrderStatus = () => {
    console.log(status);
    ipc.invoke(user.role === 4 ? 'driverSetOrderStatus' : 'partnerSetOrderStatus', orderId, status).then(res => {
      console.log(res);
    }).catch(error => {
      message.error(error);
    })
  }

  const handleChangeOrderStatusDirtyRead = () => {
    console.log(alterStatus);
    ipc.invoke('driverUpdateOrderStatusDirtyRead', orderId, alterStatus).then(res => {
      console.log(res);
    }).catch(error => {
      message.error(error);
    })
  }

  useEffect(() => {
    ipc.invoke('getOrderDetail', orderId).then(res => {
      setAddress(res["DIACHIGIAO"]);
      setStatus(res["TINHTRANG"]);
      setAlterStatus(res["TINHTRANG"]);
    }).catch(error => {
      message.error(error);
    })
  }, [])

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
          <div> Customer: <span className="font-semibold text-lg"></span></div>
          <div> Address: <span className="font-medium italic">{address}</span></div>
          <div> Phone: <span className="font-medium italic"></span></div>
        </Card>
        {user.role === 3 && <Card
          title="Order Status"
          style={{
            width: 300,
            minHeight: 200,
            margin: '24px 16px 16px 0'
          }}
          >
            <div> Status: <span className="font-semibold text-lg">{statusMap[status]}</span></div>
        </Card>}
        {(user.role === 4 || user.role === 2) && <Card
          title="Order Status"
          style={{
            width: 300,
            minHeight: 200,
            margin: '24px 16px 16px 0'
          }}
          >
            <Select className="w-full" value={status} onChange={(value) => setStatus(value)}>
              <Select.Option value={0}>In Transit</Select.Option>
              <Select.Option value={1}>Delivered</Select.Option>
              <Select.Option value={2}>Preparing</Select.Option>
            </Select>

            <Button className="float-right" type="primary" onClick={handleChangeOrderStatus}>Submit</Button>
        </Card>}
        {user.role === 4 && <Card
          title="Order Status Dirty Read Of Driver"
          style={{
            width: 300,
            minHeight: 200,
            margin: '24px 16px 16px 0'
          }}
          >
            <Select className="w-full" value={alterStatus} onChange={(value) => setAlterStatus(value)}>
              <Select.Option value={0}>In Transit</Select.Option>
              <Select.Option value={1}>Delivered</Select.Option>
              <Select.Option value={2}>Preparing</Select.Option>
              <Select.Option value={100}>Wrong Status Value</Select.Option>
            </Select>

            <Button className="float-right" type="primary" onClick={handleChangeOrderStatusDirtyRead}>Submit</Button>
        </Card>}
      </Row>
      <Card
        title="Order Information"
        style={{
          minHeight: 1000,
          margin: '0px 16px'
        }}
        >
        <Row className="mb-3 space-x-2">
          <Button type="primary">Refresh</Button>
        </Row>
        <Table columns={columns}/>
      </Card>
    </>
  )
}
