import MandalaSection from "../Mandala/MandalaSection";

import PersonCard from "./PersonCard";

export default function PersonSection() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center px-6 py-20 backdrop-blur-sm">

      <MandalaSection />

      <div className="relative z-10 w-full max-w-xl text-center">

        
         <h2
    className="
          bg-gradient-to-r
    from-[#F8E8B5]
    via-[#D9B16A]
    to-[#8A6438]
    bg-clip-text
    text-transparent
    drop-shadow-lg
      text-3xl
      sm:text-4xl
      md:text-5xl
      leading-loose
      font-allura
    "
    dir="rtl"
  >
    بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
  </h2>
  <h2
          className="
              bg-gradient-to-b
    from-[#F8E8B5]
    via-[#D9B16A]
    to-[#8A6438]
    bg-clip-text
    text-transparent
    drop-shadow-lg
          font-semibold
          text-lg
          sm:text-xl
          font-serif italic
          "
        >
          Assalamu'alaikum Wr. Wb.
        </h2>

        <p
          className="
          mt-5
          text-white/90
          text-sm
          sm:text-base
          leading-7
          font-space italic
        "
        >
          Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta'ala,
          insyaAllah kami akan menyelenggarakan acara pernikahan :
        </p>

        <div className="mt-14 space-y-10">

          <PersonCard
            // title="Putra"
            name="Aditya Aljabar S.pd"
            parent="Putra dari Bapak Romeo & Ibu Juliet"
          />

          <div className="flex items-center justify-center gap-4">

      <span className="h-px w-14 bg-[#D9B16A]" />

      <span
        className="
        font-allura
        text-[#D9B16A]
        text-3xl
      "
      >
        &
      </span>

      <span className="h-px w-14 bg-[#D9B16A]" />

    </div>

          <PersonCard
            // title="Putri"
            name="Adinda Anjani"
            parent="Putri dari Bapak Juliet & Ibu Juliet"
          />

        </div>

      </div>

    </section>
  );
}