"use client"
import Typewriter from 'typewriter-effect';

const TypeWriter = ({ development }) => {
    return (
        <span className="inline-block">
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
                }}
            />
        </span>
    );
};

export default TypeWriter;