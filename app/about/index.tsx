import { fetchTechStack } from "@/lib/fetchTechStack";
import Image from "next/image";
import { GitHub, Linkedin, Twitter } from "react-feather";

const About = async () => {
  const techStack = await fetchTechStack();
  return (
    <>
      <div className="flex sm:flex-row justify-between items-center flex-col text-center sm:text-left" id="about">
        <div className="gap-2 pb-4 md:pr-4 max-sm:order-1 flex flex-col">
          <p className="text-md text-cyan-400 font-semibold max-sm:hidden">Hello, my name is </p>
          <p className="text-4xl font-bold opacity-95">
            Harsh Soni
          </p>
          <p className="text-3xl font-semibold opacity-70">I build things for the web</p>
          <p className="max-w-md opacity-80 pt-4">I&apos;m a passionate full stack developer with an interest in cybersecurity. Currently, I&apos;m pursuing my B.Tech in CSE at IIIT Dharwad. I like building things and fixing bugs.</p>
          <button className="text-black my-2 bg-cyan-400 text-md px-3 py-2 w-fit max-sm:self-center rounded">
            <a href="https://drive.google.com/file/d/1g7hD6o1djnQpR9ZP9BQmaq7DoahYuOPo/view?usp=sharing">
              View my Resume
            </a>
          </button>
          <div className="gap-4 p-2 pb-4 text-2xl flex opacity-80 max-sm:self-center w-fit items-center">
            <p className="text-base font-semibold">Connect with Me</p><hr className="w-6 border-[1.5px] border-cyan-400" />
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
        <div className="max-sm:pb-4 ml-4 w-full sm:w-fit flex justify-center shrink-0">
          <Image className="w-40 border-cyan-400 border-2 rounded-3xl h-40 shadow-lg" height={600} width={600} src="/images/harsh-headshot.jpeg" alt="profile-image" />
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <p className="text-center text-2xl underline decoration-cyan-400 decoration-2 underline-offset-8">
          Tech Stack
        </p>
        <div className="space-x-4 flex justify-center pt-4 pb-4">
          {
            techStack?.map(obj => (
              <Image
                key={obj.id}
                className="h-8 max-w-fit"
                height={30}
                width={100}
                src={obj.imgSrc}
                alt={obj.alt}
              />
            ))
          }
        </div>
      </div>
    </>
  );
};

export default About;
