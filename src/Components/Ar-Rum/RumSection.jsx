import MandalaSection from "../Mandala/MandalaSection";
import Rum from "./Rum";

export default function RumSection() {
  return (
    <section className="relative overflow-hidden py-24">
      <MandalaSection />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6">

        <Rum />

      </div>
    </section>
  );
}