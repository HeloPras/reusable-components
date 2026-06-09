import TextFlipper from "@/components/TextFlipper";
import Image from "next/image";

export default function Home() {
  return (
  <div className="grid place-content-center min-h-screen bg-green-300">
  <TextFlipper className="uppercase text-7xl font-bold text-black   ">Hello</TextFlipper>
  </div>
  );
}
