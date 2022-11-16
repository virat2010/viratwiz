import '../styles/globals.css'
import NextNProgress from "nextjs-progressbar";
import Navbar from '../components/navbar';
function MyApp({ Component, pageProps }) {
  return <><NextNProgress/><Navbar/><Component {...pageProps}/></>
}

export default MyApp
