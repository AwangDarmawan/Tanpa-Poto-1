// import { FaHeart } from "react-icons/fa";
// import MandalaSection from "../Mandala/MandalaSection";

// export default function Mengundang() {
//   const keluarga = [
//     {
//       title: "Keluarga Pria",
//       names: [
//         "Bapak Ahmad & Ibu Siti",
//         "Keluarga Besar Ahmad",
//         "Keluarga Besar Pratama",
//       ],
//     },
//     {
//       title: "Keluarga Wanita",
//       names: [
//         "Bapak Budi & Ibu Rina",
//         "Keluarga Besar Budi",
//         "Keluarga Besar Wijaya",
//       ],
//     },
//   ];

//   return (
//     <section
//       id="turut-mengundang"
//       className="relative z-10 px-5 py-24"
//     >
//       <MandalaSection />

//       <div className="mx-auto max-w-5xl text-center">

//         {/* Icon */}
//         <FaHeart
//           className="
//           mx-auto
//           text-4xl
//           text-[#D9B16A]
//           drop-shadow-[0_0_12px_rgba(217,177,106,.4)]
//           animate-pulse
//           "
//         />

       


//         <h2
//           data-aos="fade-up"
//           className="
//           mt-4
//           font-allura
//           text-[clamp(3rem,8vw,5rem)]
//           bg-gradient-to-b
//           from-[#FFF5D6]
//           via-[#D9B16A]
//           to-[#8A6438]
//           bg-clip-text
//           text-transparent
//           "
//         >
//         Turut Mengundang
//         </h2>


//         <div className="my-6 flex items-center justify-center gap-4">

//           <div className="h-px w-16 bg-white/30" />

//           <FaHeart className="text-[#D9B16A] animate-pulse" />

//           <div className="h-px w-16 bg-white/30" />

//         </div>


//         <p
//           className="
//           mx-auto
//           max-w-2xl
//           font-space
//           leading-8
//           text-white/80
//           "
//         >
//           Dengan penuh rasa hormat, kami mengundang keluarga besar
//           dan sahabat untuk turut hadir memberikan doa terbaik
//           bagi kedua mempelai.
//         </p>


//       </div>



//       {/* CARD FAMILY */}

//       <div
//         className="
//         mx-auto
//         mt-12
//         grid
//         max-w-5xl
//         gap-6
//         sm:grid-cols-2
//         "
//       >

//         {keluarga.map((item,index)=>(
          
//           <div
//           key={index}
//           data-aos="fade-up"
//           className="
//           rounded-[35px]
//           border
//           border-[#D9B16A]/30

//           bg-white/5

//           backdrop-blur-md

//           p-6
//           sm:p-8

//           text-center

//           shadow-2xl

//           transition
//           duration-300

//           hover:border-[#D9B16A]
//           hover:-translate-y-1
//           "
//           >

//             <h3
//             className="
//             font-allura
//             text-3xl
//             sm:text-4xl

//             bg-gradient-to-b
//             from-[#FFF5D6]
//             via-[#D9B16A]
//             to-[#8A6438]

//             bg-clip-text
//             text-transparent
//             "
//             >
//               {item.title}
//             </h3>


//             <div
//             className="
//             mt-6
//             space-y-3
//             "
//             >

//               {item.names.map((name,i)=>(

//                 <p
//                 key={i}
//                 className="
//                 font-space
//                 text-sm
//                 sm:text-base
//                 text-white/80
//                 "
//                 >
//                   {name}
//                 </p>

//               ))}

//             </div>


//           </div>

//         ))}

//       </div>


//       {/* FOOTER TEXT */}

//       <p
//       className="
//       mt-12
//       text-center
//       font-allura
//       text-3xl
//       text-[#D9B16A]
//       "
//       >
//         Merupakan suatu kehormatan bagi kami
//       </p>


//     </section>
//   );
// }


import { FaHeart } from "react-icons/fa";
import MandalaSection from "../Mandala/MandalaSection";

