import { Component } from "react";
import { ErrorMessage } from "../ErrorMessage";

type props = {
  label: string;
  value: string;
  placeholder: string;
  errorMsg: string;
  onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
  show: boolean;
};

export class ClassTextInput extends Component<props> {
  render() {
    const { label, placeholder, errorMsg, value, show, onchange, id } =
      this.props;
    return (
      <>
        <div className={"input-wrap"}>
          <label>{label}:</label>
          <input
            placeholder={placeholder}
            value={value}
            onChange={onchange}
            id={id}
          />
        </div>
        <ErrorMessage message={errorMsg} show={show} />
      </>
    );
  }
}
