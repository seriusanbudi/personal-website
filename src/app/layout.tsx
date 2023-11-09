import Background from "components/Background";
import Cursor from "components/Cursor";
import "styles/globals.css";
import type { Metadata } from "next";
import LogRocket from "components/LogRocket";

export const metadata: Metadata = {
  title: "Budiharta",
  description:
    "Passionate and creative frontend developer based in Bali, Indonesia, specializing in Next.js, Tailwind CSS, and Framer Motion. Delivering exceptional websites with seamless animations and responsive design.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-black text-white">
        {children}

        <Cursor />
        <Background />

        <LogRocket />
      </body>
    </html>
  );
}
