type Button = {
  icon?: React.ReactNode;
  text?: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
};

const Button: React.ForwardRefRenderFunction<HTMLButtonElement, Button> = ({
  icon,
  text,
  type = "button",
  onClick,
  ...rest
}) => {
  return (
    <div className="button-container">
      <button {...rest} type={type} onClick={onClick}>
        {text ? text : icon}
      </button>
    </div>
  );
};

export default Button;
