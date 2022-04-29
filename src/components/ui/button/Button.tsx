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
    <div className="button-container" onClick={onClick}>
      <button {...rest} type={type}>
        {text ? text : icon}
      </button>
    </div>
  );
};

export default Button;
