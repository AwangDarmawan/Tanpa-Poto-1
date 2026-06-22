import { FaGift } from "react-icons/fa";

export default function GiftHeader() {
  return (
    <>
      <FaGift className="text-5xl text-[#D9B16A]" />

      <h2 data-aos="fade-down-right"
        className="
        mt-4
        font-allura
        text-[clamp(3rem,8vw,5rem)]
        bg-gradient-to-b
        from-[#FFF5D6]
        via-[#D9B16A]
        to-[#8A6438]
        bg-clip-text
        text-transparent
        "
      >
        Wedding Gift
      </h2>

      <p
        className="
        mt-6
        max-w-xl
        text-center
        text-sm
        leading-7
        text-white/80
        sm:text-base
        font-serif
        italic
        "
      >
        Doa restu Anda merupakan hadiah terindah bagi kami.
        Namun apabila ingin memberikan tanda kasih,
        Anda dapat mengirimkan melalui rekening berikut.
      </p>
    </>
  );
}