export default function Mengundang() {
  const names = [
    "Bapak H.A.Sumaryana (Akang)",
    "Bapak H.Janar Iskandar",
    "Bapak H.Jujun Junaedi",
    "Bapak Asep Apandi",
    "Bapak Iyan Heryana",
    "Bapak Ridwan Falah(R)",
    "Bapak Muhammad Fahrurozi(Aang)",
    "Bapak Aceng Syarifudin(Baseng)",
  ];

  return (
    <section
      id="turut-mengundang"
      className="relative z-10 overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <MandalaSection />

      <div className="relative mx-auto max-w-5xl text-center">

        {/* ICON */}
        <FaHeart
          className="
            mx-auto
            text-3xl
            text-[#D9B16A]
            drop-shadow-[0_0_12px_rgba(217,177,106,.4)]
            animate-pulse
            sm:text-4xl
          "
        />

        {/* TITLE */}
        <h2
          data-aos="fade-up"
          className="
            mt-4
            font-allura
            text-[clamp(2.8rem,8vw,5rem)]
            bg-gradient-to-b
            from-[#FFF5D6]
            via-[#D9B16A]
            to-[#8A6438]
            bg-clip-text
            text-transparent
          "
        >
          Turut Mengundang
        </h2>

        {/* DECORATION */}
        <div className="my-5 sm:my-6 flex items-center justify-center gap-3 sm:gap-4">
          <div className="h-px w-10 bg-white/30 sm:w-16" />

          <FaHeart className="text-sm text-[#D9B16A] animate-pulse sm:text-base" />

          <div className="h-px w-10 bg-white/30 sm:w-16" />
        </div>

        {/* DESCRIPTION */}
        <p
          className="
            mx-auto
            max-w-2xl
            px-2
            font-space
            text-sm
            leading-7
            text-white/80
            sm:text-base
            sm:leading-8
          "
        >
          Dengan penuh rasa hormat, kami mengundang keluarga besar
          dan sahabat untuk turut hadir memberikan doa terbaik
          bagi kedua mempelai.
        </p>

      </div>

      {/* SINGLE FAMILY CARD */}
      <div
        data-aos="fade-up"
        className="
          mx-auto
          mt-10
          w-full
          max-w-2xl
          rounded-[28px]
          border
          border-[#D9B16A]/30
          bg-white/5
          p-5
          text-center
          shadow-2xl
          backdrop-blur-md
          transition-all
          duration-300
          hover:border-[#D9B16A]/70
          hover:-translate-y-1
          sm:mt-12
          sm:rounded-[35px]
          sm:p-8
          lg:p-10
        "
      >

        {/* CARD TITLE */}
        <h3
          className="
            font-allura
            text-3xl
            sm:text-4xl
            md:text-5xl
            bg-gradient-to-b
            from-[#FFF5D6]
            via-[#D9B16A]
            to-[#8A6438]
            bg-clip-text
            text-transparent
          "
        >
          Keluarga Besar
        </h3>

        <div className="mx-auto my-5 flex max-w-xs items-center justify-center gap-3">
          <div className="h-px flex-1 bg-[#D9B16A]/30" />
          <FaHeart className="text-xs text-[#D9B16A]" />
          <div className="h-px flex-1 bg-[#D9B16A]/30" />
        </div>

        {/* FAMILY NAMES */}
        <div
          className="
            mx-auto
            grid
            grid-cols-1
            gap-3
            sm:grid-cols-2
            sm:gap-x-6
            sm:gap-y-4
          "
        >
          {names.map((name, index) => (
            <p
              key={index}
              className="
                rounded-xl
                bg-white/[0.03]
                px-3
                py-3
                font-space
                text-xs
                leading-relaxed
                text-white/80
                transition-colors
                duration-300
                hover:bg-[#D9B16A]/10
                sm:text-sm
                md:text-base
              "
            >
              {name}
            </p>
          ))}
        </div>

      </div>

      {/* FOOTER TEXT */}
      <p
        className="
          mt-10
          px-3
          text-center
          font-allura
          text-2xl
          text-[#D9B16A]
          sm:mt-12
          sm:text-3xl
        "
      >
        Merupakan suatu kehormatan bagi kami
      </p>

    </section>
  );
}
