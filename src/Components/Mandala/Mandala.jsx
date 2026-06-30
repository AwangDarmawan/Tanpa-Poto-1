import PropTypes from "prop-types";
import iconmandala from "../../assets/Img/Golden.png";


export default function Mandala({
  position,
  rotate = "normal",
  size = "w-[250px] sm:w-[200px] md:w-[400px] lg:w-[400px] xl:w-[400px] 2xl:w-[400px]",
 
  opacity = "opacity-90",
}) {
  return (
    <img
      src={iconmandala}
      alt=""
      aria-hidden="true"
      draggable={false}
      loading="eager"
      decoding="async"
      className={`
        absolute
        pointer-events-none
        select-none
        z-0
        
        ${position}
        ${size}
        ${opacity}
        ${
          rotate === "reverse"
            ? "animate-mandala-reverse"
            : "animate-mandala"
        }
      `}
    />
  );
}

Mandala.propTypes = {
  position: PropTypes.string.isRequired,
  rotate: PropTypes.oneOf(["normal", "reverse"]),
  size: PropTypes.string,
  opacity: PropTypes.string,
};