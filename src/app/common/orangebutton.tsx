import { ArrowRightSvg } from "../components/commonsvg";

interface OrangeBtn {
    text: string;
    callback?: () => void;
    fullWidth?: boolean;
}

export const OrangeButton = ({ text, callback, fullWidth }: OrangeBtn) => {

    // const ArrowRightSvg = () => {
    //     return (
    //         <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    //         <path d="M3.5755 7H11.4244" stroke="none" strokeWidth="1.12127" strokeLinecap="round" strokeLinejoin="round"/>
    //         <path d="M7.49988 3.07553L11.4243 6.99997L7.49988 10.9244" stroke="none" strokeWidth="1.12127" strokeLinecap="round" strokeLinejoin="round"/>
    //         </svg>
    //     )
    // }

    return (
        <button
        onClick={callback}
        className={`${ fullWidth ? 'w-full flex-1' : 'w-fit' } group flex justify-center items-center gap-2 text-white bg-[rgba(245,126,37,1)] border border-[rgba(245,126,37,1)] rounded-full whitespace-nowrap px-4 md:px-5 py-2.5 orange-btn`}>
            { text }
            <ArrowRightSvg/>
        </button>
    )
}