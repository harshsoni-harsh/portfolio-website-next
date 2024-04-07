const About = () => {
  return (
    <>
      <div className="flex sm:flex-row justify-between items-center flex-col text-center sm:text-left">
        <div className="space-y-2 pb-4 max-sm:order-1">
          <p className="text-2xl font-semibold">Hello,</p>
          <p className="text-4xl font-bold">
            I'm <span className="text-cyan-400">Harsh Soni</span>
          </p>
          <p className="text-xl font-semibold">A Full Stack Developer</p>
          <div className="space-x-4 pt-2 pb-4 text-2xl">
            <a href="https://x.com/harshsoni_harsh">
                <i className="text-cyan-400 fa-brands fa-square-x-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/in/harsh-soni-/">
                <i className="text-cyan-400 fa-brands fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/harshsoni-harsh">
                <i className="text-cyan-400 fa-brands fa-github"></i>
            </a>
          </div>
          <button className="bg-cyan-400 text-black text-md px-3 py-1 rounded-3xl">
            <a href="https://drive.google.com/file/d/1g7hD6o1djnQpR9ZP9BQmaq7DoahYuOPo/view?usp=sharing">
              Download Resume
            </a>
          </button>
        </div>
        <div className="max-sm:pb-4 w-full sm:w-fit flex justify-center">
          <img className="w-40 border-cyan-400 border-2 rounded-3xl h-40 shadow-lg" src={"/images/harsh-headshot.jpeg"} />
        </div>
      </div>
    <div className="space-y-2">
      <p className="text-center text-2xl underline decoration-cyan-400 decoration-2 underline-offset-8">
        Tech Stack
      </p>
      <div className="space-x-4 flex justify-center pt-4 pb-4">
        <i className="text-3xl text-red-400 fa-brands fa-html5"></i>
        <i className="text-3xl text-blue-600 fa-brands fa-css3-alt"></i>
        <i className="text-3xl text-yellow-200 fa-brands fa-js"></i>
        <i className="text-3xl text-cyan-400 fa-brands fa-react"></i>
        <i className="text-3xl text-green-300 fa-brands fa-node-js"></i>
        <i className="text-3xl fa-brands fa-linux"></i>
        <i className="text-3xl fa-brands fa-docker"></i>
        <img
          className="h-8"
          src="https://www.vectorlogo.zone/logos/mysql/mysql-official.svg"
        />
        <img
          className="h-8"
          src="https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg"
        />
        <i className="text-3xl fa-brands fa-github"></i>
        <img
          className="h-8"
          src="https://tailwindcss.com/favicons/favicon-32x32.png"
        />
      </div>
    </div>
    </>
  );
};

export default About;
