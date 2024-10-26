"use client"
import Typewriter from 'typewriter-effect';

const TypeWriter = () => {

    return (
        <Typewriter
            options={{
                strings: [
                    "MERN Stack Developer",
                    "React JS Developer",
                    "Next JS Developer",
                    "Frontend Developer",
                ],
                autoStart: true,
                loop: true,
            }}
        />
    );
};

export default TypeWriter;