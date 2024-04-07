const ProjectCardNoLive = (props) => {
    const {title, repoLink} = props
    return (
        <div className="flex flex-col text-center align-middle space-y-4 pb-8 px-4">
          <div className="h-72 rounded-xl bg-gray-900 hover:bg-cyan-600 w-72 flex flex-col justify-center align-middle"><p>{title}</p></div>
          <div className="space-x-4">
            <a className='bg-cyan-500 px-2 py-2 hover:bg-cyan-600 rounded' href={repoLink}>Github</a>
          </div>
        </div>
    )
}

export default ProjectCardNoLive