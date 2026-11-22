
import PersonCard from "./PersonCard";
import Divider from "./Divider";

export default function WeddingSection() {
  return (
    <div className="
      mt-12 sm:mt-14
      space-y-8 sm:space-y-10
      w-full
    ">

      {/* JUDUL PERNIKAHAN */}
      
      {/* MEMPELAI PRIA */}
      <PersonCard
        name="Muhammad Agung Maulana"
        parent="Putra Bpk Usep Saepuloh (Mbep Pindang) & Ibu Mulyati"
      />

      {/* PEMBATAS */}
      <Divider icon="&" />

      {/* MEMPELAI WANITA */}
      <PersonCard
        name="Elva Sofiah"
        parent="Putri dari Bapak H. Mumu Muhammad & Ibu Dedeh Aliyah"
      />

     

    </div>
  );
}
