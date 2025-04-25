import Navbar from "@/components/Navbar";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex justify-center items-center min-h-screen p-6 bg-gray-800 max-md:p-0">
            <div className="relative pb-8 scroll-smooth h-fit max-w-screen-xl space-y-12 flex flex-col py-5 text-white bg-gray-800 shadow-2xl rounded-3xl max-md:rounded-none grow shadow-slate-950">
                <Navbar />
                <div className="max-sm:px-8 sm:px-16">{children}</div>
            </div>
        </div>
    );
}
