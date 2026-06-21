import { TypeAnimation } from "react-type-animation";
export default function Rum() {
  return (
    <div className="text-center">

      {/* Ornamen */}
      <div className="mb-6 flex items-center justify-center gap-4">
        <span className="h-px w-14 bg-[#D9B16A]/70" />

        <span className="text-2xl text-[#D9B16A] ">❁</span>

        <span className="h-px w-14 bg-[#D9B16A]/70" />
      </div>

      {/* Judul */}
      <p
      data-aos="fade-down"
        className="
        uppercase
        tracking-[0.35em]
        text-xs
        sm:text-sm
        font-semibold
        text-[#D9B16A]
        font-serif italic
      "
      >
        Firman Allah SWT
      </p>

      {/* Arab */}
      <h2
        dir="rtl"
        className="
        mt-10
        text-[#D9B16A]
        text-3xl
        sm:text-4xl
        md:text-5xl
        leading-[2.2]
       
sm:leading-[2]
md:leading-[2.3]
lg:leading-[2.6]
xl:leading-[2.8]
       
         font-arabic

drop-shadow-[0_0_10px_rgba(217,177,106,.35)]

         
      "
      >
        وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ
        
        أَزْوَاجًا لِتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُمْ

        مَوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ

        لِقَوْمٍ يَتَفَكَّرُونَ
      </h2>

      {/* Terjemahan */}
       <TypeAnimation
      sequence={[
        "“Dan di antara tanda-tanda kebesaran-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda kebesaran Allah bagi kaum yang berpikir.”",
        3000, // diam 3 detik
        "",   // hapus
        800,  // jeda
      ]}
      wrapper="p"
       speed={15}          // mengetik lebih lambat
  deletionSpeed={40}
      repeat={Infinity}
      cursor={true}
      className="
        mx-auto
        mt-10
        max-w-3xl

        px-2
        sm:px-6

        text-center

        font-space

        text-[15px]
        sm:text-base
        md:text-lg

        leading-8
        md:leading-9

        tracking-wide
        text-white/85
      "
    />
      {/* <p
        className="
        mx-auto
        mt-10
        max-w-3xl
        text-sm
        leading-8
        text-white/85
        sm:text-base
        md:text-lg
        font-space italic
      "
      >
        “Dan di antara tanda-tanda kebesaran-Nya ialah Dia menciptakan
        pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
        dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa
        kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat
        tanda-tanda kebesaran Allah bagi kaum yang berpikir.”
      </p> */}

      {/* Surat */}
      <p
        className="
        mt-8
        text-[#D9B16A]
        italic
        text-sm
        sm:text-base
        tracking-wide
        font-serif
      "
      >
        QS. Ar-Rum : 21
      </p>

      {/* Ornamen bawah */}
      <div className="mt-8 flex items-center justify-center gap-4">
        <span className="h-px w-14 bg-[#D9B16A]/70" />

        <span className="text-2xl text-[#D9B16A]">❁</span>

        <span className="h-px w-14 bg-[#D9B16A]/70" />
      </div>
    </div>
  );
}