export function isEmailValid(emailAddress: string) {
  // eslint-disable-next-line no-useless-escape
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return !!emailAddress.match(regex);
}

export const onlyTextValidation = (value: string) => {
  if (value) {
    if (/^[a-zA-Z ]*$/i.test(value)) {
      // return "";
      return true;
    } else {
      return false;
    }
  } else {
    return undefined;
  }
};

export const onlyNumberValidation = (value: string) => {
  if (value) {
    if (/^[0-9]*$/.test(value)) {
      return true;
    } else {
      false;
    }
  } else {
    return undefined;
  }
};
