import { ArrowRightSvg } from "../components/commonsvg"
import { OrangeButton } from "./orangebutton"
import Image from "next/image"

export const Footer = () => {
    return (
        <footer className="">
            <div className=" md:max-h-[200px] flex justify-center bg-[url('/footer-bg.jpg')] bg-cover bg-no-repeat bg-center py-12">
                <div className="w-11/12 md:w-10/12 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4 mx-auto">
                    <span className="text-[28px] md:text-4xl lg:text-[42px] text-white">
                        Get in touch with us   
                    </span>
                    <div className="w-fit md:w-[400px] flex gap-3">
                        <OrangeButton text="Call now"/>
                        <button
                        type="button"
                        className="flex-1 flex justify-center items-center gap-2 text-white border border-white rounded-full px-4 md:px-5 py-2.5">
                            Send a message
                            <ArrowRightSvg/>
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg-[rgba(0,89,67,1)] text-[rgba(209,213,220,1)] py-14">
                <div className="w-11/12 md:w-10/12 space-y-12 mx-auto">
                    <Image
                    className="hidden lg:inline w-28 object-cover"
                    src="/sfc-logo.png"
                    width={100}
                    height={60}
                    alt="Footer Logo"/>
                    <div className="flex flex-col md:flex-row justify-between items-start gap-8 font-normal text-base">
                        <div className="hidden lg:block w-1/3 space-y-4">
                            <p className="text-lg">
                                India's leading technology enabler for sustainable wastewater treatment solutions, empowering EPC contractors to build world- class infrastructure.
                            </p>
                            <div>
                                <svg width="121" height="25" viewBox="0 0 121 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.19761 2.77832C0.87319 2.77832 0 3.6828 0 4.87801C0 6.04092 0.840383 6.9767 2.1325 6.9767C3.52153 6.9767 4.39371 6.04092 4.36141 4.87801C4.36141 3.6828 3.52203 2.77832 2.19761 2.77832ZM14.6009 8.33443C12.372 8.33443 11.0158 9.62605 10.4667 10.5305H10.4026L10.2082 8.62516H6.62312C6.65542 9.85267 6.71952 11.274 6.71952 12.9538V22.1591H10.8538V14.3741C10.8538 13.9864 10.8861 13.5993 10.983 13.3086C11.306 12.5333 11.9849 11.7252 13.1155 11.7252C14.6338 11.7252 15.2152 12.921 15.2152 14.6653V22.1591H19.3823V14.1813C19.3823 10.1757 17.3144 8.33443 14.6009 8.33443ZM0.0979181 8.62516V22.1591H4.2322V8.62516H0.0979181Z" fill="#FEFEFE"/>
                                <path d="M54.1394 10.9226L61.4936 2.37402H59.7508L53.3653 9.79685L48.2651 2.37402H42.3823L50.0947 13.5985L42.3823 22.5634H44.1251L50.8683 14.7243L56.2548 22.5634H62.1376L54.1386 10.9226H54.1394ZM51.7522 13.6974L50.9709 12.5797L44.753 3.68593H47.4301L52.4479 10.8632L53.2293 11.9809L59.7516 21.3108H57.0745L51.7522 13.6974Z" fill="#FEFEFE"/>
                                <path d="M120.229 5.37531C120.229 5.37531 119.883 2.93703 118.816 1.85642C117.473 0.443325 115.964 0.443325 115.257 0.360201C110.314 0 102.877 0 102.877 0H102.864C102.864 0 95.427 0 90.4554 0.360201C89.763 0.443325 88.2535 0.443325 86.8963 1.85642C85.8438 2.93703 85.4976 5.37531 85.4976 5.37531C85.4976 5.37531 85.1376 8.25693 85.1376 11.1247V13.8123C85.1376 16.6801 85.4976 19.5479 85.4976 19.5479C85.4976 19.5479 85.8438 21.9861 86.9102 23.0667C88.2535 24.4798 90.0261 24.4383 90.8155 24.5768C93.6544 24.8539 102.864 24.937 102.864 24.937C102.864 24.937 110.314 24.9232 115.272 24.563C115.964 24.4798 117.474 24.4798 118.831 23.0667C119.897 21.9861 120.244 19.5479 120.244 19.5479C120.244 19.5479 120.602 16.6801 120.602 13.8123V11.1247C120.588 8.25693 120.228 5.37531 120.228 5.37531H120.229ZM99.207 17.068V7.10705L108.79 12.1083L99.207 17.068Z" fill="#FEFEFE"/>
                                </svg>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2.5 whitespace-nowrap">
                            <span className="font-inter font-semibold text-[rgba(0,168,73,1)]">
                                Solutions
                            </span>
                            <span>C-Tech Technology</span>
                            <span>Municipal Treatment</span>
                            <span>Industrial Solutions</span>
                            <span>Zero Liquid Discharge</span>
                            <span>Smart Monitoring</span>
                        </div>
                        <div className="flex flex-col gap-2.5 whitespace-nowrap">
                            <span className="font-inter font-semibold text-[rgba(0,168,73,1)]">
                                Company
                            </span>
                            <span>About Us</span>
                            <span>Leadership</span>
                            <span>Case Studies</span>
                            <span>Sustainability</span>
                            <span>Careers</span>
                            <span>News</span>
                        </div>
                        <div className="max-w-[280px] md:divide-y-2 divide-white/20">
                            <div className="flex flex-col gap-2.5 md:pb-8">
                                <span className="font-inter font-semibold text-[rgba(0,168,73,1)]">
                                    Contact
                                </span>
                                <span>SFC House, Industrial Area Gurugram, Haryana 122015</span>
                                <span>+91 124 4567890</span>
                                <span>info@ssfcenvirotech.com</span>
                            </div>
                            <div className="flex flex-col gap-2.5 whitespace-nowrap pt-8">
                                <span className="font-inter font-semibold text-[rgba(0,168,73,1)]">
                                    Investor Relations
                                </span>
                                <span>Financial Reports</span>
                                <span>ESG Disclosures</span>
                                <span>Governance</span>
                            </div>
                        </div>
                    </div>
                    <Image
                    className="w-28 lg:hidden object-cover"
                    src="/sfc-logo.png"
                    width={100}
                    height={60}
                    alt="Footer Logo"/>
                    <div className="flex flex-col lg:hidden justify-between items-start gap-8 font-normal text-base">
                        <div className="w-full space-y-8">
                            <p className="text-lg">
                                India's leading technology enabler for sustainable wastewater treatment solutions, empowering EPC contractors to build world- class infrastructure.
                            </p>
                            <div>
                                <svg width="121" height="25" viewBox="0 0 121 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.19761 2.77832C0.87319 2.77832 0 3.6828 0 4.87801C0 6.04092 0.840383 6.9767 2.1325 6.9767C3.52153 6.9767 4.39371 6.04092 4.36141 4.87801C4.36141 3.6828 3.52203 2.77832 2.19761 2.77832ZM14.6009 8.33443C12.372 8.33443 11.0158 9.62605 10.4667 10.5305H10.4026L10.2082 8.62516H6.62312C6.65542 9.85267 6.71952 11.274 6.71952 12.9538V22.1591H10.8538V14.3741C10.8538 13.9864 10.8861 13.5993 10.983 13.3086C11.306 12.5333 11.9849 11.7252 13.1155 11.7252C14.6338 11.7252 15.2152 12.921 15.2152 14.6653V22.1591H19.3823V14.1813C19.3823 10.1757 17.3144 8.33443 14.6009 8.33443ZM0.0979181 8.62516V22.1591H4.2322V8.62516H0.0979181Z" fill="#FEFEFE"/>
                                <path d="M54.1394 10.9226L61.4936 2.37402H59.7508L53.3653 9.79685L48.2651 2.37402H42.3823L50.0947 13.5985L42.3823 22.5634H44.1251L50.8683 14.7243L56.2548 22.5634H62.1376L54.1386 10.9226H54.1394ZM51.7522 13.6974L50.9709 12.5797L44.753 3.68593H47.4301L52.4479 10.8632L53.2293 11.9809L59.7516 21.3108H57.0745L51.7522 13.6974Z" fill="#FEFEFE"/>
                                <path d="M120.229 5.37531C120.229 5.37531 119.883 2.93703 118.816 1.85642C117.473 0.443325 115.964 0.443325 115.257 0.360201C110.314 0 102.877 0 102.877 0H102.864C102.864 0 95.427 0 90.4554 0.360201C89.763 0.443325 88.2535 0.443325 86.8963 1.85642C85.8438 2.93703 85.4976 5.37531 85.4976 5.37531C85.4976 5.37531 85.1376 8.25693 85.1376 11.1247V13.8123C85.1376 16.6801 85.4976 19.5479 85.4976 19.5479C85.4976 19.5479 85.8438 21.9861 86.9102 23.0667C88.2535 24.4798 90.0261 24.4383 90.8155 24.5768C93.6544 24.8539 102.864 24.937 102.864 24.937C102.864 24.937 110.314 24.9232 115.272 24.563C115.964 24.4798 117.474 24.4798 118.831 23.0667C119.897 21.9861 120.244 19.5479 120.244 19.5479C120.244 19.5479 120.602 16.6801 120.602 13.8123V11.1247C120.588 8.25693 120.228 5.37531 120.228 5.37531H120.229ZM99.207 17.068V7.10705L108.79 12.1083L99.207 17.068Z" fill="#FEFEFE"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden md:flex items-center justify-between bg-[rgba(0,69,56,1)] font-normal text-[rgba(209,213,220,1)] text-sm py-6">
                <div className="w-10/12 flex justify-between mx-auto">
                    <span className="">
                        © 2024 SFC Environment Technology Ltd.
                    </span>
                    <div className="space-x-6">
                        <a href="/" className="">Privacy Policy</a>
                        <a href="/" className="">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}