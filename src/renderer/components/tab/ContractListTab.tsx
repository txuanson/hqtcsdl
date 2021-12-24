import { Button, Card, Row, Table } from "antd";

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    render: (text: number) => <a>{text}</a>,
  },
  {
    title: 'Branches Count',
    dataIndex: 'branchCount',
    key: 'branchCount',
  },
  {
    title: 'Commission Rate',
    dataIndex: 'rate',
    key: 'rate',
  },
  {
    title: 'Representative',
    dataIndex: 'representative',
    key: 'representative',
  },
  {
    title: 'Created At',
    dataIndex: 'createdAt',
    key: 'createdAt',
  },
  {
    title: 'Valid Until',
    dataIndex: 'validUntil',
    key: 'validUntil',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Action',
    key: 'action',
    render: () => (<a>Refresh Contract</a>)
  },
]
export default function ContractListTab(){
  return (
    <Card
      title="Contracts"
      style={{
        margin: '24px 16px',
        minHeight: 280,
      }}
      >
        <Row>
          <Button type="primary">Refresh</Button>
        </Row>
      <Table columns={columns}/>
    </Card>
  )
}
