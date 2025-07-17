'use client'

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export const Header = () => {
    const pathname = usePathname()

    const MobileNavIconSvg = () => (
        <svg width="70" height="42" viewBox="0 0 46 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="26" height="3" rx="1.5" fill="#099748" />
            <rect x="10" y="19" width="26" height="3" rx="1.5" fill="#099748" />
        </svg>
    )

    const navItems = [
        { label: "Technology", path: "/technology" },
        { label: "Thought leadership", path: "/thought-leadership" },
        { label: "Investors", path: "/investors" },
        { label: "About", path: "/about" },
        { label: "Careers", path: "/careers" }
    ]

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
                <div className="hidden md:flex md:gap-6 lg:gap-10 header-items">
                    {navItems.map(item => (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={`${pathname === item.path ? 'text-[#00A849] font-bold' : ''}`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
                <Link
                    className="hidden md:inline text-[#00A849] bg-[#fff] border rounded-full px-6 py-2 bordered-btn"
                    style={{ borderColor: "#F57E25" }}
                    href="/contact"
                >
                    Contact us
                </Link>
                <button
                    className="md:hidden"
                    type="button"
                >
                    <MobileNavIconSvg />
                </button>
            </div>
        </nav>
    )
}
