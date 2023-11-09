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
  userInformation: UserInformation;
  setUserData: (array: string[]) => void;
}

export const AppContext = createContext<AppContextType>({} as AppContextType);

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
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
  const [done, setDone] = useState(false);

  let userInformation: UserInformation = {
    email: "default@default.com",
    firstName: "Default",
    lastName: "Default",
    phone: "1234567",
    city: "Hobbiton",
  };

  const setUserData = (array: string[]) => {
    setDone(false);
    userInformation = {
      email: array[2],
      firstName: array[0],
      lastName: array[1],
      phone: array[3],
      city: array[4],
    };
    setDone(true);
    console.log(userInformation);
    console.log(done);
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
        userInformation,
        setUserData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
