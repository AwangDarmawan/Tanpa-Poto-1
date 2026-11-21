
import PersonCard from "./PersonCard";
import Divider from "./Divider";

export default function KhitananSection() {
  return (
    <div className="
      w-full
      mt-10 sm:mt-12
      space-y-7 sm:space-y-9
    ">

      {/* JUDUL TASYAKURAN */}
      <Divider
        icon="✦"
        label="Tasyakuran Khitanan"
      />

      {/* NAMA ANAK */}
      <PersonCard
        name="Muhammad Hairaz Arsyakhi"
        parent="Putra dari Bapak Muhammad Fahruroji & Ibu Siti Nur Fatimah Azzahra"
      />



    </div>
  );
}
