import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "antd/dist/antd.css";

import Head from "next/head";
import Image from "next/image";
import { Provider } from "react-redux";
// import withReduxSaga from "next-redux-saga";
// import wrapper from "../redux/store";
import store from "../redux/store";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div style={{ position: "absolute", width: "100vw", height: "100%" }}>
        <Image
          src="/background-img.jpg"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
