export default function TanggalResepsi() {
  return (
    <div
      className="
      mt-10
      flex
      items-center
      justify-center
      gap-2
      sm:gap-4

md:gap-8
    "
    >
      <div>

        <span
          className="
          block
          w-16
          h-px
          bg-[#D9B16A]
          mb-2
        "
        />

        <p
           data-aos="fade-down-right"
          className="
          uppercase
          tracking-[4px]
          text-[#D9B16A]
          text-sm
          font-space
        "
        >
          Minggu
        </p>
        

      </div>
      

      <div
        className="
       rounded-2xl
bg-gradient-to-b
from-[#F9E8C8]
via-[#D9B16A]
to-[#A57740]
shadow-[0_8px_30px_rgba(217,177,106,.35)]
px-4
py-3

sm:px-5
sm:py-4

md:px-7
md:py-5
      "
      >
        <h2
          className="
         
          font-bold
          text-black
          text-4xl
sm:text-5xl
md:text-6xl
        "
        >
          07
        </h2>

        <p className="text-black font-medium font-poppins">
          2026
        </p>
      </div>

      <div>

        <span
          className="
          block
          w-16
          h-px
          bg-[#D9B16A]
          mb-2
        "
        />

        <p
         data-aos="fade-down-left"
          className="
          uppercase
      
          text-[#D9B16A]
          text-sm
          text-[10px]
sm:text-xs
md:text-sm
tracking-[3px]
font-space
        "
        >
          Agustus
        </p>

      </div>
    </div>
  );
}