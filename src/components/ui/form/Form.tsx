type FormProps = {
  children: React.ReactNode;
  className: string;
  onSubmit: (e: any) => void;
};

const Form: React.FC<FormProps> = ({ children, className, onSubmit }) => {
  return (
    <form className={className} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default Form;
