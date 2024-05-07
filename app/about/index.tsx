import Image from "next/image";
import { GitHub, Linkedin, Twitter } from "react-feather";

const About = async () => {
    return (
        <div className="flex flex-col">
            <div
                className="scroll-m-12 flex sm:flex-row justify-between items-center flex-col text-center sm:text-left"
                id="about"
            >
                <div className="gap-2 pb-4 md:pr-4 max-sm:order-1 flex flex-col">
                    <p className="text-md text-cyan-400 font-semibold max-sm:hidden">
                        Hello, my name is{" "}
                    </p>
                    <p className="text-4xl font-bold opacity-95">Harsh Soni</p>
                    <p className="text-3xl font-semibold opacity-70">
                        I build things for the web
                    </p>
                    <p className="max-w-md opacity-80 pt-4">
                        I&apos;m a passionate full stack developer with an
                        interest in cybersecurity. Currently, I&apos;m pursuing
                        my B.Tech in CSE at IIIT Dharwad. I like building things
                        and fixing bugs.
                    </p>
                    <button className="text-black my-2 bg-cyan-400 text-md px-3 py-2 w-fit max-sm:self-center rounded">
                        <a href="https://drive.google.com/file/d/1NT4XtucpskFgCVwKbgePLJYc_uI7waMT/view?usp=sharing">
                            View my Resume
                        </a>
                    </button>
                    <div className="gap-4 p-2 pb-4 text-2xl flex opacity-80 max-sm:self-center w-fit items-center">
                        <p className="text-base font-semibold">
                            Connect with Me
                        </p>
                        <hr className="w-6 border-[1.5px] border-cyan-400" />
                        <a href="https://x.com/harshsoni_harsh">
                            <Twitter className="hover:text-cyan-400" />
                        </a>
                        <a href="https://www.linkedin.com/in/harsh-soni-/">
                            <Linkedin className="hover:text-cyan-400" />
                        </a>
                        <a href="https://github.com/harshsoni-harsh">
                            <GitHub className="hover:text-cyan-400" />
                        </a>
                    </div>
                </div>
                <div className="max-sm:pb-4 sm:ml-4 w-full sm:w-fit flex justify-center shrink-0">
                    <Image
                        className="w-40 border-cyan-400 border-2 rounded-3xl h-40 shadow-lg"
                        height={600}
                        width={600}
                        src="/images/harsh-headshot.jpeg"
                        alt="profile-image"
                    />
                </div>
            </div>
            <div className="grid xl:grid-cols-4 grid-cols-2 max-sm:grid-cols-1 max-sm:text-center [&>*]:max-sm:text-center [&>*>*]:max-sm:list-none gap-4 mt-4 w-fit self-center">
                <div className="hover:bg-cyan-900 p-4 rounded-lg border-transparent border-2 hover:border-cyan-400">
                    <p className="underline underline-offset-8 decoration-2 decoration-cyan-400 font-bold mb-2">Programming Languages</p>
                    <ul className="max-sm:p-0 list-disc pl-4">
                        <li>Typescript</li>
                        <li>Javascript</li>
                        <li>Java</li>
                        <li>C/C++</li>
                        <li>Python</li>
                    </ul>
                </div>
                
                <div className="xl:order-2 hover:bg-cyan-900 p-4 rounded-lg border-transparent border-2 hover:border-cyan-400">
                    <p className="underline underline-offset-8 decoration-2 decoration-cyan-400 font-bold mb-2">Frameworks / Libraries</p>
                    <ul className="max-sm:p-0 list-disc pl-4">
                        <li>Next</li>
                        <li>React</li>
                        <li>Express</li>
                    </ul>
                </div>
                <div className="xl:order-1 hover:bg-cyan-900 p-4 rounded-lg border-transparent border-2 hover:border-cyan-400">
                    <p className="underline underline-offset-8 decoration-2 decoration-cyan-400 font-bold mb-2">Databases</p>
                    <ul className="max-sm:p-0 list-disc pl-4">
                        <li>Sqlite</li>
                        <li>MySql</li>
                    </ul>
                </div>
                <div className="xl:order-3 hover:bg-cyan-900 p-4 rounded-lg border-transparent border-2 hover:border-cyan-400">
                    <p className="underline underline-offset-8 decoration-2 decoration-cyan-400 font-bold mb-2">Tools</p>
                    <ul className="max-sm:p-0 list-disc pl-4">
                        <li>Swagger</li>
                        <li>Vercel</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;
