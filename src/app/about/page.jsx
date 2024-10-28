import React from 'react';
import Image from 'next/image';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiFirebase, SiMongodb } from 'react-icons/si';
import { BsGit } from 'react-icons/bs';
import TypeWriter from '../Components/TypeWriter/TypeWriter';

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
                    <h2 className="text-3xl md:text-4xl font-bold mb-6"><span>I&apos;m Specialized in</span> <span className="text-orange-500" ><TypeWriter development={'development'} /></span></h2>

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
                </p>
                {/* about me */}
                <span className="text-gray-700 text-base md:text-lg leading-relaxed"><h3 className="inline"><strong>Ashraful Islam</strong> is a passionate <strong>web developer</strong> with a strong foundation in <strong>Electrical Engineering</strong></h3>, which has greatly influenced his approach to problem-solving and logical thinking. His academic background has given him the analytical skills needed to tackle challenges in the world of <strong>web development</strong>, where he found his true passion.</span>

                <p className="py-3 text-gray-700 text-base md:text-lg leading-relaxed">Overcoming various challenges as a student, Ashraful realized that traditional academics did not define his potential. Instead, he discovered a genuine interest in <strong>coding</strong>, where creativity and technical skills converge to bring ideas to life. He specializes in the <strong>MERN stack</strong> and has a deep understanding of technologies like <strong>React</strong> and <strong>Next.js</strong>, which enable him to build modern, responsive, and dynamic <strong>web applications</strong>.</p>

                <p className="pb-3 text-gray-700 text-base md:text-lg leading-relaxed">For Ashraful, <strong>web development</strong> is much more than writing code—it&#39;s about creating meaningful experiences for users and continuously improving to stay ahead in the fast-paced tech landscape. He enjoys experimenting with new tools and frameworks, allowing him to constantly evolve his skills and deliver high-quality solutions.</p>

                <p className="pb-3 text-gray-700 text-base md:text-lg leading-relaxed">Driven by a desire to learn and grow, Ashraful&#39;s journey has been marked by self-improvement, perseverance, and an enthusiasm for embracing new challenges. Through various projects, he&#39;s refined his technical expertise and developed a mindset that values <strong>innovation</strong> and <strong>continuous learning</strong>.</p>


                <p className="text-gray-700 text-base md:text-lg leading-relaxed">As Ashraful Islam, he is committed to using his skills to make a positive impact through <strong>web development</strong>. Explore his <a href="portfolio.html">portfolio</a>, get to know his work, and see how his journey from <strong>Electrical Engineering</strong> to <strong>MERN stack development</strong> has shaped the developer he is today. Let’s connect and collaborate to bring ideas to life through <strong>technology</strong>.</p>

                {/* about me */}
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
                </p>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">Ashraful Islam is passionate about <strong>web development</strong>, enjoying <strong>coding</strong> as both a profession and a hobby. He loves exploring new <strong>programming languages</strong>, <strong>frameworks</strong>, and <strong>tools</strong>, always eager to expand his skills.</p>

                <p className="py-3 text-gray-700 text-base md:text-lg leading-relaxed">Outside of coding, Ashraful enjoys <strong>reading tech blogs</strong>, staying updated on <strong>technology trends</strong>, and engaging in <strong>online communities</strong> for knowledge sharing. His enthusiasm for continuous learning drives him to keep up with the latest in the fast-evolving <strong>software development</strong> world.</p>

                <p className="pb-3 text-gray-700 text-base md:text-lg leading-relaxed">Ashraful also finds inspiration in <strong>traveling</strong> and <strong>nature photography</strong>, which add a creative touch to his development work. These hobbies provide him with fresh perspectives and unique ideas that often find their way into his projects, enriching the user experiences he builds.</p>

                <p className="text-gray-700 text-base md:text-lg leading-relaxed">For Ashraful, <strong>web development</strong> is a lifelong passion, where <strong>learning</strong> and <strong>innovation</strong> go hand in hand. His journey reflects a continuous commitment to growth, always pushing the boundaries of what&#39;s possible with <strong>technology</strong>.</p>
            </div>

            {/* Education Section */}
            <div className="mt-8 bg-white text-gray-900 p-4 md:p-8 rounded-md">
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