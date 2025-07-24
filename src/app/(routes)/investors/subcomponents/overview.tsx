import { CalendarSvg, CallSvg, DocSvg, DownloadSvg, MailSvg } from "@/app/common/commonsvg"
import { RedirectSvg } from "@/app/components/commonsvg"

export const Overview = () => {
    return (
        <div className="w-11/12 sm:w-10/12 max-w-[1240px] flex flex-col lg:flex-row gap-x-8 gap-y-8 lg:gap-y-0 mx-auto">
            <div className="w-full lg:w-2/3 flex flex-col justify-between shrink-0 space-y-8">
                <div className="w-full h-fit sm:max-h-[300px] lg:max-h-[240px] flex-1 flex flex-col justify-between gap-8 rounded-tl-[17px] rounded-br-[17px] bg-[rgba(249,249,249,1)] px-8 py-7">
                    <span className="!font-basic text-[rgba(0,89,69,1)] text-2xl">
                        Key Performance Metrics
                    </span>
                    <div className="w-full grid grid-cols-2 xl:grid-cols-4 gap-x-16 gap-y-6 xl:gap-y-10  justify-between items-center pb-6 sm:pb-10 sm:pr-10">
                        <div className="grid gap-1">
                            <span className="font-semibold text-[22px] text-[rgba(0,89,69,1)]">
                                &#8377;18500 Cr
                            </span>
                            <span className="font-normal text-sm text-[rgba(74,85,101,1)]">
                                Market Cap
                            </span>
                        </div>
                        <div className="grid gap-1">
                            <span className="font-semibold text-[22px] text-[rgba(0,89,69,1)]">
                                28.5x
                            </span>
                            <span className="font-normal text-sm text-[rgba(74,85,101,1)]">
                                P/E Ratio
                            </span>
                        </div>
                        <div className="grid gap-1">
                            <span className="font-semibold text-[22px] text-[rgba(0,89,69,1)]">
                                22.4%
                            </span>
                            <span className="font-normal text-sm text-[rgba(74,85,101,1)]">
                                ROE
                            </span>
                        </div>
                        <div className="grid gap-1">
                            <span className="font-semibold text-[22px] text-[rgba(0,89,69,1)]">
                                0.35x
                            </span>
                            <span className="font-normal text-sm text-[rgba(74,85,101,1)]">
                                Debt/Equity
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex-1 flex flex-col gap-4 sm:gap-10 rounded-tl-[17px] rounded-br-[17px] bg-[rgba(249,249,249,1)] px-8 py-7">
                    <span className="!font-basic text-[rgba(0,89,69,1)] text-2xl">
                        Investment Highlights
                    </span>
                    <div className="w-full grid md:grid-cols-2 gap-x-4 gap-y-6">
                        <div className="grid gap-1 max-w-[320px]">
                            <span className="!font-basic flex items-center gap-3 font-semibold text-[22px] text-[rgba(0,89,69,1)]">
                                <div className="w-2 h-3 rounded-full bg-[rgba(0,168,73,1)]"></div>
                                Market Leadership
                            </span>
                            <span className="font-normal text-sm text-[rgba(74,85,101,1)]">
                                Leading provider of advanced wastewater treatment technology in India
                            </span>
                        </div>
                        <div className="grid gap-1 max-w-[320px]">
                            <span className="!font-basic flex items-center gap-3 font-semibold text-[22px] text-[rgba(0,89,69,1)]">
                                <div className="w-2 h-3 rounded-full bg-[rgba(0,168,73,1)]"></div>
                                Strong Order Book
                            </span>
                            <span className="font-normal text-sm text-[rgba(74,85,101,1)]">
                                &#8377;4,200 Cr order book provides visibility for next 3-4 years
                            </span>
                        </div>
                        <div className="grid gap-1 max-w-[320px]">
                            <span className="!font-basic flex items-center gap-3 font-semibold text-[22px] text-[rgba(0,89,69,1)]">
                                <div className="w-2 h-3 rounded-full bg-[rgba(0,168,73,1)]"></div>
                                Asset-Light Model
                            </span>
                            <span className="font-normal text-sm text-[rgba(74,85,101,1)]">
                                Technology licensing and equipment supply model with high margins
                            </span>
                        </div>
                        <div className="grid gap-1 max-w-[320px]">
                            <span className="!font-basic flex items-center gap-3 font-semibold text-[22px] text-[rgba(0,89,69,1)]">
                                <div className="w-2 h-3 rounded-full bg-[rgba(0,168,73,1)]"></div>
                                Sustainable Growth
                            </span>
                            <span className="font-normal text-sm text-[rgba(74,85,101,1)]">
                                Benefiting from India's &#8377;60,000 Cr water infrastructure push
                            </span>
                        </div>
                        <div className="grid gap-1 max-w-[320px]">
                            <span className="!font-basic flex items-center gap-3 font-semibold text-[22px] text-[rgba(0,89,69,1)]">
                                <div className="w-2 h-3 rounded-full bg-[rgba(0,168,73,1)]"></div>
                                ESG Leadership
                            </span>
                            <span className="font-normal text-sm text-[rgba(74,85,101,1)]">
                                Strong Environmental impact with proven sustainability metrics
                            </span>
                        </div>
                        <div className="grid gap-1 max-w-[320px]">
                            <span className="!font-basic flex items-center gap-3 font-semibold text-[22px] text-[rgba(0,89,69,1)]">
                                <div className="w-2 h-3 rounded-full bg-[rgba(0,168,73,1)]"></div>
                                Experienced Team
                            </span>
                            <span className="font-normal text-sm text-[rgba(74,85,101,1)]">
                                Proven management with deep industry expertise
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid gap-8">
                <div className="flex flex-col justify-between gap-4 sm:gap-10 rounded-tl-[17px] rounded-br-[17px] bg-[rgba(249,249,249,1)] px-8 py-7">
                    <span className="!font-basic text-[rgba(0,89,69,1)] text-2xl">
                        Investor Grievance
                    </span>
                    <div className="space-y-4 pt-4">
                        <div className="grid">
                            <span className="text-lg text-black">
                                Shewtha Deshpande
                            </span>
                            <span className="font-normal text-black/40">
                                Company Secretary and Compliance Officer
                            </span>
                        </div>
                        <span className="flex items-center gap-2 text-[rgba(0,168,73,1)]">
                            <CallSvg/>
                            +91-22-2783 2504
                        </span>
                        <span className="flex items-center gap-2 text-[rgba(0,168,73,1)]">
                            <MailSvg/>
                            compliance@sfcenv.com
                        </span>
                    </div>
                    <button
                    className="w-full flex justify-center items-center gap-5 text-[rgba(0,168,73,1)]  text-[15px] border-2 border-[rgba(0,168,73,1)] rounded-full px-2 py-1"
                    type="button">
                        Contact now
                        <RedirectSvg/>
                    </button>
                </div>
                <div className="flex flex-col justify-between gap-10 sm:gap-16 rounded-tl-[17px] rounded-br-[17px] bg-[rgba(249,249,249,1)] px-8 py-10">
                    <span className="!font-basic text-[rgba(0,89,69,1)] text-2xl">
                        Quick Actions
                    </span>
                    <div className="space-y-2.5  text-[15px] text-[rgba(15,23,42,1)]">
                        <button
                        className="w-full flex items-center gap-3 bg-white border border-[rgba(226,232,240,1)] rounded-xl px-2 py-1"
                        type="button">
                            <DownloadSvg/>
                            Lastest Annual Report
                        </button>
                        <button
                        className="w-full flex items-center gap-3 bg-white border border-[rgba(226,232,240,1)] rounded-xl px-2 py-1"
                        type="button">
                            <CalendarSvg/>
                            Investor Calendar
                        </button>
                        <button
                        className="w-full flex items-center gap-3 bg-white border border-[rgba(226,232,240,1)] rounded-xl px-2 py-1"
                        type="button">
                            <DocSvg/>
                            Press Releases
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}