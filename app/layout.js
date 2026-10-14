import "./globals.css";

export const metadata = {
  title: "Hello World",
  description: "A basic Next.js page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
