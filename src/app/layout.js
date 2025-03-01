import { Lato } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";


const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-lato",
});

export const metadata = {
  title: "Ashraful Islam | Web Developer | MERN Stack Specialist",
  description: "Welcome to the homepage of Ashraful Islam, a skilled web developer specializing in MERN stack technologies including React and Next.js. Discover his journey from Electrical Engineering to passionate web developer, where he creates impactful, user-friendly applications.",
  keywords: [
    "Ashraful Islam",
    "Web Developer",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Frontend Developer",
    "Coding",
    "User-friendly applications",
    "Electrical Engineering",
    "Web Development Career"
  ],
  author: "Ashraful Islam",
  icons: {
    icon: "/images/favicon.png",
  },
  openGraph: {
    title: "Ashraful Islam | Web Developer",
    description: "Explore the work and passion of Ashraful Islam, a dedicated web developer with expertise in modern web technologies like React, Next.js, and the MERN stack.",
    url: "https://ashraful-islam.vercel.app/",
    image: "/images/ashraful-islam.jpg",
    type: "website"
  }
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google site verification */}
        {/* <meta name="google-site-verification" content="DLR-xBxWJVW11lsFulF1talH4pHtCDfIhLdjeh878uc" /> */}
        {/* verification: {
    google: "DLR-xBxWJVW11lsFulF1talH4pHtCDfIhLdjeh878uc",
  }, */}
        <meta name="next-size-adjust" content="auto" />
      </head>
      <body className={`${lato.variable} antialiased flex`}>
        <aside className="lg:w-2/12">
          <Navbar />
        </aside>
        <main className="w-full">
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}