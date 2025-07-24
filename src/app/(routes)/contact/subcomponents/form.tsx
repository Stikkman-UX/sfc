'use client'

import { ArrowRightGreenSvg } from "@/app/components/commonsvg";
import { useRef } from "react";

interface InputFieldProps {
    label: string;
    placeholder: string;
    inputType?: string;
    widthFull?: boolean;
    textarea?: boolean;
}

export const FormComp = () => {
    const formRef = useRef(null);

    const InputField = ({ label, placeholder, inputType, widthFull, textarea }: InputFieldProps) => {
        return (
            <div className={`w-full ${ widthFull && 'col-span-2' } flex flex-col gap-2`}>
                <label
                htmlFor={ label }
                className="text-[14.5px] text-[rgba(0,168,73,1)]">
                    { label }
                </label>
                {
                    textarea
                    ? (
                        <textarea
                        name={ label }
                        id={ label }
                        className="h-[110px] bg-[rgba(0,168,73,0.08)] rounded-lg px-4 py-4 placeholder:text-[14.5px] placeholder:text-[rgba(0,168,73,0.41)] placeholder:font-normal focus:outline-none resize-none"
                        placeholder={ placeholder }
                        />
                    )
                    : (
                        <input
                        name={ label }
                        id={ label }
                        className=" bg-[rgba(0,168,73,0.08)] rounded-lg px-4 py-4 placeholder:text-[14.5px] placeholder:text-[rgba(0,168,73,0.41)] placeholder:font-normal focus:outline-none"
                        type={ inputType ?? "text" }
                        placeholder={ placeholder }
                        />
                    )
                }
            </div>
        )
    }
    
    return (
        <form
        ref={ formRef }
        className="shrink-0 max-w-[700px] grid grid-cols-2 gap-x-5 gap-y-6 bg-[rgba(184,184,184,0.02)] rounded-tl-[80px] sm:rounded-tl-[100px] rounded-br-[80px] sm:rounded-br-[100px] backdrop-blur-[85px] shadow-[0px_4px_250px_0px_rgba(0,0,0,0.08)] px-8 sm:px-12 py-16 sm:py-20">
            <InputField
            label="First name"
            placeholder="First name"/>
            <InputField
            label="Last name"
            placeholder="Last name"/>
            <InputField
            label="Email"
            placeholder="example@email.com"
            inputType="email"/>
            <InputField
            label="Phone"
            placeholder="(414) 804 - 987"
            inputType="tel"/>
            <InputField
            label="Company"
            placeholder="Company"/>
            <InputField
            label="Role"
            placeholder="Role"/>
            <InputField
            label="Message"
            placeholder="Type in your message here"
            widthFull
            textarea/>
            <button
            type="submit"
            className="w-full col-span-2 flex justify-center items-center gap-2 text-[rgba(0,168,73,1)] whitespace-nowrap border border-[rgba(0,168,73,1)] rounded-full px-4 md:px-5 py-2.5">
                Send Message
                <ArrowRightGreenSvg/>
            </button>
        </form>
    )
}