export default function Logo() {
  return (<a href="https://viratwiz.com">
    <span className="font-quicksand font-extrabold">
      <span className="text-orange-400 font-extrabold text-100 dark:text-amber-500">
        V
      </span>
      <span className="text-black dark:text-white text-60">irat</span>
      <span className="text-white bg-black pl-1.5 pr-2 text-sm dark:text-black dark:bg-white">
        WIZ
      </span>
    </span>
  </a>);
}
export function Button(color = "sky", padding = 2, border = 1, rounded = 5, borderColor = "gray", color1 = "stale") {
  const Color = color;
  const Color1 = color1;
  return (<span className="border-{border} p-{padding}
         rounded-{rounded} border-{borderColor}-800
         dark: border-{borderColor}-200
         transition-colors hover:bg-{Color}-300
         active:bg-{Color}-500 hover:text-white">
    Button
  </span>);
}

export function darkModeToggle() {
  return (
    <div>
    
    </div>
  )
}