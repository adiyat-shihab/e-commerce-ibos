import "./globals.css";
import { Barlow } from "next/font/google";
import { ProductProvider } from "@/context/ProductsContext";
import { CartProvider } from "@/context/CartContext";
import { AuthProvider } from "@/context/AuthContext";
import Context from "@/context/context";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*  ${geistSans.variable} ${geistMono.variable} font remove */}
      <body className={` ${barlow.className} antialiased`}>
        <Context>{children}</Context>
      </body>
    </html>
  );
}
