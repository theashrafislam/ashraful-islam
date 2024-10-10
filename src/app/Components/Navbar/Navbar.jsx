"use client"
import Link from "next/link";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { GoTrophy } from "react-icons/go";
import { HiOutlineMail } from "react-icons/hi";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathName = usePathname();
    const isActive = (href) => pathName == href;
    return (
        <div className="h-screen w-56 bg-[#222222] text-white">
            <div className="h-screen flex flex-col justify-center items-center">
                <div className="flex flex-col gap-4 items-start">
                    <Link href="/" className={`flex gap-2 items-center ${isActive('/') ? `text-orange-500` : `hover:text-orange-300`}`}> <IoHomeOutline className="text-2xl" /> <span className="text-lg">Home</span></Link>
                    <Link href="/about" className={`flex gap-2 items-center ${isActive('/about') ? `text-orange-500` : `hover:text-orange-300`}`}><FaRegUser className="text-2xl" /> <span className="text-lg">About</span></Link>
                    <Link href="/project" className={`flex gap-2 items-center ${isActive('/project') ? `text-orange-500` : `hover:text-orange-300`}`}><GoTrophy className="text-2xl" /> <span className="text-lg">Project</span></Link>
                    <Link href="/contact" className={`flex gap-2 items-center ${isActive('/contact') ? `text-orange-500` : `hover:text-orange-300`}`}><HiOutlineMail className="text-2xl" /> <span className="text-lg">Contact</span></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;