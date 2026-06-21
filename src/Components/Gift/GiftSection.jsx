import MandalaSection from "../Mandala/MandalaSection";
import GiftHeader from "./GiftHeader";
import GiftCard from "./GiftCard";
import GiftAddres from "./GiftAddres";

export default function GiftSection() {
  return (
    <section className="relative overflow-hidden py-24">

      <MandalaSection />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6">

        <GiftHeader />

        <div className="mt-12 flex w-full flex-col gap-6">

          <GiftCard
            bank="BCA"
            number="1234567890"
            name="Aditya Pratama"
          />

          <GiftCard
            bank="Mandiri"
            number="9876543210"
            name="Dinda Anjani"
          />

        </div>

        <GiftAddres />

      </div>

    </section>
  );
}