import { Card, Table } from "antd"

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    render: (text: number) => <a>{text}</a>,
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
]
export default function OrderTab(){
  return (
    <Card
      title="Orders"
      style={{
        margin: '24px 16px',
        minHeight: 280,
      }}
      >
      <Table columns={columns}/>
    </Card>
  )
}
