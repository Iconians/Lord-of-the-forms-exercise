import { Component } from "react";
import { ClassForm } from "./ClassForm";
import { UserInformation } from "../types";
import { ProfileInformation } from "../ProfileInformation";
// type State = { userInformation: UserInformation | null };

// const defaultUser: UserInformation = {
//   email: "default@default.com",
//   firstName: "Default",
//   lastName: "Default",
//   phone: "1234567",
//   city: "Hobbiton",
// };

export class ClassApp extends Component<Record<string, never>> {
  state: UserInformation = {
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    city: "",
  };

  updateUserInfo = (array: string[]) => {
    this.setState({
      firstName: array[0],
      lastName: array[1],
      email: array[2],
      city: array[3],
      phone: array[4],
    });
  };

  render() {
    const userDataInformation = {
      email: this.state.email,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phone: this.state.phone,
      city: this.state.city,
    };

    return (
      <>
        <h2>Class</h2>
        <ProfileInformation
          userData={
            // toggle the following lines to change
            // null
            // defaultUser
            userDataInformation.firstName ? userDataInformation : null
          }
        />
        <ClassForm updateUserInfo={this.updateUserInfo} />
      </>
    );
  }
}
