import Image from "next/image";

export default function Navbar() {
    return(
        <div className="flex justify-between pl-0 md:pl-[211px] relative">
            <div className="min-w-[105.38px] min-h-[44.98px] md:w-[173.12px] md:h-[74px] relative mx-auto md:mx-0">
            <Image
                src="/fame-tonic-logo.svg"
                alt="logo"
                fill
                className="object-contain"
            />
            </div>
            <div className="pr-[211px] hidden md:flex gap-10 font-figtree text-[18px] font-semibold text-[#A9A9A9]">
                <div>About us</div>
                <div>Contact</div>
            </div>
            <button className="block md:hidden absolute right-[29px] top-1/2 -translate-y-1/2" aria-label="Open menu">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
            </button>
        </div>
    )
}