import { createContext, useState } from "react";
import { UserInformation } from "./types";

interface AppProviderProps {
  children: React.ReactNode;
}

interface AppContextType {
  firstName: string;
  setFirstName: React.Dispatch<React.SetStateAction<string>>;
  lastName: string;
  setLastName: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  phoneNumber: string[];
  setPhoneNumber: React.Dispatch<React.SetStateAction<string[]>>;
  firstNameError: boolean;
  setFirstNameError: React.Dispatch<React.SetStateAction<boolean>>;
  lastNameError: boolean;
  setLastNameError: React.Dispatch<React.SetStateAction<boolean>>;
  emailError: boolean;
  setEmailError: React.Dispatch<React.SetStateAction<boolean>>;
  cityError: boolean;
  setCityError: React.Dispatch<React.SetStateAction<boolean>>;
  phoneError: boolean;
  setPhoneError: React.Dispatch<React.SetStateAction<boolean>>;
  userInfo: UserInformation;
  setUserData: (array: string[]) => void;
}

export const AppContext = createContext<AppContextType>({} as AppContextType);

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const userInformation: UserInformation = {
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    city: "",
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(["", "", "", ""]);
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [cityError, setCityError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [userInfo, setUserInfo] = useState(userInformation);

  const setUserData = (array: string[]) => {
    setUserInfo({
      email: array[2],
      firstName: array[0],
      lastName: array[1],
      phone: array[4],
      city: array[3],
    });
    setFirstName("");
    setLastName("");
    setEmail("");
    setCity("");
    setPhoneNumber(["", "", "", ""]);
  };

  return (
    <AppContext.Provider
      value={{
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
        userInfo,
        setUserData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
