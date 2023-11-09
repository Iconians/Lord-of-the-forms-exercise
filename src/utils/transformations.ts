export const capitalize = (value: string) => {
  // todo: build this function
  const lowerCase = value.toLowerCase();
  return lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
};

export const formatPhoneNumber = (phone: string) => {
  // todo: build this function
  if (phone.length) {
    return `${phone.slice(0, 2)}-${phone.slice(2, 4)}-${phone.slice(
      4,
      6
    )}-${phone.slice(6, 8)}`;
  }
  return "";
  // `formatPhoneNumber("1234567")` should be `"12-34-56-7"`
};
