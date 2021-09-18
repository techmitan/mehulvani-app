import "../styles/globals.css";
import Layout from "../components/layout";
import Router from "next/router";
import nProgress from "nprogress";
import "../styles/globals.css";
import "../styles/nprogress.css";

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
