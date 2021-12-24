import { Button } from "antd";

export default function ProductDetailTab() {
  return (
    <div className="flex bg-white px-6 py-4 flex">
      <div className="w-1/4">
        <img src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"></img>
      </div>
      <div className="w-3/4 px-2">
        <div className="font-medium text-2xl">Product Name</div>
        <div className="text-red-500">120.000.000</div>
        <Button>Add to card</Button>
      </div>
    </div>
  )
}
