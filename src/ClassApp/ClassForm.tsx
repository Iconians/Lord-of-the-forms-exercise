import React, { Component } from "react";
import { ErrorMessage } from "../ErrorMessage";
import { ClassTextInput } from "./ClassTextInput";
import { inputProperties } from "../utils/inputProperties";
import { phoneInputsProperties } from "../utils/inputProperties";

const phoneNumberErrorMessage = "Invalid Phone Number";
export type phoneinputState = [string, string, string, string];

export class ClassForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    phoneNumber: ["", "", "", ""] as phoneinputState,
  };

  // ref0 = React.createRef<HTMLInputElement>();
  // ref1 = React.createRef<HTMLInputElement>();
  // ref2 = React.createRef<HTMLInputElement>();
  // ref3 = React.createRef<HTMLInputElement>();

  render() {
    // const {firstName, lastName, email, city, phoneNumber} = this.state

    const updatePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, id } = e.target;
      const maxLength = [2, 2, 2, 1];
      const current = maxLength[0];
      console.log(value);
      if (value.length <= current) {
        this.setState({ phoneNumber: value });
      } else {
        maxLength[+1];
      }
    };
    return (
      <form>
        <u>
          <h3>User Information Form</h3>
        </u>

        {inputProperties.map((input) => (
          <ClassTextInput
            label={input.label}
            value={""}
            placeholder={input.placeholder}
            errorMsg={input.errorMsg}
            // onchange={}
            show={true}
          />
        ))}

        <div className="input-wrap">
          <label htmlFor="phone">Phone:</label>
          <div id="phone-input-wrap">
            {phoneInputsProperties.map((input) =>
              input.id !== "phone-input-4" ? (
                <>
                  <input
                    type="text"
                    key={input.id}
                    id={input.id}
                    placeholder={input.placeHolder}
                    value={this.state.phoneNumber}
                    onChange={updatePhoneNumber}
                    // ref={input.ref}
                  />
                  -
                </>
              ) : (
                <input
                  type="text"
                  id={input.id}
                  placeholder={input.placeHolder}
                  // ref={input.ref}
                />
              )
            )}
          </div>
        </div>

        <ErrorMessage message={phoneNumberErrorMessage} show={true} />
        {/* fix submit btn, needs the .preventDefualt and function for validations and to display info */}
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
