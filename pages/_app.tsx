import { appWithTranslation } from 'next-i18next'
import { ThemeProvider } from 'next-themes'
import '../styles/styles.scss'

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider>
    <Component {...pageProps} />
  </ThemeProvider>
)

export default appWithTranslation(MyApp)