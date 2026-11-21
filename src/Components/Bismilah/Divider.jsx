// export default function Divider() {
//   return (
//     <div className="flex items-center justify-center gap-4">

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
//   );
// }




export default function Divider({ icon = "♥", label }) {
  return (
    <div className="
      flex flex-col
      items-center justify-center
      gap-3 py-2
      w-full
    ">

      {label && (
        <h3 className="
          font-serif italic font-semibold
          text-xl
          sm:text-2xl
          md:text-3xl
          leading-relaxed
          px-2
          break-words
          bg-gradient-to-b
          from-[#F8E8B5]
          via-[#D9B16A]
          to-[#8A6438]
          bg-clip-text
          text-transparent
          drop-shadow-lg
        ">
          {label}
        </h3>
      )}

      <div className="
        flex items-center justify-center
        gap-3 sm:gap-4
        w-full
      ">

        <span className="
          h-px w-10 sm:w-16 md:w-20
          bg-gradient-to-r
          from-transparent to-[#D9B16A]
        " />

        <span className="
  text-[#D9B16A]
  text-4xl
  sm:text-5xl
  md:text-6xl
  font-allura
  leading-none
  drop-shadow-lg
">
  {icon}
</span>

        <span className="
          h-px w-10 sm:w-16 md:w-20
          bg-gradient-to-l
          from-transparent to-[#D9B16A]
        " />

      </div>

    </div>
  );
}


