import { ProfileInformation } from "../ProfileInformation";
import { FunctionalForm } from "./FunctionalForm";
import { UserInformation } from "../types";

const defaultUser: UserInformation = {
  email: "default@default.com",
  firstName: "Default",
  lastName: "Default",
  phone: "1234567",
  city: "Hobbiton",
};

export const FunctionalApp = () => {
  return (
    <>
      <h2>Functional</h2>
      <ProfileInformation userData={defaultUser} />
      <FunctionalForm />
    </>
  );
};
