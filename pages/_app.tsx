import { appWithTranslation } from "next-i18next";
import { ThemeProvider } from "next-themes";
import "../styles/styles.scss";
import Head  from 'next/head';

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider>
    <Head>
      <title>Marc POLLET - Portfolio</title>
    </Head>
    <Component {...pageProps} />
  </ThemeProvider>
);

export default appWithTranslation(MyApp);
