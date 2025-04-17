import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Stoxii",
  description:
    "Empowering you with expert strategies to achieve your financial goals with confidence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`font-primary antialiased`}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
