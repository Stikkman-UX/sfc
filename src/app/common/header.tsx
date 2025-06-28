import Image from "next/image"
import Link from "next/link"

export const Header = () => {
    return (
        <nav className="fixed top-0 w-full flex justify-around items-center bg-white/60 backdrop-blur-[35px] py-4 font-medium text-sm z-[999]">
            <Image
            className="object-cover"
            src="/header/sfc-logo.png"
            alt="SFC"
            width={100}
            height={60}
            />
            <div className="flex gap-10">
                <Link
                className=""
                href="/">
                    Technology
                </Link>
                <Link
                className=""
                href="/">
                    Thought leadership
                </Link>
                <Link
                className=""
                href="/">
                    Investors
                </Link>
                <Link
                className=""
                href="/">
                    About
                </Link>
                <Link
                className=""
                href="/">
                    Careers
                </Link>
            </div>
            <Link
            className="text-white bg-[rgba(9,151,72,1)] rounded-full px-6 py-2"
            href="/">
                Contact us
            </Link>
        </nav>
    )
}