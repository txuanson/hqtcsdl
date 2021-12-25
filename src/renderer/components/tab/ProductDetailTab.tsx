import { Card, message } from "antd";
import { ipcRenderer } from "electron";
import { useEffect, useState } from "react";

export default function ProductDetailTab() {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState(0);

  useEffect(() => {
    ipcRenderer.invoke('guestGetProductByName', 'Tivi').then(res => {
      console.log(res);
      if(res.length !== 0){
        setProductName(res[0]["TENSP"])
        setPrice(res[0]["DONGIA"]);
      }else {
        message.error("Not Found")
      }
    })
  })


  return (
    <Card
      title={productName}
      style={{
        margin: '24px 16px',
        minHeight: 280,
      }}
      >
    <div className="text-lg">Price: <span className="font-bold">{price}</span></div>
    </Card>
  )
}
