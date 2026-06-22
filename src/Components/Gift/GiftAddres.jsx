import { FaGift } from "react-icons/fa";

export default function GiftAddres() {
  return (
    <div className="mt-16 w-full rounded-3xl border border-[#D9B16A]/30 bg-white/5 p-8 text-center backdrop-blur-md">

      <FaGift className="mx-auto text-4xl text-[#D9B16A]" />

      <h3  data-aos="fade-down-right" className="mt-4 text-2xl font-semibold font-serif italic text-[#D9B16A]">
        Kirim Hadiah
      </h3>

      <p className="mt-5 leading-7 text-white/80 font-space">
        M.Aditya Aljabar
        <br />
        Jl. Merdeka No. 123
        <br />
        Jakarta Selatan
        <br />
        12345
      </p>

    </div>
  );
}