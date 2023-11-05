import { Component } from "react";

const props = {
  id: "",
  placeholder: "",
};

export class ClassPhoneInputs extends Component<typeof props> {
  render() {
    const { id, placeholder } = this.props;
    return placeholder !== "phone-input-4" ? (
      <>
        <input type="text" id={id} placeholder={placeholder} />-
      </>
    ) : (
      <input type="text" id={id} placeholder={placeholder} />
    );
  }
}
