// export default function PersonCard({
// //   title,
//   name,
//   parent,
// }) {
//   return (
//     <div>

//       <h2 data-aos="fade-down-right"
//         className="
//         font-allura
        
//         text-4xl
//         sm:text-5xl
//         md:text-6xl
//             bg-gradient-to-b
//     from-[#F8E8B5]
//     via-[#D9B16A]
//     to-[#8A6438]
//     bg-clip-text
//     text-transparent
//     drop-shadow-lg
//       "
//       >
//         {name}
//       </h2>

//       <p
//         className="
//         mt-2
//         text-white
//         text-sm
//         sm:text-base
//         font-space italic
//       "
//       >
//         {parent}
//       </p>

//     </div>
//   );
// }


export default function PersonCard({ name, parent }) {
  return (
    <div className="
      w-full
      flex flex-col
      items-center
      justify-center
      px-2
    ">

      <h2
        data-aos="fade-down-right"
        className="
          font-allura
          text-4xl
          sm:text-5xl
          md:text-6xl
          leading-tight
          max-w-full
          break-words
          bg-gradient-to-b
          from-[#F8E8B5]
          via-[#D9B16A]
          to-[#8A6438]
          bg-clip-text
          text-transparent
          drop-shadow-lg
        "
      >
        {name}
      </h2>

      <p className="
        mt-3
        max-w-full
        text-white
        text-sm
        sm:text-base
        leading-relaxed
        font-space italic
        break-words
      ">
        {parent}
      </p>

    </div>
  );
}
