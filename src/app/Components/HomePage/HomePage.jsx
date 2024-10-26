import Image from "next/image";
import DownloadButton from "../Button/downloadButton";
// import downloadButton from "../Button";

const HomePage = () => {
    // const handleDownload = () => {
    //     console.log('Hello, I am woking')
    // }
    return (
        <div className="bg-gray-900 text-white p-6 md:p-10 min-h-screen flex flex-col justify-center">
            <div className="flex flex-col-reverse md:flex-row items-center gap-6 md:gap-10">
                {/* Text Section */}
                <div className="flex flex-col gap-4 md:gap-6 justify-center items-start text-start md:text-left md:w-3/5">
                    <h1 className="text-2xl md:text-4xl font-bold">
                        Hello, My name is <br /><span className="text-orange-500">Ashraful Islam</span>
                    </h1>
                    <h2 className="text-xl md:text-3xl font-semibold">
                        I&apos;m a web <span className="text-orange-500">developer</span>
                    </h2>
                    <p className="text-base md:text-xl leading-relaxed text-gray-300">
                        Ashraful Islam is a skilled full-stack developer known for developing robust and efficient applications.
                        Specializing in front-end and back-end development, he is skilled in JavaScript and has a wide range of skills with extensive experience.
                        Ashraful&apos;s deep passion and unwavering commitment to web development, accentuated by his in-depth understanding and expertise of technology,
                        has solidified his reputation in the industry.
                    </p>
                    {/* <button onClick={handleDownload} className="bg-orange-500 text-white text-lg px-6 py-3 rounded-full hover:bg-orange-600 transition mt-4">
                        Download Resume
                    </button> */}
                    {/* <downloadButton /> */}
                    <DownloadButton/>
                </div>

                {/* Image Section */}
                <div className="relative md:w-2/5 w-full flex justify-center items-center">
                    <div className="relative group p-4">
                        <Image
                            className="object-cover rounded-lg shadow-lg"
                            src={'/images/ashraful-islam.jpg'}
                            alt="Ashraful Islam"
                            height={500}
                            width={400}
                        />
                        <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-orange-500 rounded-tl-lg"></div>
                        <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-orange-500 rounded-br-lg"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;