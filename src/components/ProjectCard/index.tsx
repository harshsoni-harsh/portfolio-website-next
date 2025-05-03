import { urlFor } from "@/sanity/lib/image";
import { Project } from "@/types/sanity";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, GitHub } from "react-feather";

export default function ProjectCard(props: Project) {
  const { title, description, image, tools, repoLink, liveLink } = props;
  const imgSrc = image ? urlFor(image).url() : null;

  return (
    <div className="hover:scale-105 md:my-2 duration-300 overflow-hidden grid md:grid-cols-2 hover:shadow-2xl hover:p-2 rounded-xl shadow-slate-950 items-center gap-10 group">
      <div className="py-4 flex flex-col gap-4">
        <Link href={liveLink || repoLink}>
          <p className="text-lg">{title}</p>
          <p className="text-sm mt-2">{description}</p>
        </Link>
        <div className="flex gap-2 flex-wrap text-sm -mt-2">
          {tools?.map((tool) => (
            <span key={tool} className="bg-gray-600/25 p-1 px-2 rounded">
              {tool}
            </span>
          ))}
        </div>
        <p className="flex gap-2">
          {repoLink && (
            <Link href={repoLink}>
              <GitHub
                className="hover:text-cyan-400"
                aria-label="github link"
              />
            </Link>
          )}
          {liveLink && (
            <Link href={liveLink}>
              <ExternalLink
                className="hover:text-cyan-400"
                aria-label="live link"
              />
            </Link>
          )}
        </p>
      </div>
      {imgSrc && (
        <Link href={liveLink || repoLink} aria-label="project link">
          <div className="max-w-full max-md:hidden relative shrink flex justify-end items-center rounded-r-xl group-hover:rounded-none overflow-clip">
            <div className="relative flex before:bg-cyan-400 before:z-10 before:group-hover:opacity-0 before:duration-200 before:opacity-50 before:absolute before:top-0 before:left-0 before:w-full before:h-full">
              <Image
                src={imgSrc}
                className="relative h-fit w-fit max-w-[35vw] max-h-[280px]"
                height={512}
                width={512}
                alt={title + " image"}
                aria-label="webpage snapshot"
              />
            </div>
          </div>
        </Link>
      )}
    </div>
  );
}
