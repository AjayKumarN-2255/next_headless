import "./globals.css";

export const metadata = {
  title: "Next headless",
  description: "Just studying headless using next js and wordpress",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
