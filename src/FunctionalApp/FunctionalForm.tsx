import React, { useRef } from "react";
import { ErrorMessage } from "../ErrorMessage";
import { inputProperties } from "../utils/inputProperties";
import { FunctionalTextInput } from "./FunctionalTextInput";
import {
  isEmailValid,
  onlyNumberValidation,
  onlyTextValidation,
} from "../utils/validations";
import { allCities } from "../utils/all-cities";
import { useAppContext } from "../useAppContext";
import { capitalize } from "../utils/transformations";

const phoneNumberErrorMessage = "Invalid Phone Number";

export const FunctionalForm = () => {
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    city,
    setCity,
    phoneNumber,
    setPhoneNumber,
    firstNameError,
    setFirstNameError,
    lastNameError,
    setLastNameError,
    emailError,
    setEmailError,
    cityError,
    setCityError,
    phoneError,
    setPhoneError,
    setUserData,
  } = useAppContext();

  const ref0 = useRef<HTMLInputElement>(null);
  const ref1 = useRef<HTMLInputElement>(null);
  const ref2 = useRef<HTMLInputElement>(null);
  const ref3 = useRef<HTMLInputElement>(null);

  const refs = [ref0, ref1, ref2, ref3];

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
        setPhoneNumber(newState);
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
      setFirstName(value);
    }
    if (id === "lastName") {
      setLastName(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "city") {
      setCity(value);
    }
  };

  const checkForErrors = (array: string[]) => {
    const validations = {
      firstName: (firstName: string) => {
        const textOnly = onlyTextValidation(firstName);
        if (firstNameError) setFirstNameError(false);
        if (firstName.length >= 2 && !textOnly) {
          setFirstNameError(true);
          return true;
        }
        return false;
      },

      lastName: (lastName: string) => {
        const textOnly = onlyTextValidation(lastName);
        console.log(capitalize(lastName));
        if (lastNameError) setLastNameError(false);
        if (lastName.length >= 2 && !textOnly) {
          setLastNameError(true);
          return true;
        }
        return false;
      },

      email: (email: string) => {
        const checkEmail = isEmailValid(email);
        if (emailError) setEmailError(false);
        if (!checkEmail) {
          setEmailError(true);
          return true;
        }
        return false;
      },

      city: (city: string) => {
        const capitalizeCity = city.charAt(0).toUpperCase() + city.slice(1);
        const checkCity = allCities.includes(capitalizeCity);
        if (cityError) setCityError(false);
        if (!checkCity) {
          setCityError(true);
          return true;
        }
        return false;
      },

      phoneNumber: (phoneNumber: string) => {
        const checkPhone = onlyNumberValidation(phoneNumber);
        if (phoneError) setPhoneError(false);
        if (!checkPhone) {
          setPhoneError(true);
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
      return false;
    }
    return true;
  };

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const array = [firstName, lastName, email, city, phoneNumber.join("")];
    if (checkForErrors(array) === true) {
      setUserData(array);
    }
  };

  return (
    <form onSubmit={submitForm}>
      <u>
        <h3>User Information Form</h3>
      </u>

      {inputProperties.map((input, index) => (
        <FunctionalTextInput
          key={input.id}
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
            ref={ref0}
            value={phoneNumber[0]}
            onChange={updatePhoneNumber(0)}
          />
          -
          <input
            type="text"
            id="phone-input-2"
            placeholder="55"
            ref={ref1}
            value={phoneNumber[1]}
            onChange={updatePhoneNumber(1)}
          />
          -
          <input
            type="text"
            id="phone-input-3"
            placeholder="55"
            ref={ref2}
            value={phoneNumber[2]}
            onChange={updatePhoneNumber(2)}
          />
          -
          <input
            type="text"
            id="phone-input-4"
            placeholder="5"
            ref={ref3}
            value={phoneNumber[3]}
            onChange={updatePhoneNumber(3)}
          />
        </div>
      </div>

      <ErrorMessage message={phoneNumberErrorMessage} show={phoneError} />

      <input type="submit" value="Submit" />
    </form>
  );
};
