import PropTypes from "prop-types";
import Sharebutton from "./ShareButton";

const Preview = ({ submittedName, invitationLink, shareText }) => (
  <div className=" relative z-10  max-w-3xl w-full mt-6 p-6 bg-gray-50 rounded-xl shadow-md ">
    <p className="whitespace-pre-line leading-relaxed text-[#37558D] font-space ">
       <strong>{submittedName}</strong>

      {"\n\n"}

      {shareText.split(invitationLink).map((part, index, arr) => (
        <span key={index}>
          {part}
          {index < arr.length - 1 && (
            <a
              href={invitationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              {invitationLink}
            </a>
          )}
        </span>
      ))}
    </p>

    <Sharebutton
      invitationLink={invitationLink}
      shareText={shareText}
    />
  </div>
);

Preview.propTypes = {
  submittedName: PropTypes.string.isRequired,
  invitationLink: PropTypes.string.isRequired,
  shareText: PropTypes.string.isRequired,
};

export default Preview;