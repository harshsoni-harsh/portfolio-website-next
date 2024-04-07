const ProjectCardNoRepo = (props) => {
  const { title, imgSrc, repoLink, liveLink } = props;
  return (
    <div className="flex flex-col text-center align-middle space-y-4 pb-8 px-4">
      <div className="relative">
        <img className="h-72 rounded-xl" src={imgSrc} />
        <div className="text-transparent flex flex-col justify-center items-center absolute inset-0 hover:backdrop-brightness-10 hover:bg-cyan-400/50 rounded-xl hover:backdrop-blur-sm hover:text-white hover:border-cyan-400 hover:border-2">
            <p className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-xl h-fit w-fit">{title}</p>
        </div>
      </div>
      <div className="space-x-4">
        <a
          className="bg-cyan-500 px-2 py-2 hover:bg-cyan-600 rounded"
          href={liveLink}
        >
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectCardNoRepo;
