import { DocSvg, RedirectSvg } from "@/app/common/commonsvg";
import { DownloadSvg } from "@/app/components/commonsvg";

interface ReportCardProps {
    data: {
        title: string;
        size: string;
        desc?: string;
        date: string;
        src: string;
        isVideo?: boolean;
    }
}

export const ReportCard = ({ data }: ReportCardProps) => {
    const { title, size, desc, date } = data;

    return (
        <div className="max-w-[400px] max-h-[320px] flex flex-col justify-between gap-4 rounded-2xl bg-white px-8 py-6">
            <div>
                <div className="flex items-center gap-3">
                    <div className="w-fit p-4 rounded-[14px] bg-[rgba(0,168,73,0.1)]">
                        <DocSvg/>
                    </div>
                    <div className="grid text-[rgba(15,23,42,1)]">
                        <span className="font-semibold">
                            { title }
                        </span>
                        {
                            !data.isVideo && (
                                <span className="text-xs">
                                    { size } MB
                                </span>
                            )
                        }
                    </div>
                </div>
                <span className="grid font-normal text-sm text-[rgba(74,85,101,1)] pt-4">
                    { desc }
                </span>
                <span className="grid font-normal text-sm text-[rgba(74,85,101,1)]">
                    { date }
                </span>
            </div>
            <button
            className="w-full flex justify-center items-center gap-3 text-[rgba(0,168,73,1)] bg-white border border-[rgba(0,168,73,1)] rounded-full px-2 py-1"
            type="button">
                { data.isVideo ? <RedirectSvg/> : <DownloadSvg/> }
                { data.isVideo ? 'watch' : 'Download' }
            </button>
        </div>
    )
}