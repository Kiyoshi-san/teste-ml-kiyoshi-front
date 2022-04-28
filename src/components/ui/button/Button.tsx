type Button = {
  icon?: React.ReactNode;
  text?: string;
  type?: "button" | "submit" | "reset" | undefined;
};

const Button: React.ForwardRefRenderFunction<HTMLButtonElement, Button> = ({
  icon,
  text,
  type = "button",
  ...rest
}) => {
  return (
    <div className="button-container">
      <button {...rest} type={type}>
        {text ? text : icon}
      </button>
    </div>
  );
};

export default Button;
