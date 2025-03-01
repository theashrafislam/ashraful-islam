import React from 'react';
import HomePage from './Components/HomePage/HomePage';

export const metadata = {
  title: "Ashraful Islam | Web Developer | MERN Stack Specialist",
  description: "Welcome to the homepage of Ashraful Islam, a skilled web developer specializing in MERN stack technologies including React and Next.js.",
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
  openGraph: {
    title: "Ashraful Islam | Web Developer",
    description: "Explore the work and passion of Ashraful Islam, a dedicated web developer with expertise in modern web technologies like React, Next.js, and the MERN stack.",
    url: "https://ashraful-islam.vercel.app/",
    image: "/images/ashraful-islam.jpg",
    type: "website"
  }
};

const Page = () => {
  return (
    <div className="h-screen w-full">
      <HomePage />
    </div>
  );
};

export default Page;