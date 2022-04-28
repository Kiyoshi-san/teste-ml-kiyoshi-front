type InputModel = {
  type?: string;
  isValid?: boolean;
  erroMessage?: string;
  placeholder?: string;
};

const Input: React.ForwardRefRenderFunction<HTMLInputElement, InputModel> = ({
  type = "text",
  isValid = true,
  erroMessage = "",
  placeholder,
  ...rest
}) => {
  return (
    <div className="input-container">
      <input {...rest} type={type} placeholder={placeholder} />
      {!isValid && erroMessage}
    </div>
  );
};

export default Input;
