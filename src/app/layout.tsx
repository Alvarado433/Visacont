import type { Metadata } from "next";

import "./globals.css";
import "./../../public/css/navbar.css";
import "./../../public/css/quemsomos.css";
import "./../../public/css/projeto.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Importa o CSS do slick-carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
export const metadata: Metadata = {
  title: "Visacont",
  description: "criado e desenvolvido por alvaradotech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        {children}
        <ToastContainer position="top-right" autoClose={4000} />
      </body>
    </html>
  );
}
