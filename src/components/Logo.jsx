/* Logo (ensure .logo-font & .logo-gradient are in app/globals.css) */
import Link from "next/link";
import localFont from "next/font/local";

const MozillaHeadlineFonts = localFont({
  src: "../../public/fonts/MozillaHeadline/MozillaHeadline.ttf",
});
export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      aria-label="Aeon — Home"
    >
      <span
        className={`text-4xl ${MozillaHeadlineFonts.className} tracking-widest uppercase font-semibold `}
      >
        Aeon
      </span>
    </Link>
  );
}
