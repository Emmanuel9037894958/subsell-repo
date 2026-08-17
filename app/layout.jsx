import "./globals.css";
import Footer from "../components/Footer";

export const metadata = {
  title: "SUBSELL",
  description: "A smarter way to connect and grow.",
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