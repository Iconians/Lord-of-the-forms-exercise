import { ErrorMessage } from "../ErrorMessage";

type props = {
  label: string;
  value: string;
  placeholder: string;
  errorMsg: string;
  onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
  show: boolean;
};

export const FunctionalTextInput = (props: props) => {
  const { label, placeholder, errorMsg, value, show, onchange, id } = props;
  return label === "City" ? (
    <>
      <div className={"input-wrap"}>
        <label>{label}:</label>
        <input
          placeholder={placeholder}
          value={value}
          list="cities"
          onChange={onchange}
          id={id}
        />
      </div>
      <ErrorMessage message={errorMsg} show={show} />
    </>
  ) : (
    <>
      <div className={"input-wrap"}>
        <label htmlFor={id}>{label}:</label>
        <input
          placeholder={placeholder}
          value={value}
          onChange={onchange}
          id={id}
        />
      </div>
      <ErrorMessage message={errorMsg} show={show} />
    </>
  );
};
