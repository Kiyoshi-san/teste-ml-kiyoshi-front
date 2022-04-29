type InputModel = {
  type?: string;
  name?: string;
  isValid?: boolean;
  erroMessage?: string;
  placeholder?: string;
  autoComplete?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
};

const Input: React.ForwardRefRenderFunction<HTMLInputElement, InputModel> = ({
  type = "text",
  name,
  isValid = true,
  erroMessage = "",
  placeholder,
  autoComplete = "off",
  onChange,
  onFocus,
  ...rest
}) => {
  return (
    <div className="input-container">
      <input
        {...rest}
        type={type}
        name={name}
        placeholder={placeholder}
        autoComplete={autoComplete}
        onChange={onChange}
        onFocus={onFocus}
      />
      {!isValid && erroMessage}
    </div>
  );
};

export default Input;
