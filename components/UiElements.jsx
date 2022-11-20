export default function Logo() {
  return (
  <a href="https://viratwiz.com">
    <span className="font-quicksand font-extrabold transition-colors">
      <span className="text-orange-400 font-extrabold text-100 dark:text-amber-500">
        V
      </span>
      <span className="text-black dark:text-white text-60">irat</span>
      <span className="text-white bg-black pl-1.5 pr-2 text-50 dark:text-black dark:bg-white">
        WIZ
      </span>
    </span>
  </a>);
}
export function Btn({
  color = 'sky', bordr = 'gray',
  padding = 2, border = 1,
  rounded = 5, color1 = 'stale',
  children, ...props }) {
  let className =
    "border-" + border + 
    " rounded-" + rounded + " border-"
    + bordr + "-800 dark:border-"
    + bordr + "-200 transition-colors hover:bg-"
    + color + "-300 active:bg-" + color
    + "-500 hover:text-white p-2"
  console.log(className)
  function handleClick() {
    console.log(self)
  }
  return (
    <button className={className} onClick={handleClick} {...props}>
      {children}
    </button>
  );
}