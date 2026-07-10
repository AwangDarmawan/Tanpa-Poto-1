import AkadSection from "../Components/Akad/AkadSection"
import RumSection from "../Components/Ar-Rum/RumSection"
import Hero from "../Components/Awal/Hero"
import PersonSection from "../Components/Bismilah/PersonSection"
import Footer from "../Components/Footer"
import GiftSection from "../Components/Gift/GiftSection"
import ResepsiSection from "../Components/Resepsi/ResepsiSection"
import RsvpSection from "../Components/Rsvp/RsvpSection"
import Mengundang from "../Components/Mengundang/Mengundang"
import { useEffect, useRef, useState } from "react"
import { Volume2, VolumeX } from "lucide-react"
import Lagu from "../assets/Vd/Bergema.mp3"

function HomePage() {
     const audioRef = useRef(null);
const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
  const shouldPlay = localStorage.getItem("playMusic");

  if (shouldPlay === "true") {
    audioRef.current?.play().then(() => {
      setIsPlaying(true);
    }).catch(() => {});
  }
}, []);
  return (

    <>
      <Hero/>
      <PersonSection/>
      <AkadSection/>
      <ResepsiSection/>
      <GiftSection/>
      <RumSection/>
      <RsvpSection/>
      <Mengundang/>
      <Footer/>
         <button
  onClick={() => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }}
  


  


  className="
     fixed
    bottom-6
    right-5
    z-50
    w-12
    h-12
    rounded-full
    border
  border-white
 text-white
  bg-[#D9B16A]
    flex
    items-center
    justify-center
      shadow-[0_4px_15px_rgba(62,92,147,0.5)]
    
"
>
  {isPlaying ? (
     <Volume2 size={22} />
  ) : (
   
       <VolumeX size={22} />
   
     )}
</button>

     {/* musik */}
     <audio ref={audioRef} loop>
  <source src={Lagu} type="audio/mp3" />
   </audio>
    </>
  )
}

export default HomePage
