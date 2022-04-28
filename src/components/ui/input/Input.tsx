type InputModel = {
  type?: string;
  isValid?: boolean;
  erroMessage?: string;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

const Input: React.ForwardRefRenderFunction<HTMLInputElement, InputModel> = ({
  type = "text",
  isValid = true,
  erroMessage = "",
  placeholder,
  onChange,
  ...rest
}) => {
  return (
    <div className="input-container">
      <input
        {...rest}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
      {!isValid && erroMessage}
    </div>
  );
};

export default Input;
