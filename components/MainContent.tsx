import Description from "./Description";
import Navbar from "./Navbar";

export default function MainContent() {
  return (
    <div className="bg-[#010101] w-full h-100vh pt-[35px]">
      <Navbar />
      <Description />
    </div>
  );
}