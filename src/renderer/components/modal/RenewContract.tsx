import { DatePicker, message, Modal } from "antd";
import { ipcRenderer as ipc } from "electron";
import moment from "moment";
import { useState } from "react";

export default function RenewContract({ id } : {id: number}){
  const [visible, setVisible] = useState(false);
  const [date, setDate] = useState<moment.Moment | null>(moment());

  const handleRequestRenew = () => {
    console.log(id, date);
    ipc.invoke('partnerRequestRenewContract', id, date?.toDate())
    .then(() => {
      message.success("Success!");
    })
    .catch((error) => {
      message.error(error.message);
    });
  }

  return (
    <>
      <a onClick={() => setVisible(true)}>Request Renew</a>
      <Modal
        title="Renew Contract"
        centered
        visible={visible}
        onOk={handleRequestRenew}
        onCancel={() => setVisible(false)}
        okText="Send"
        width={500}
      >
        <DatePicker value={date} onChange={(date, _dateString) => setDate(date)}/>
      </Modal>
    </>
  )
}
