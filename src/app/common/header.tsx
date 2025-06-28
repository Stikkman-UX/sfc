import Image from "next/image"
import Link from "next/link"

export const Header = () => {

    const MobileNavIconSvg = () => {
        return (
            <svg width="70" height="42" viewBox="0 0 46 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="26" height="3" rx="1.5" fill="#099748"/>
            <rect x="10" y="19" width="26" height="3" rx="1.5" fill="#099748"/>
            </svg>
        )
    }

    return (
        <nav className="fixed top-0 w-full bg-white/60 backdrop-blur-[35px] py-8 md:py-4 font-medium text-sm z-[999]">
            <div className="w-11/12 md:w-full flex justify-between md:justify-around items-center mx-auto md:mx-0">
                <Image
                className="w-20 md:w-auto object-cover"
                src="/header/sfc-logo.png"
                alt="SFC"
                width={100}
                height={60}
                />
                <div className="hidden md:flex md:gap-6 lg:gap-10">
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
                className="hidden md:inline text-white bg-[rgba(9,151,72,1)] rounded-full px-6 py-2"
                href="/">
                    Contact us
                </Link>
                <button
                className="md:hidden"
                type="button"
                >
                    <MobileNavIconSvg/>
                </button>
            </div>
        </nav>
    )
}