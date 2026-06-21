import PropTypes from "prop-types";
import { FaCopy, FaUniversity } from "react-icons/fa";
import { toast } from "react-toastify";

export default function GiftCard({
  bank,
  number,
  name,
}) {
  const copyNumber = async () => {
    try {
      await navigator.clipboard.writeText(number);
      toast.success("Nomor rekening berhasil disalin");
    } catch {
      toast.error("Gagal menyalin nomor rekening");
    }
  };

  return (
    <div
    data-aos="fade-up"
      className="
      rounded-3xl
      border
      border-[#D9B16A]/30
      bg-white/5
      p-6
      backdrop-blur-md
      transition
      duration-300
      hover:border-[#D9B16A]
      "
    >
      <div className="flex items-center gap-3">

        <FaUniversity className="text-2xl text-[#D9B16A]" />

        <h3   className="text-xl font-semibold text-[#D9B16A] font-serif italic">
          {bank}
        </h3>

      </div>

      <h2 className="mt-6 break-all text-2xl font-bold tracking-widest text-white font-serif">
        {number}
      </h2>

      <p className="mt-2 text-white/80 font-serif">
        a.n. {name}
      </p>

      <button
        onClick={copyNumber}
        className="
        mt-6
        inline-flex
        items-center
        gap-2
        rounded-full
        bg-gradient-to-r
        from-[#F8E8B5]
        via-[#D9B16A]
        to-[#8A6438]
        px-5
        py-3
        font-semibold
        text-black
        transition
        hover:scale-105
        font-space
        "
      >
        <FaCopy />

        Salin Nomor
      </button>
    </div>
  );
}

GiftCard.propTypes = {
  bank: PropTypes.string,
  number: PropTypes.string,
  name: PropTypes.string,
};