import "../styles/globals.css";

import { Layout } from "../components/";

import { DataContextProvider } from "../context/DataContext";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

function MyApp({ Component, pageProps }) {
  const handle = useFullScreenHandle();

  return (
    <DataContextProvider>
      <FullScreen handle={handle.enter}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </FullScreen>
    </DataContextProvider>
  );
}

export default MyApp;
