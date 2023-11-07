import { Component } from "react";
import { ErrorMessage } from "../ErrorMessage";

const props = {
  label: "",
  value: "",
  placeholder: "",
  errorMsg: "",
  onchange: void 0,
  show: true,
};

export class ClassTextInput extends Component<typeof props> {
  render() {
    const { label, placeholder, errorMsg, value, show, onchange } = this.props;
    return (
      <>
        <div className={"input-wrap"}>
          <label>{label}:</label>
          <input placeholder={placeholder} value={value} onChange={onchange} />
        </div>
        <ErrorMessage message={errorMsg} show={show} />
      </>
    );
  }
}
