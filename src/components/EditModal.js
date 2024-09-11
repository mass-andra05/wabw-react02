import { Component } from "react";
import Button from "./Button";
class EditModal extends Component {
  render() {
    const { edit, close, data, change, update } = this.props;
    if (edit) {
      return (
        <div>
          <h3>Edit Task </h3>
          <div>
            <input type="text" value={data.title} onChange={change} />
          </div>
          <div style={modalEdit}>
            <Button text="edit" action={update} />
            <Button text="cancel" action={close} />
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
export default EditModal;
const modalEdit = {
  display: "flex",
};
