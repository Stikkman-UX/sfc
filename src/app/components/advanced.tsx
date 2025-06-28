import Image from 'next/image';
import { Carousel } from './carousel';

export const Advanced = () => {

    const PlaySvg = () => {
        return (         
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 2.63574L13.3333 8.63574L4 14.6357V2.63574Z" stroke="#19A948" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        )
    }

    return (
        <section className="">
            <div className="bg-[url(/landing/advanced.jpg),linear-gradient(180deg,rgba(0,0,0,0)_9.35%,#000000_100%)] bg-blend-multiply bg-cover bg-no-repeat bg-center font-medium pt-40 pb-28">
                <div className='w-[900px] flex flex-col items-center space-y-8 text-center mx-auto'>
                    <h3 className='text-[56px] leading-10 text-white'>
                        Introducing C-Tech technology
                    </h3>
                    <p className='font-normal text-lg leading-[26px] text-white/80'>
                        C-Tech is a cutting-edge technology for treating sewage, using the latest SBR process. It transforms waste into recyclable water at a low cost. Our package includes design, installation, and essential equipment like decanters and air blowers.
                    </p>
                    <button
                    className='flex items-center gap-2 text-[rgba(25,169,72,1)] bg-white rounded-full px-6 py-3 mt-2'
                    type='button'>
                        <PlaySvg/>
                        Watch C-Tech in action
                    </button>
                </div>
            </div>
            <div className=' bg-[linear-gradient(122.87deg,#00A849_8.69%,#005945_100.52%)] py-12'>
                <h4 className='text-center text-white/80 text-[22px]'>
                    How <span className='text-white'>C-Tech</span> works
                </h4>
                {/* <Carousel/> */}
            </div>
        </section>
    )
}