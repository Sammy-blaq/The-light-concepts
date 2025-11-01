"use strict";

const Overlay = ({ ref, onClick }) => {
  return (
    <div
      onClick={onClick}
      ref={ref}
      className="overlay hidden absolute top-0 left-0 w-full h-full bg-[#00000099] backdrop-blur-sm z-5"
    ></div>
  );
};

export default Overlay;
