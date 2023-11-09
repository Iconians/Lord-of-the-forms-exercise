import { ProfileInformation } from "../ProfileInformation";
import { FunctionalForm } from "./FunctionalForm";
import { useAppContext } from "../useAppContext";

export const FunctionalApp = () => {
  const { userInformation } = useAppContext();
  return (
    <>
      <h2>Functional</h2>
      <ProfileInformation userData={userInformation} />
      <FunctionalForm />
    </>
  );
};
