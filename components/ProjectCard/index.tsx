import Image from "next/image";
import NextLink from "next/link";
import { ExternalLink, GitHub, Link } from "react-feather";

interface project {
    title: string;
    description: string;
    imgSrc: string;
    repoLink: string;
    liveLink: string;
}

export default function Card(props: project) {
    const { title, description, imgSrc, repoLink, liveLink } = props;
    return (
        <div className="hover:scale-105 md:my-2 duration-300 overflow-hidden grid md:grid-cols-2 items-center justify-between gap-10 group">
            <div className="py-4">
                <NextLink href={liveLink || repoLink}>
                    <p className="text-lg">{title}</p>
                    <p>{description}</p>
                </NextLink>
                <p className="flex gap-2 mt-4">
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
                    <div className="max-w-full max-md:hidden relative shrink flex justify-center items-center">
                        <div className="relative flex place-items-center before:bg-cyan-400 before:z-10 before:group-hover:opacity-0 before:duration-200 before:opacity-50 before:absolute before:top-0 before:left-0 before:w-full before:h-full">
                            <Image
                                src={imgSrc}
                                className="relative h-fit w-fit"
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
