import '../styles/globals.css';
import {ThemeProvider} from "next-themes";
import NextNProgress from "nextjs-progressbar";
import Navbar from '../components/navbar';
function MyApp({ Component, pageProps }) {
  return (
  <span>
    <NextNProgress color="rgb(56 189 248)"/>
    <ThemeProvider>
      <Navbar/>
      <Component {...pageProps} />
    </ThemeProvider>
  </span>)
}

export default MyApp
