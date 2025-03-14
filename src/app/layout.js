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
        {/* SEO & Meta Tags */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="robots"
          content="index, follow"
        />
        <meta name="author" content="Ashraful Islam" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:image" content={metadata.openGraph.image} />

        {/* Canonical URL */}
        <link rel="canonical" href="https://theashrafislam.com" />

        {/* Favicon */}
        <link rel="icon" type="image/png" href={metadata.icons.icon} />
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