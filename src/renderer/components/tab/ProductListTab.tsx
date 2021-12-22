import { Card, Space, Table } from "antd"

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    render: (text: number) => <a>{text}</a>,
  },
  {
    title: 'Product Name',
    dataIndex: 'productName',
    key: 'productName',
  },
  {
    title: 'Price',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Stock',
    dataIndex: 'stock',
    key: 'stock',
  },
  {
    title: 'Action',
    key: 'action',
    render: (_text: string, _record: any) => (
      <Space size="middle">
        <a>Edit</a>
        <a>Delete</a>
      </Space>
    )
  },
]
export default function ProductListTab(){
  return (
    <Card
      title="Products"
      style={{
        margin: '24px 16px',
        minHeight: 280,
      }}
      >
      <Table columns={columns}/>
    </Card>
  )
}
