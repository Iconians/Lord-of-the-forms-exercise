import React, { Component } from "react";
import { ErrorMessage } from "../ErrorMessage";
import { ClassTextInput } from "./ClassTextInput";
import { inputProperties } from "../utils/inputProperties";
import { allCities } from "../utils/all-cities";
import {
  isEmailValid,
  onlyNumberValidation,
  onlyTextValidation,
} from "../utils/validations";

const phoneNumberErrorMessage = "Invalid Phone Number";
export type phoneinputState = [string, string, string, string];
type props = {
  updateUserInfo: (array: string[]) => void;
};

export class ClassForm extends Component<props> {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    phoneNumber: ["", "", "", ""] as phoneinputState,
    firstNameError: false,
    lastNameError: false,
    emailError: false,
    cityError: false,
    phoneError: false,
  };

  ref0 = React.createRef<HTMLInputElement>();
  ref1 = React.createRef<HTMLInputElement>();
  ref2 = React.createRef<HTMLInputElement>();
  ref3 = React.createRef<HTMLInputElement>();

  render() {
    const {
      firstName,
      lastName,
      email,
      city,
      phoneNumber,
      firstNameError,
      lastNameError,
      emailError,
      cityError,
      phoneError,
    } = this.state;
    const refs = [this.ref0, this.ref1, this.ref2, this.ref3];

    const updatePhoneNumber =
      (index: 0 | 1 | 2 | 3) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        const maxLength = [2, 2, 2, 1];
        const currentMaxLength = maxLength[index];
        const nextRef = refs[index + 1];
        const prevRef = refs[index - 1];

        const shouldGoToNextRef =
          currentMaxLength === value.length && nextRef?.current;
        const shouldGoToPrevRef = value.length === 0;

        const newState = phoneNumber.map((number, i) =>
          i === index ? value : number
        );

        if (shouldGoToNextRef) {
          nextRef.current?.focus();
        }
        if (shouldGoToPrevRef && refs[index] !== refs[0]) {
          prevRef.current?.focus();
        }
        if (value.length <= currentMaxLength) {
          this.setState({ phoneNumber: newState });
        }
      };

    const inputvalue = (index: number) => {
      if (index === 0) {
        return firstName;
      }
      if (index === 1) {
        return lastName;
      }
      if (index === 2) {
        return email;
      } else {
        return city;
      }
    };

    const inputErrorsbooleans = (index: number) => {
      if (index === 0) {
        return firstNameError;
      }
      if (index === 1) {
        return lastNameError;
      }
      if (index === 2) {
        return emailError;
      } else {
        return cityError;
      }
    };

    const updatetextInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { id, value } = e.target;
      if (id === "firstName") {
        this.setState({ firstName: value });
      }
      if (id === "lastName") {
        this.setState({ lastName: value });
      }
      if (id === "email") {
        this.setState({ email: value });
      }
      if (id === "city") {
        this.setState({ city: value });
      }
    };

    const checkForErrors = (array: string[]) => {
      const validations = {
        firstName: (firstName: string) => {
          const textOnly = onlyTextValidation(firstName);
          if (firstNameError) this.setState({ firstNameError: false });
          if (firstName.length >= 2 && !textOnly) {
            this.setState({ firstNameError: true });
            return true;
          }
          return false;
        },

        lastName: (lastName: string) => {
          const textOnly = onlyTextValidation(lastName);
          if (lastNameError) this.setState({ lastNameError: false });
          if (lastName.length >= 2 && !textOnly) {
            this.setState({ lastNameError: true });
            return true;
          }
          return false;
        },

        email: (email: string) => {
          const checkEmail = isEmailValid(email);
          if (emailError) this.setState({ emailError: false });
          if (!checkEmail) {
            this.setState({ emailError: true });
            return true;
          }
          return false;
        },

        city: (city: string) => {
          const capitalizeCity = city.charAt(0).toUpperCase() + city.slice(1);
          const checkCity = allCities.includes(capitalizeCity);
          if (cityError) this.setState({ cityError: false });
          if (!checkCity) {
            this.setState({ cityError: true });
            return true;
          }
          return false;
        },

        phoneNumber: (phoneNumber: string) => {
          const checkPhone = onlyNumberValidation(phoneNumber);
          if (phoneError) this.setState({ phoneError: false });
          if (!checkPhone) {
            this.setState({ phoneError: true });
            return true;
          }
          return false;
        },
      };

      validations.firstName(array[0]);
      validations.lastName(array[1]);
      validations.email(array[2]);
      validations.city(array[3]);
      validations.phoneNumber(array[4]);

      if (
        firstNameError ||
        lastNameError ||
        emailError ||
        cityError ||
        phoneError
      ) {
        return true;
      }
      return false;
    };

    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const { firstName, lastName, email, city, phoneNumber } = this.state;
      const array = [firstName, lastName, email, city, phoneNumber.join("")];
      console.log(checkForErrors(array));
      if (checkForErrors(array) === true) {
        this.props.updateUserInfo(array);
      }
    };

    return (
      <form onSubmit={submitForm}>
        <u>
          <h3>User Information Form</h3>
        </u>

        {inputProperties.map((input, index) => (
          <ClassTextInput
            label={input.label}
            value={inputvalue(index)}
            placeholder={input.placeholder}
            errorMsg={input.errorMsg}
            id={input.id}
            onchange={updatetextInputs}
            show={inputErrorsbooleans(index)}
          />
        ))}

        <div className="input-wrap">
          <label htmlFor="phone">Phone:</label>
          <div id="phone-input-wrap">
            <input
              type="text"
              id="phone-input-1"
              placeholder="55"
              ref={this.ref0}
              value={phoneNumber[0]}
              onChange={updatePhoneNumber(0)}
            />
            -
            <input
              type="text"
              id="phone-input-2"
              placeholder="55"
              ref={this.ref1}
              value={phoneNumber[1]}
              onChange={updatePhoneNumber(1)}
            />
            -
            <input
              type="text"
              id="phone-input-3"
              placeholder="55"
              ref={this.ref2}
              value={phoneNumber[2]}
              onChange={updatePhoneNumber(2)}
            />
            -
            <input
              type="text"
              id="phone-input-4"
              placeholder="5"
              ref={this.ref3}
              value={phoneNumber[3]}
              onChange={updatePhoneNumber(3)}
            />
          </div>
        </div>

        <ErrorMessage message={phoneNumberErrorMessage} show={phoneError} />
        {/* fix submit btn, needs the .preventDefualt and function for validations and to display info */}
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
