import { Row } from "antd";
import ShoppingProductCell from "../cell/ShoppingProductCell";

export default function ShoppingTab() {
  return (
    <Row gutter={[12,12]}>
      <ShoppingProductCell/>
      <ShoppingProductCell/>
      <ShoppingProductCell/>
      <ShoppingProductCell/>
      <ShoppingProductCell/>
    </Row>
  )
}
