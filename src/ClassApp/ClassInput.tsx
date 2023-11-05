import { Component } from "react";
import { ErrorMessage } from "../ErrorMessage";

const props = {
  label: "",
  value: "",
  placeholder: "",
  errorMsg: "",
  id: "",
  show: true,
};

export class ClassInput extends Component<typeof props> {
  render() {
    const { label, placeholder, errorMsg, value, show } = this.props;
    return (
      <>
        <div className={"input-wrap"}>
          <label>{label}:</label>
          <input placeholder={placeholder} value={value} />
        </div>
        <ErrorMessage message={errorMsg} show={show} />
      </>
    );
  }
}
