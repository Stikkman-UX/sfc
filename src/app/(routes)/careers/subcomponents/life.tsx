import Image from "next/image"

export const Life = () => {
    return (
        <div className="w-11/12 sm:w-10/12 max-w-[1240px] space-y-10 mx-auto">
            <div className="lg:w-2/5 md:space-y-2 mx-auto md:mx-0">
                <h4 className="w-full lg:w-1/2 text-[rgba(0,89,67,1)] text-[22px] md:text-[32px] leading-9">
                    <span className="text-[rgba(25,169,72,1)]">
                        Life{" "}
                    </span>
                    at SFC
                </h4>
                <p className=" md:text-lg font-normal text-[rgba(74,85,101,1)]">
                    Experience a workplace culture that values innovation, collaboration, and making a meaningful impact on India's water infrastructure.
                </p>
            </div>
            <div className="w-full h-[380px] flex gap-6 overflow-x-scroll">
                <div className="w-[350px] shrink-0 flex justify-center items-center bg-[rgba(229,246,237,0.57)]">
                    <span className="text-[32px] text-[rgba(0,168,73,1)]">
                        Life@SFC
                    </span>
                </div>
                <div className="flex gap-6">
                    <Image
                    className="w-full min-h-[200px] object-cover"
                    width={400}
                    height={300}
                    src="/careers/team.png"
                    alt="Life at SFC"/>
                </div>
            </div>
        </div>
    )
}