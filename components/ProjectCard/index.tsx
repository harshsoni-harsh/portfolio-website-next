import Image from "next/image";
import NextLink from "next/link";
import { ExternalLink, GitHub, Link } from "react-feather";

interface project {
    title: string;
    description: string;
    imgSrc: string;
    repoLink: string;
    liveLink: string;
    tools: string[];
}

export default function Card(props: project) {
    const { title, description, imgSrc, tools, repoLink, liveLink } = props;
    return (
        <div className="hover:scale-105 md:my-2 duration-300 overflow-hidden grid md:grid-cols-2 hover:shadow-2xl hover:p-2 rounded-xl shadow-slate-950 items-center gap-10 group">
            <div className="py-4 flex flex-col gap-4">
                <NextLink href={liveLink || repoLink}>
                    <p className="text-lg">{title}</p>
                    <p className="text-sm mt-2">{description}</p>
                </NextLink>
                <div className="flex gap-2 flex-wrap text-sm -mt-2">
                    {
                        tools.map(tool => <span key={tool} className="bg-gray-600/25 p-1 px-2 rounded">{tool}</span>)
                    }
                </div>
                <p className="flex gap-2">
                    {repoLink && (
                        <NextLink href={repoLink}>
                            <GitHub className="hover:text-cyan-400" />
                        </NextLink>
                    )}
                    {liveLink && (
                        <NextLink href={liveLink}>
                            <ExternalLink className="hover:text-cyan-400" />
                        </NextLink>
                    )}
                </p>
            </div>
            {imgSrc && (
                <NextLink href={liveLink || repoLink}>
                    <div className="max-w-full max-md:hidden relative shrink flex justify-end items-center rounded-r-xl group-hover:rounded-none overflow-clip">
                        <div className="relative flex before:bg-cyan-400 before:z-10 before:group-hover:opacity-0 before:duration-200 before:opacity-50 before:absolute before:top-0 before:left-0 before:w-full before:h-full">
                            <Image
                                src={imgSrc}
                                className="relative h-fit w-fit max-w-[35vw] max-h-[280px]"
                                height={512}
                                width={512}
                                alt={title + " image"}
                            />
                        </div>
                    </div>
                </NextLink>
            )}
        </div>
    );
}
