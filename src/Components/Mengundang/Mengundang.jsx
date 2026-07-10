import { FaHeart } from "react-icons/fa";
import MandalaSection from "../Mandala/MandalaSection";

export default function Mengundang() {
  const keluarga = [
    {
      title: "Keluarga Pria",
      names: [
        "Bapak Ahmad & Ibu Siti",
        "Keluarga Besar Ahmad",
        "Keluarga Besar Pratama",
      ],
    },
    {
      title: "Keluarga Wanita",
      names: [
        "Bapak Budi & Ibu Rina",
        "Keluarga Besar Budi",
        "Keluarga Besar Wijaya",
      ],
    },
  ];

  return (
    <section
      id="turut-mengundang"
      className="relative z-10 px-5 py-24"
    >
      <MandalaSection />

      <div className="mx-auto max-w-5xl text-center">

        {/* Icon */}
        <FaHeart
          className="
          mx-auto
          text-4xl
          text-[#D9B16A]
          drop-shadow-[0_0_12px_rgba(217,177,106,.4)]
          animate-pulse
          "
        />

       


        <h2
          data-aos="fade-up"
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
        Turut Mengundang
        </h2>


        <div className="my-6 flex items-center justify-center gap-4">

          <div className="h-px w-16 bg-white/30" />

          <FaHeart className="text-[#D9B16A] animate-pulse" />

          <div className="h-px w-16 bg-white/30" />

        </div>


        <p
          className="
          mx-auto
          max-w-2xl
          font-space
          leading-8
          text-white/80
          "
        >
          Dengan penuh rasa hormat, kami mengundang keluarga besar
          dan sahabat untuk turut hadir memberikan doa terbaik
          bagi kedua mempelai.
        </p>


      </div>



      {/* CARD FAMILY */}

      <div
        className="
        mx-auto
        mt-12
        grid
        max-w-5xl
        gap-6
        sm:grid-cols-2
        "
      >

        {keluarga.map((item,index)=>(
          
          <div
          key={index}
          data-aos="fade-up"
          className="
          rounded-[35px]
          border
          border-[#D9B16A]/30

          bg-white/5

          backdrop-blur-md

          p-6
          sm:p-8

          text-center

          shadow-2xl

          transition
          duration-300

          hover:border-[#D9B16A]
          hover:-translate-y-1
          "
          >

            <h3
            className="
            font-allura
            text-3xl
            sm:text-4xl

            bg-gradient-to-b
            from-[#FFF5D6]
            via-[#D9B16A]
            to-[#8A6438]

            bg-clip-text
            text-transparent
            "
            >
              {item.title}
            </h3>


            <div
            className="
            mt-6
            space-y-3
            "
            >

              {item.names.map((name,i)=>(

                <p
                key={i}
                className="
                font-space
                text-sm
                sm:text-base
                text-white/80
                "
                >
                  {name}
                </p>

              ))}

            </div>


          </div>

        ))}

      </div>


      {/* FOOTER TEXT */}

      <p
      className="
      mt-12
      text-center
      font-allura
      text-3xl
      text-[#D9B16A]
      "
      >
        Merupakan suatu kehormatan bagi kami
      </p>


    </section>
  );
}