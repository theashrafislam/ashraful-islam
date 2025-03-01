import Image from "next/image";
import DownloadButton from "../Button/downloadButton";
import TypeWriter from "../TypeWriter/TypeWriter";
import LiveChatButton from "../LiveChat/LiveChatButton";

const HomePage = () => {

    return (
        <div className="bg-gray-900 text-white p-6 md:p-10 min-h-screen flex flex-col justify-center">

            <LiveChatButton className="z-10" />

            <div className="flex flex-col-reverse md:flex-row items-center gap-6 md:gap-10">
                {/* Text Section */}
                <div className="flex flex-col gap-4 md:gap-6 justify-center items-start text-start md:text-left md:w-3/5">
                    <h1 className="text-2xl md:text-4xl font-bold">
                        Hey, I&apos;m <br /><span className="text-orange-500">Ashraful Islam</span>
                    </h1>
                    <h2 className="text-xl md:text-3xl font-semibold flex gap-2 items-center">
                        <strong>I&apos;m a</strong>
                        <span className="text-orange-500 inline-block">
                            <TypeWriter />
                        </span>
                    </h2>
                    {/* <h2 className="text-xl md:text-3xl font-semibold">
                        I&apos;m a <span className="text-orange-500"><TypeWriter /></span>
                    </h2> */}
                    <p className="text-base md:text-xl leading-relaxed text-gray-300">
                        <strong>Ashraful Islam</strong> is a passionate <strong>web developer</strong> dedicated to harnessing the power of persistence and creativity. Despite facing challenges as a student in school, I never let that deter my ambitions. I proudly completed my diploma in <strong>Electrical Engineering</strong>, but my true passion lies in <strong>web development</strong>, which I now embrace as my career.
                        <br className="mb-4" />
                        <strong>Coding</strong> brings me immense joy and fulfillment. It allows me to express my creativity while solving complex problems and building dynamic applications. As a <strong>MERN stack developer</strong>, I specialize in modern technologies such as <strong>React</strong> and <strong>Next.js</strong>. Through my projects, I strive to create <strong>user-friendly experiences</strong> that make a significant impact in the tech community.
                    </p>
                    <p className="text-base md:text-xl leading-relaxed text-gray-300"></p>
                    <DownloadButton />
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