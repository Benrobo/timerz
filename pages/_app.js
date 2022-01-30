import "../styles/globals.css";

import { Layout } from "../components/";

import { DataContextProvider } from "../context/DataContext";

function MyApp({ Component, pageProps }) {
  return (
    <DataContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DataContextProvider>
  );
}

export default MyApp;
