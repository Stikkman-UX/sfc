import { ArrowRightSvg } from "../components/commonsvg";

interface OrangeBtn {
    text: string;
    callback?: () => void;
}

export const OrangeButton = ({ text, callback }: OrangeBtn) => {

    return (
        <button
        onClick={callback}
        className="flex items-center gap-2 text-white bg-[rgba(245,126,37,1)] border border-[rgba(245,126,37,1)] rounded-full px-4 md:px-5 py-2.5">
            { text }
            <ArrowRightSvg/>
        </button>
    )
}