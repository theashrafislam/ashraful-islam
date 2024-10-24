import React from 'react';
import Image from 'next/image';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiFirebase, SiMongodb } from 'react-icons/si';
import { BsGit } from 'react-icons/bs';

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-white px-6 py-6 md:px-10">
            <h1 className='text-3xl md:text-4xl font-bold mb-6 relative inline-block'>
                About Me
                {/* Custom Underline */}
                <span className="absolute left-0 bottom-0 transform translate-y-2">
                    <span className="block w-12 h-1 bg-orange-500"></span> {/* Thick Line */}
                    <span className="block w-8 h-0.5 bg-orange-500 mt-1"></span> {/* Thin Line */}
                </span>
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                {/* Left Section: Image and Name */}
                <div className="flex flex-col items-center">
                    <Image
                        src="/images/ashraful-islam.jpg"
                        alt="Ashraful Islam"
                        className="rounded-lg object-cover grayscale"
                        width={600} // Optimized for mobile
                        height={600}
                    />
                    <h1 className="text-4xl md:text-5xl font-bold mt-4">Ashraful Islam</h1>
                </div>

                {/* Right Section: Specialization and Skills */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">I&apos;m Specialized in</h2>

                    {/* Front-End Section */}
                    <div className="mb-8 bg-gray-800 p-4 rounded-md">
                        <h3 className="text-2xl md:text-3xl font-semibold mb-4">Front-End UI/UX Design</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { icon: <FaHtml5 className="text-orange-500" />, skill: "HTML" },
                                { icon: <FaCss3Alt className="text-blue-500" />, skill: "CSS" },
                                { icon: <SiTailwindcss className="text-cyan-400" />, skill: "Tailwind CSS" },
                                { icon: <FaJs className="text-yellow-500" />, skill: "JavaScript" },
                                { icon: <FaReact className="text-blue-600" />, skill: "React" },
                                { icon: <SiNextdotjs className="text-black" />, skill: "Next.js" },
                            ].map(({ icon, skill }) => (
                                <div key={skill} className="flex items-center gap-2 bg-gray-700 p-2 rounded-md">
                                    <span className="text-xl">{icon}</span>
                                    <span className="text-base md:text-lg">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Back-End Section */}
                    <div className="mb-8 bg-gray-800 p-4 rounded-md">
                        <h3 className="text-2xl md:text-3xl font-semibold mb-4">Back-End Development</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { icon: <FaNodeJs className="text-green-600" />, skill: "Node.js" },
                                { icon: <SiFirebase className="text-yellow-600" />, skill: "Express.js" },
                            ].map(({ icon, skill }) => (
                                <div key={skill} className="flex items-center gap-2 bg-gray-700 p-2 rounded-md">
                                    <span className="text-xl">{icon}</span>
                                    <span className="text-base md:text-lg">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Database Section */}
                    <div className="mb-8 bg-gray-800 p-4 rounded-md">
                        <h3 className="text-2xl md:text-3xl font-semibold mb-4">Database</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { icon: <SiMongodb className="text-green-500" />, skill: "MongoDB" },
                            ].map(({ icon, skill }) => (
                                <div key={skill} className="flex items-center gap-2 bg-gray-700 p-2 rounded-md">
                                    <span className="text-xl">{icon}</span>
                                    <span className="text-base md:text-lg">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Others Section */}
                    <div className="bg-gray-800 p-4 rounded-md">
                        <h3 className="text-2xl md:text-3xl font-semibold mb-4">Others</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { icon: <BsGit className="text-red-500" />, skill: "Git" },
                                { icon: <SiFirebase className="text-yellow-600" />, skill: "Firebase" },
                            ].map(({ icon, skill }) => (
                                <div key={skill} className="flex items-center gap-2 bg-gray-700 p-2 rounded-md">
                                    <span className="text-xl">{icon}</span>
                                    <span className="text-base md:text-lg">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* About Me Section with white background */}
            <div className="mt-16 bg-white text-gray-900 p-4 md:p-8 rounded-md">
                <h1 className='text-4xl font-bold mb-6 relative inline-block'>
                    About Me
                    {/* Custom Underline */}
                    <span className="absolute left-0 bottom-0 transform translate-y-2">
                        <span className="block w-12 h-1 bg-orange-500"></span> {/* Thick Line */}
                        <span className="block w-8 h-0.5 bg-orange-500 mt-1"></span> {/* Thin Line */}
                    </span>
                </h1>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                    I am a dedicated and passionate web developer specializing in the MERN stack.
                    My journey started with a diploma in Electrical Engineering, but I soon transitioned
                    into the world of web development, where I have built a solid foundation in both
                    front-end and back-end technologies.
                </p>
            </div>

            {/* Professional Skill Set Section */}
            <div className="mt-8 bg-white text-gray-900 p-4 md:p-8 rounded-md">
                <h1 className='text-4xl font-bold mb-6 relative inline-block'>
                    Professional Skill Set
                    {/* Custom Underline */}
                    <span className="absolute left-0 bottom-0 transform translate-y-2">
                        <span className="block w-12 h-1 bg-orange-500"></span> {/* Thick Line */}
                        <span className="block w-8 h-0.5 bg-orange-500 mt-1"></span> {/* Thin Line */}
                    </span>
                </h1>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                    With expertise in technologies like React, Next.js, and Node.js, I excel in creating
                    efficient, scalable, and responsive applications. I am also proficient in database
                    management using MongoDB and Firebase. My skill set enables me to take on full-stack
                    projects and deliver high-quality results.
                </p>
            </div>

            {/* Interests and Hobbies Section */}
            <div className="mt-8 bg-white text-gray-900 p-4 md:p-8 rounded-md">
            <h1 className='text-4xl font-bold mb-6 relative inline-block'>
            Interests and Hobbies
                    {/* Custom Underline */}
                    <span className="absolute left-0 bottom-0 transform translate-y-2">
                        <span className="block w-12 h-1 bg-orange-500"></span> {/* Thick Line */}
                        <span className="block w-8 h-0.5 bg-orange-500 mt-1"></span> {/* Thin Line */}
                    </span>
                </h1>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                    Apart from coding, I enjoy playing chess, exploring new technologies, and contributing
                    to open-source projects. I also love spending time learning about the latest trends in
                    web development and improving my problem-solving skills through various challenges.
                </p>
            </div>

            {/* Education Section */}
            <div className="mt-16 bg-white text-gray-900 p-4 md:p-8 rounded-md">
                {/* <h2 className="text-3xl md:text-4xl font-bold mb-2">Education</h2> */}
                {/* <div className="h-1 w-40 bg-gradient-to-r from-black to-lime-400 mb-4"></div> */}
                <h1 className='text-4xl font-bold mb-6 relative inline-block'>
                    Education
                    {/* Custom Underline */}
                    <span className="absolute left-0 bottom-0 transform translate-y-2">
                        <span className="block w-12 h-1 bg-orange-500"></span> {/* Thick Line */}
                        <span className="block w-8 h-0.5 bg-orange-500 mt-1"></span> {/* Thin Line */}
                    </span>
                </h1>
                <div className="flex flex-col lg:flex-row justify-between items-center">
                    <div>
                        <h3 className="text-2xl md:text-3xl font-semibold">UCEP Institute of Science & Technology - UIST, Dhaka</h3>
                        <p className="text-gray-600 text-base md:text-lg">Diploma in Electrical Engineering</p>
                    </div>
                    <div>
                        <p className="text-gray-600 text-base md:text-lg">2019-2023</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;