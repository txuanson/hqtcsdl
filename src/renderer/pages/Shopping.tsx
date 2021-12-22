import { Layout } from "antd";

const {Header, Content} = Layout;

export default function Shopping() {
  return (
    <Layout style={{minHeight: "100vh"}}>
      <Header>Header</Header>
      <Content>Content</Content>
    </Layout>
  )
}
