import Image from "next/image";
import { useTheme } from "next-themes";
import { Navbar, Dropdown, Avatar } from "flowbite-react";

export default function NavBar() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="Viratwiz">
        <Image
          alt="Flowbite logo"
          height="32"
          src="/favicon.ico"
          width="32"
        />
        <span className="self-center whitespace-nowrap pl-3 text-xl font-semibold dark:text-white">
          Flowbite
        </span>
      </Navbar.Brand>
      <Navbar.Collapse className="justify-center">
        <Navbar.Link href="/">Home</Navbar.Link>
        <Navbar.Link href="/about">About</Navbar.Link>
        <Navbar.Link href="/models">Models</Navbar.Link>
        <Navbar.Link href="/navbars">Pricing</Navbar.Link>
        <Navbar.Link href="/navbars">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>)
}
/**
function Navbar() {
  const { theme, setTheme } = useTheme();
  return (<nav className="px-2 sm:px-4 py-2.5 transition dark:bg-gray-900 bg-white w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
    <div className="container flex flex-wrap justify-between items-center mx-auto">
      <a href="https://viratwiz.com/" className="flex items-center hover:no-underline dark:invert-0 invert transition">
        <Image src="/favicon.ico" width="36" height="36" className="mr-3" alt="" />
        <span className="self-center text-xl font-semibold whitespace-nowrap text-black hover:text-sky-400 dark:text-white">
          Viratwiz
        </span>
      </a>
      <div className="hidden justify-between dark:bg-gray-900 bg-white items-center w-full md:flex md:w-auto md:order-1 m-auto" id="navbar-sticky">
        <ul className="flex flex-col p-4 mt-4 bg-inherit rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <NavElement Text="Home" href="/" props="aria-current" />
          <NavElement Text="About" href="/about" />
          <button onClick={() => setTheme(
            theme === "dark"
              ? "light"
              : "dark")} className="dark:text-white text-black">
            toggle
          </button>
        </ul>
      </div>
    </div>
  </nav>);
}

function NavElement({
  Text,
  href,
  ...props
}) {
  return (<li className={props + "py-2 pr-4 pl-4 rounded md:bg-transparent md:text-white md:p-0"
  }>
    <Link href={href} className="hover:no-underline">
      <p className="hover:text-sky-400 dark:text-white text-black">{Text}</p>
    </Link>
  </li>);
}

export default Navbar;
*/