import { ProfileInformation } from "../ProfileInformation";
import { FunctionalForm } from "./FunctionalForm";
import { useAppContext } from "../useAppContext";

export const FunctionalApp = () => {
  const { userInfo } = useAppContext();
  return (
    <>
      <h2>Functional</h2>
      <ProfileInformation
        userData={userInfo.firstName.length ? userInfo : null}
      />
      <FunctionalForm />
    </>
  );
};
