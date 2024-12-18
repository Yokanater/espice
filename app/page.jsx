import Navbar from "./components/Navbar";
import Image from "next/image";
import Footer from "./components/Footer";
import big from "../app/bigesp.png";

export default function Home() {
  return (
    <div>
      <Navbar />

      <div className="flex flex-col items-center mb-[30px]">
        <Image src={big} alt="espice" height={600} />
        <a
          href="https://www.instagram.com/_espice_/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 px-6 py-0.5 rounded-full border-[0.5px] border-[#E5E5E5] text-[#3E85EF] opacity-[88%] transition duration-300 bg-white font-extrabold"
        >
          #MirchiTohLagegi
        </a>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
