"use client";
import { useState } from "react";
import Link from "next/link";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { GoTrophy } from "react-icons/go";
import { HiOutlineMail } from "react-icons/hi";
import { FiMenu } from "react-icons/fi";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const pathName = usePathname();

    const isActive = (href) => pathName === href;
    const toggleDrawer = () => setDrawerOpen(!drawerOpen);
    const handleLinkClick = () => setDrawerOpen(false);

    return (
        <div>
            {/* Menu Button for Mobile and Tablet */}
            <div className="lg:hidden fixed top-4 right-4 z-30">
                <button
                    onClick={toggleDrawer}
                    className="text-white bg-gray-800 p-2 rounded-md"
                >
                    <FiMenu className="text-2xl" />
                </button>
            </div>

            {/* Drawer Navigation */}
            <div
                className={`fixed top-0 left-0 h-full lg:h-screen w-56 bg-[#222222] text-white z-20 transform ${
                    drawerOpen ? "translate-x-0" : "-translate-x-full"
                } transition-transform duration-300 lg:relative lg:translate-x-0 lg:flex lg:justify-center lg:items-center`}
            >
                <div className="h-full flex flex-col justify-center items-center">
                    <div className="flex flex-col gap-4 items-start lg:items-center">
                        <Link
                            href="/"
                            className={`flex gap-2 items-center ${isActive("/") ? "text-orange-500" : "hover:text-orange-300"}`}
                            onClick={handleLinkClick}
                        >
                            <IoHomeOutline className="text-2xl" />
                            <span className="text-lg">Home</span>
                        </Link>
                        <Link
                            href="/about"
                            className={`flex gap-2 items-center ${isActive("/about") ? "text-orange-500" : "hover:text-orange-300"}`}
                            onClick={handleLinkClick}
                        >
                            <FaRegUser className="text-2xl" />
                            <span className="text-lg">About</span>
                        </Link>
                        <Link
                            href="/project"
                            className={`flex gap-2 items-center ${isActive("/project") ? "text-orange-500" : "hover:text-orange-300"}`}
                            onClick={handleLinkClick}
                        >
                            <GoTrophy className="text-2xl" />
                            <span className="text-lg">Project</span>
                        </Link>
                        <Link
                            href="/contact"
                            className={`flex gap-2 items-center ${isActive("/contact") ? "text-orange-500" : "hover:text-orange-300"}`}
                            onClick={handleLinkClick}
                        >
                            <HiOutlineMail className="text-2xl" />
                            <span className="text-lg">Contact</span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Backdrop for Mobile and Tablet when Drawer is Open */}
            <div
                className={`fixed inset-0 bg-black opacity-50 z-10 ${
                    drawerOpen ? "block" : "hidden"
                } lg:hidden`}
                onClick={toggleDrawer}
            />
        </div>
    );
};

export default Navbar;