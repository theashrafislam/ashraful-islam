"use client"
import Typewriter from 'typewriter-effect';

const TypeWriter = ({ development }) => {
    return (
        <span className="typewriter-wrapper">
            <Typewriter
                options={{
                    strings: [
                        `${development ? "MERN Stack Development" : "MERN Stack Developer"}`,
                        `${development ? "React JS Development" : "React JS Developer"}`,
                        `${development ? "Next JS Development" : "Next JS Developer"}`,
                        `${development ? "Frontend Development" : "Frontend Developer"}`,
                    ],
                    autoStart: true,
                    loop: true,
                    wrapperClassName: "inline-block",
                }}
            />
        </span>
    );
};

export default TypeWriter;