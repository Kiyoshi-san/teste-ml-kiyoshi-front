import { store } from "redux/store";
import { Provider } from "react-redux";

type RendererWrapperProps = {
  children: React.ReactNode;
};

const RendererWrapper: React.FC<RendererWrapperProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default RendererWrapper;
