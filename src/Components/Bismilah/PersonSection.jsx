// import MandalaSection from "../Mandala/MandalaSection";

// import PersonCard from "./PersonCard";

// export default function PersonSection() {
//   return (
//     <section className="relative overflow-hidden min-h-screen flex items-center justify-center px-6 py-20 backdrop-blur-sm">

//       <MandalaSection />

//       <div className="relative z-10 w-full max-w-xl text-center">

        
//          <h2
//     className="
//           bg-gradient-to-r
//     from-[#F8E8B5]
//     via-[#D9B16A]
//     to-[#8A6438]
//     bg-clip-text
//     text-transparent
//     drop-shadow-lg
//       text-3xl
//       sm:text-4xl
//       md:text-5xl
//       leading-loose
//       font-allura
//     "
//     dir="rtl"
//   >
//     بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
//   </h2>
//   <h2
//           className="
//               bg-gradient-to-b
//     from-[#F8E8B5]
//     via-[#D9B16A]
//     to-[#8A6438]
//     bg-clip-text
//     text-transparent
//     drop-shadow-lg
//           font-semibold
//           text-lg
//           sm:text-xl
//           font-serif italic
//           "
//         >
//           Assalamu'alaikum Wr. Wb.
//         </h2>

//         <p
//           className="
//           mt-5
//           text-white/90
//           text-sm
//           sm:text-base
//           leading-7
//           font-space italic
//         "
//         >
//           Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta'ala,
//           insyaAllah kami akan menyelenggarakan acara pernikahan & Syukuran Khitanan:
//         </p>

//         <div className="mt-14 space-y-10">

//           <PersonCard
//             // title="Putra"
//             name="Muhammad Agung Maulana"
//             parent="Bpk Usep Saepuloh(Mbep Pindang) & Ibu Mulyati"
//           />

//           <div className="flex items-center justify-center gap-4">

//       <span className="h-px w-14 bg-[#D9B16A]" />

//       <span
//         className="
//         font-allura
//         text-[#D9B16A]
//         text-3xl
//       "
//       >
//         &
//       </span>

//       <span className="h-px w-14 bg-[#D9B16A]" />

//     </div>

//           <PersonCard
//             // title="Putri"
//             name="Elva Sofiah"
//             parent="Putri dari Bapak H Mumuh Muhammad & Ibu Dedeh Aliyah"
//           />

//         </div>
//       </div>

//     </section>
//   );
// }





import MandalaSection from "../Mandala/MandalaSection";
import WeddingSection from "./WeddingSection";
import KhitananSection from "./KhitananSection";

export default function PersonSection() {
  return (
    <section
      className="
        relative isolate overflow-hidden
        min-h-screen
        w-full
        flex flex-col items-center justify-center
        px-3
        min-[360px]:px-4
        sm:px-6
        lg:px-8
        py-14
        min-[360px]:py-16
        sm:py-20
        md:py-24
        backdrop-blur-sm
      "
    >

      {/* BACKGROUND MANDALA */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <MandalaSection />
      </div>

      {/* MAIN CONTENT */}
      <div
        className="
          relative z-10
          w-full
          max-w-xl
          mx-auto
          text-center
        "
      >

        {/* BISMILLAH */}
        <h2
          className="
            bg-gradient-to-r
            from-[#F8E8B5]
            via-[#D9B16A]
            to-[#8A6438]
            bg-clip-text
            text-transparent
            drop-shadow-lg
            text-2xl
            min-[360px]:text-3xl
            sm:text-4xl
            md:text-5xl
            leading-relaxed
            font-allura
            break-words
          "
          dir="rtl"
        >
          بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
        </h2>

        {/* SALAM */}
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
            text-base
            min-[360px]:text-lg
            sm:text-xl
            md:text-2xl
            font-serif
            italic
          "
        >
          Assalamu'alaikum Wr. Wb.
        </h2>

        {/* DESCRIPTION */}
        <p
          className="
            mt-4
            sm:mt-5
            text-white/90
            text-xs
            min-[360px]:text-sm
            sm:text-base
            leading-relaxed
            sm:leading-7
            px-1
            sm:px-2
            font-space
            italic
            break-words
          "
        >
          Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta'ala,
          insyaAllah kami akan menyelenggarakan acara pernikahan
          & Syukuran Khitanan:
        </p>

        {/* WEDDING SECTION */}
        <div className="w-full mt-10 sm:mt-12 md:mt-14">
          <WeddingSection />
        </div>

       
        {/* KHITANAN SECTION */}
        <div className="
          w-full
          mt-8
          sm:mt-10
          md:mt-12
        ">
          <KhitananSection />
        </div>

      </div>

    </section>
  );
}

