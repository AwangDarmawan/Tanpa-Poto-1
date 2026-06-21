import Mandala from "./Mandala";

export default function MandalaSection() {
  return (
    <>
      {/* ===================== */}
      {/* Atas Kiri */}
      {/* ===================== */}
      <Mandala
        position="top-[-120px] left-[-130px] lg:top-[-200px] lg:left-[-200px] md:top-[-200px] md:left-[-200px] sm:top-[-99px] sm:left-[-100px]"
        
      />

      {/* ===================== */}
      {/* Atas Kanan */}
      {/* ===================== */}
      <Mandala
        position="top-[-120px] right-[-130px] lg:top-[-200px] lg:right-[-200px] md:top-[-200px] md:right-[-200px] sm:top-[-99px] sm:right-[-100px]"
   
        // rotate="reverse"
      />

      {/* ===================== */}
      {/* Bawah Kiri */}
      {/* ===================== */}
      <Mandala
        position="bottom-[-130px] left-[-130px] lg:bottom-[-200px] lg:left-[-200px] md:bottom-[-200px] md:left-[-200px] sm:bottom-[-99px] sm:left-[-100px]"
    
        // rotate="reverse"
      />

      {/* ===================== */}
      {/* Bawah Kanan */}
      {/* ===================== */}
      <Mandala
        position="bottom-[-130px] right-[-130px] lg:bottom-[-200px] lg:right-[-200px] md:bottom-[-200px] md:right-[-200px] sm:bottom-[-99px] sm:right-[-100px]"
       
      />
    </>
  );
}