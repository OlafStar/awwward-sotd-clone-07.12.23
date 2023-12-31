import type { Metadata } from "next";
import "~/styles/globals.css";

import localFont from "@next/font/local";

const aeonik = localFont({
  src: [
    {
      path: "../../public/fonts/AeonikTRIAL-Light.otf",
      weight: "300",
    },
    {
      path: "../../public/fonts/AeonikTRIAL-Regular.otf",
      weight: "400",
    },
    {
      path: "../../public/fonts/AeonikTRIAL-Bold.otf",
      weight: "700",
    },
  ],
  variable: "--font-aeonik",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${aeonik.variable} font-aeonik `}>{children}</body>
    </html>
  );
}
