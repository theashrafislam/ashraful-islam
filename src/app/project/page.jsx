import React from 'react';
import Image from 'next/image';
import LiveChatButton from '../Components/LiveChat/LiveChatButton';

export const metadata = {
    title: "Projects by Ashraful Islam | Web Developer",
    description: "Explore the projects developed by Ashraful Islam, showcasing skills in web development with technologies like React, Node.js, and MongoDB.",
};

const projects = [
    {
        title: "MediZone",
        description: "MediZone is a multi-vendor medicine selling e-commerce platform with secure payments and a robust dashboard system.",
        features: ["Secure Payments", "Admin Dashboard", "Seller Dashboard"],
        technologies: "React, Tailwind, Node.js, Express, MongoDB",
        image: "/images/MediZone.png",
        liveDemo: "https://medizone-d0736.web.app/",
        clientRepo: "https://github.com/theashrafislam/mediZone-client-side",
        serverRepo: "https://github.com/theashrafislam/mediZone-server-side"
    },
    {
        title: "Bistro Boss",
        description: "Bistro Boss is a culinary community platform with secure payments, personalized dashboards, and secure login.",
        features: ["Secure Payments", "Personalized Dashboard", "Secure Login"],
        technologies: "React, Tailwind, Node.js, Express, MongoDB",
        image: "/images/BistroBoss.png",
        liveDemo: "https://bistro-boss-c3a33.web.app/",
        clientRepo: "https://github.com/theashrafislam/bistro-boss-client",
        serverRepo: "https://github.com/theashrafislam/bistro-boss-server"
    },
    {
        title: "StudyHub Connect",
        description: "StudyHub Connect is a collaborative learning platform with a blog banner and FAQs. Users can manage and track tasks, view profiles, and more.",
        features: ["Task Management", "Profile Section", "Academic Collaboration"],
        technologies: "React, Tailwind, Node.js, Express, MongoDB",
        image: "/images/StudyHubConnect.png",
        liveDemo: "https://studyhub-connect-1f372.web.app/",
        clientRepo: "https://github.com/theashrafislam/studyHub-connec-client-side",
        serverRepo: "https://github.com/theashrafislam/studyHub-connect-server-side"
    }
];



const ProjectsPage = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-white px-6 py-6 md:px-10">
            <LiveChatButton />
            <h1 className="text-4xl font-bold text-center mb-8 relative inline-block">
                Projects
                <span className="absolute left-0 bottom-0 transform translate-y-2">
                    <span className="block w-14 h-1 bg-orange-500"></span>
                    <span className="block w-8 h-0.5 bg-orange-500 mt-1"></span>
                </span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg flex flex-col h-full">
                        <Image
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-cover"
                            width={500}
                            height={300}
                        />
                        <div className="p-6 flex flex-col flex-grow">
                            <div>
                                <h2 className="text-2xl font-bold mb-2 text-black">{project.title}</h2>
                                <p className="text-gray-600 mb-4">{project.description}</p>
                                <h3 className="text-lg font-semibold mb-2 text-orange-500">Features:</h3>
                                <ul className="list-disc list-inside mb-4 text-gray-700">
                                    {project.features.map((feature, featureIndex) => (
                                        <li key={featureIndex}>{feature}</li>
                                    ))}
                                </ul>
                                <h3 className="text-lg font-semibold mb-2 text-orange-500">Technologies:</h3>
                                <p className="text-gray-700">{project.technologies}</p>
                                <h3 className="text-lg font-semibold mb-2 text-black">Links:</h3>
                            </div>
                            <div className="flex-grow"></div> {/* This makes sure content grows and uses space */}
                            <div className="flex flex-col items-start space-y-2">
                                <button className="bg-orange-500 text-white py-2 px-4 rounded">
                                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                                        Live Demo
                                    </a>
                                </button>
                                <button className="bg-orange-500 text-white py-2 px-4 rounded">
                                    <a href={project.clientRepo} target="_blank" rel="noopener noreferrer">
                                        Client Side Repo
                                    </a>
                                </button>
                                <button className="bg-orange-500 text-white py-2 px-4 rounded inline-block">
                                    <a href={project.serverRepo} target="_blank" rel="noopener noreferrer">
                                        Server Side Repo
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsPage;