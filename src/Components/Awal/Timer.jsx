import { useEffect, useState } from "react";

const weddingDate = new Date("2026-08-17T08:00:00").getTime();

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState(getTime());

  function getTime() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance <= 0) {
      return {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      };
    }

    return {
      days: String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, "0"),
      hours: String(
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      ).padStart(2, "0"),
      minutes: String(
        Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      ).padStart(2, "0"),
      seconds: String(
        Math.floor((distance % (1000 * 60)) / 1000)
      ).padStart(2, "0"),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const items = [
    { value: timeLeft.days, label: "Hari" },
    { value: timeLeft.hours, label: "Jam" },
    { value: timeLeft.minutes, label: "Menit" },
    { value: timeLeft.seconds, label: "Detik" },
  ];

  return (
    <div className="mt-8 flex justify-center gap-3 sm:gap-5">
      {items.map((item) => (
        <div
          key={item.label}
          className="w-16 sm:w-20 rounded-xl border border-[#D9B16A]/30 bg-white/5 backdrop-blur-md py-3"
        >
          <h2 className="text-xl sm:text-3xl font-bold text-[#D9B16A]">
            {item.value}
          </h2>

          <p className="mt-1 text-[10px] sm:text-xs uppercase tracking-widest text-white/80">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}