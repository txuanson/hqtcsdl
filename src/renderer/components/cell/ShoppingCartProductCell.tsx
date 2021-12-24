import { InputNumber, Row } from "antd";

export default function ShoppingCartProductCell() {
  return (
    <Row className="py-2">
      <div className="w-1/6">
        <img src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"></img>
      </div>
      <div className="w-5/6 px-2">
        <div className="text-xl font-semibold mb-2">Product Name</div>
        <div className="font-semibold mb-2 text-red-600">23.000</div>
        <InputNumber value={1}/>
      </div>
    </Row>
  )
}
