import { useContext } from "react";
import { AppContext } from "./app.Context";

export const useAppContext = () => {
  const context = useContext(AppContext);
  return {
    firstName: context.firstName,
    setFirstName: context.setFirstName,
    lastName: context.lastName,
    setLastName: context.setLastName,
    email: context.email,
    setEmail: context.setEmail,
    city: context.city,
    setCity: context.setCity,
    phoneNumber: context.phoneNumber,
    setPhoneNumber: context.setPhoneNumber,
    firstNameError: context.firstNameError,
    setFirstNameError: context.setFirstNameError,
    lastNameError: context.lastNameError,
    setLastNameError: context.setLastNameError,
    emailError: context.emailError,
    setEmailError: context.setEmailError,
    cityError: context.cityError,
    setCityError: context.setCityError,
    phoneError: context.phoneError,
    setPhoneError: context.setPhoneError,
    userInformation: context.userInformation,
    setUserData: context.setUserData,
  };
};
