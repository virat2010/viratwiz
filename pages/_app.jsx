import '../styles/globals.css';
import { ThemeProvider } from "next-themes";
import NavBar from '../components/navbar';
import Router from 'next/router'
import NProgress from 'nprogress'
import NextNProgress from 'nextjs-progressbar';

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())
NProgress.configure({ showSpinner: false })

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <NextNProgress color="#29D" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />
      <NavBar />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
