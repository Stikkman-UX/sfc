import { ArrowRightSvg } from "../components/commonsvg";

interface OrangeBtn {
    text: string;
    callback?: () => void;
    fullWidth?: boolean;
}

export const OrangeButton = ({ text, callback, fullWidth }: OrangeBtn) => {

    return (
        <button
        onClick={callback}
        className={`${ fullWidth ? 'w-full flex-1' : 'w-fit' } flex justify-center items-center gap-2 text-white bg-[rgba(245,126,37,1)] border border-[rgba(245,126,37,1)] rounded-full whitespace-nowrap px-4 md:px-5 py-2.5`}>
            { text }
            <ArrowRightSvg/>
        </button>
    )
}