import Image from "next/image";

export default function TextDescription() {
  return (
    <div className="max-w-[516px] mx-[20px] md:mx-0 pt-[57px] flex flex-col">
      <div className="font-urbanist text-[25px] md:text-[35px] font-bold text-white text-center md:text-left">
        Want to Turn Social Media Into a Profitable Career?
      </div>
      <div
        className="font-urbanist text-[25px] md:text-[35px] font-bold text-[#00E7F9] text-center md:text-left"
        style={{ textShadow: "0 4px 4px #FC004E" }}
      >
        Discover your way to success with Fametonic:
      </div>
      <div className="font-figtree text-[16px] font-semibold text-white flex flex-col gap-[13px] mt-4">
        <div className="flex items-center gap-2">
          <span>✨</span>
          <span>
            Start growing your influence right away—no waiting required!
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span>✨</span>
          <span>
            {" "}
            Create viral TikToks and Reels step by step with easy-to-follow
            lessons
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span>✨</span>
          <span> Use a Personal AI Worker to boost your content</span>
        </div>
        <div className="flex items-center gap-2">
          <span>✨</span>
          <span>
            {" "}
            Learn from expert-led courses designed for aspiring influencers
          </span>
        </div>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex flex-col justify-center mt-[30px] gap-[10px] w-full md:max-w-[313px] order-2 md:order-1">
          <div className="px-[40px] py-[8px] flex items-center justify-center rounded-[10px] bg-[#FC004E] gap-[10px] shadow-[2px_2px_10px_#00E7F9]">
            <span className="font-figtree text-[20px] font-bold text-white">
              GET STARTED
            </span>
            <span>
              <Image src="/vector.svg" alt="logo" width={11} height={6} />
            </span>
          </div>
          <div className="font-figtree text-[12px] font-regular text-white text-center">
            1-minute quiz for personalized Insights
          </div>
        </div>
        <div className="mt-[30px] font-figtree text-[#ABABAB] flex flex-col gap-[12px] text-center md:text-left order-1 md:order-2">
          <div className="text-[12px] font-medium">
            By clicking &quot;Get Started&quot;, you agree with Terms and
            Conditions, Privacy Policy, Subscription Terms
          </div>
          <div className="text-[10px] font-regular">
            Fametonic 2025 ©All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
