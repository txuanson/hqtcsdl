import { Card, message, Table } from "antd"
import { ipcRenderer as ipc } from "electron";
import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { UserState } from "renderer/redux/reducer/userSlice";
import moment from "moment";
import "moment-timezone";

const statusMap = [
  "In Transit",
  "Delivered",
  "Preparing",
]

const columns = [
  {
    title: 'ID',
    dataIndex: 'MADH',
    key: 'id',
    render: (text: number) => <Link to={`/dashboard/order/${text}`}>{text}</Link>,
  },
  {
    title: 'Date Of Issue',
    dataIndex: 'NGAYXUATDON',
    key: 'dateOfIssue',
    render: (date: Date) => moment(date).tz("Asia/Ho_Chi_Minh").format('DD/MM/YYYY hh:mm:ss')
  },
  {
    title: 'Deli Date',
    dataIndex: 'NGAYGIAO',
    key: 'deliDate',
    render: (date: Date) => moment(date).tz("Asia/Ho_Chi_Minh").format('DD/MM/YYYY hh:mm:ss')
  },
  {
    title: 'Address',
    dataIndex: 'DIACHIGIAO',
    key: 'address',
  },
  {
    title: 'Status',
    dataIndex: 'TINHTRANG',
    key: 'status',
    render: (key: number) => statusMap[key] ?? "Wrong value"
  },
]

export default function OrderTab(){
  const [data, setData] = useState([]);

  const user = useSelector((state: {user: UserState}) => state.user);

  useEffect(() => {
    ipc.invoke(user.role === 4 ? 'getDriverOrder' : (user.role === 2 ? 'getPartnerOrder' : 'getGuestOrder'), user.user).then(res => {
      setData(res);
    }).catch(error => {
      message.error(error);
    })
  },[])

  return (
    <Card
      title="Orders"
      style={{
        margin: '24px 16px',
        minHeight: 280,
      }}
      >
      <Table columns={columns} dataSource={data}/>
    </Card>
  )
}
