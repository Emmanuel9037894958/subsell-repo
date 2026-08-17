import "./globals.css";
import Footer from "../components/Footer";

export const metadata = {
  title: {
    default: "SUBSELL",
    template: "%s | SUBSELL",
  },

  description:
    "A smarter way to connect and grow. Discover SUBSELL and explore opportunities through a professional, secure platform.",

  applicationName: "SUBSELL",

  keywords: [
    "SUBSELL",
    "online platform",
    "digital platform",
    "opportunities",
    "secure platform",
  ],

  authors: [
    {
      name: "SUBSELL",
    },
  ],

  creator: "SUBSELL",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "SUBSELL — A smarter way to connect and grow.",
    description:
      "Discover a professional platform built to help you connect, explore opportunities, and grow with confidence.",
    siteName: "SUBSELL",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "SUBSELL — A smarter way to connect and grow.",
    description:
      "Discover a professional platform built to help you connect, explore opportunities, and grow with confidence.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}