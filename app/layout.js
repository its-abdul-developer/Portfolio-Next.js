import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import CustomCursor from "./components/CustomCursor";

// Outfit font (multiple weights optional, yahan default 400 use kar rahe hain)
const outFit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Ovo font (available weight 400)
const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Portfolio - William Mark",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth ">
      <body
        className={`${outFit.className} ${ovo.className}  antialiased leading-8 overflow-x-hidden dark:bg-darkBg dark:text-white cursor-none`}
      >
        <CustomCursor/>
        {children}
      </body>
    </html>
  );
}
