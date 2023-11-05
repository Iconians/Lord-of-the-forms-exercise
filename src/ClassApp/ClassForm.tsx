import { Component } from "react";
import { ErrorMessage } from "../ErrorMessage";
import { ClassInput } from "./ClassInput";
import { inputProperties } from "../utils/inputProperties";
import { phoneInputsProperties } from "../utils/inputProperties";
import { ClassPhoneInputs } from "./ClassPhoneInputs";

// make ts file to house all error messages
// const firstNameErrorMessage = "First name must be at least 2 characters long";
// const lastNameErrorMessage = "Last name must be at least 2 characters long";
// const emailErrorMessage = "Email is Invalid";
// const cityErrorMessage = "State is Invalid";
const phoneNumberErrorMessage = "Invalid Phone Number";

export class ClassForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    phoneNumber: "",
  };
  render() {
    // const {firstName, lastName, email, city, phoneNumber} = this.state
    return (
      <form>
        <u>
          <h3>User Information Form</h3>
        </u>

        {inputProperties.map((input) => (
          <ClassInput
            label={input.label}
            value={""}
            placeholder={input.placeholder}
            errorMsg={input.errorMsg}
            id={""}
            show={true}
          />
        ))}

        <div className="input-wrap">
          <label htmlFor="phone">Phone:</label>
          <div id="phone-input-wrap">
            {phoneInputsProperties.map((input) => (
              <ClassPhoneInputs id={input.id} placeholder={input.placeHolder} />
            ))}
          </div>
        </div>

        <ErrorMessage message={phoneNumberErrorMessage} show={true} />
        {/* fix submit btn, needs the .preventDefualt and function for validations and to display info */}
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
