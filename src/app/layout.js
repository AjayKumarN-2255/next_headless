import "./globals.css";
import { Inter } from "next/font/google"
import Header from "@/components/Header";
import Footer from "@/components/Footer";


const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Next headless",
  description: "Just studying headless using next js and wordpress",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="flex flex-col min-h-screen bg-white max-w-[820px] p-4 md:p-10 mx-auto">
          <Header />
          {/* Main content grows to fill space */}
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

