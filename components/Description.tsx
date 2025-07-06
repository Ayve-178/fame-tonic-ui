import Image from "next/image";
import TextDescription from "./TextDescription";

export default function Description() {
  return (
    <div className="relative flex flex-col md:flex-row pl-0 md:pl-[215px] pb-[40px] md:pb-[82px]">
      <div className="relative z-10 order-2 md:order-none w-full">
        <TextDescription />
      </div>
      <div className="order-1 md:order-none md:absolute md:right-0 md:top-0 md:z-0 md:pr-[101px] md:min-w-[666px] md:min-h-[679px] pointer-events-none">
        <Image
          src="/mobile.svg"
          alt="mobile-logo"
          width={666}
          height={679}
          className="hidden md:block"
        />
        <div className="block md:hidden w-full flex justify-center">
          <Image
            src="/mobile.svg"
            alt="mobile-logo"
            width={666}
            height={679}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
}
