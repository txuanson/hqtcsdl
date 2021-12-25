import { Button, Card, message, Space, Table } from "antd";
import { ipcRenderer as ipc } from "electron";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { UserState } from "renderer/redux/reducer/userSlice";
import moment from "moment";
import "moment-timezone";
import RenewContract from "../modal/RenewContract";

const statusMap = ["Unverified", "Verified"]

export default function ContractListTab(){
  const [data, setData] = useState([]);

  const user = useSelector((state: {user: UserState}) => state.user);

  const columns = [
    {
      title: 'ID',
      dataIndex: 'MAHOPDONG',
      key: 'id',
      render: (text: number) => <a>{text}</a>,
    },
    {
      title: 'Branches Count',
      dataIndex: 'SOCHINHANH',
      key: 'branchCount',
    },
    {
      title: 'Commission Rate',
      dataIndex: 'HOAHONG',
      key: 'rate',
    },
    {
      title: 'Valid Until',
      dataIndex: 'THOIGIANHIEULUC',
      key: 'validUntil',
      render: (date: Date) => moment(date).tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY hh:mm:ss")
    },
    {
      title: 'Notification',
      dataIndex: 'THONGBAO',
      key: 'notification',
    },
    {
      title: 'Status',
      dataIndex: 'TINHTRANGHD',
      key: 'status',
      render:(text: number) => statusMap[text]
    },
    {
      title: "Action",
      key: "action",
      render: (_text: any, record: any) => (
        <>
          {user.role === 2 && <RenewContract id={record["MAHOPDONG"]}/>}
        </>
      )
    }
  ]

  const updateExpiredContract = () => {
    ipc.invoke('employeeUpdateContract')
    .then(() => message.success("Success!"))
    .catch(error => message.error(error.message))
  }

  useEffect(() => {
    if(user.role === 1) {
      ipc.invoke('employeeGetListContract').then((res) => {
        setData(res);
      }).catch(error => {
        message.error(error.message);
      });
    } else if(user.role === 2) {
      ipc.invoke('partnerGetListContract', user.user).then((res) => {
        setData(res);
      }).catch(error => {
        message.error(error.message);
      });
    }
  },[])

  return (
    <Card
      title="Contracts"
      style={{
        margin: '24px 16px',
        minHeight: 280,
      }}
      >
        {user.role === 1 && <Space className="mb-3">
          <Button type="primary" onClick={updateExpiredContract}>Update Expired Contract</Button>
        </Space>}
      <Table columns={columns} dataSource={data}/>
    </Card>
  )
}
