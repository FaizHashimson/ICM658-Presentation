import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SiteTarik | ICM658 Presentation",
  description: "ICM658 digital content management prototype presentation.",
  icons: {
    icon: "/icon.png?v=20260720",
    shortcut: "/icon.png?v=20260720",
    apple: "/icon.png?v=20260720",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
