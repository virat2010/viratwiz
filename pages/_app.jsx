import '../styles/globals.css';
import { ThemeProvider } from "next-themes";
import NavBar from '../components/navbar';
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <NavBar />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
