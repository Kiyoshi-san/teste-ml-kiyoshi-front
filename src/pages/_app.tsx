import Header from "@components/header/Header";
import "styles/index.scss";
import { Provider } from 'react-redux';
import { store } from "redux/store";
import type { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Header />
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
