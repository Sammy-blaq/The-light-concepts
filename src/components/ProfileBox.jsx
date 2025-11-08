"use strict";

// COMPONENTS

// ICONS
import { IoIosPerson } from "react-icons/io";

import { Link } from "react-router-dom";

const ProfileBox = ({ ref, title, email, text, icon }) => {
  return (
    <div
      ref={ref}
      className="absolute hidden top-20 right-6 z-20 overflow-hidden w-100 shadow-xl transition-display duration-300 ease-in"
    >
      <div className=" flex-col items-center justify-center rounded-lg bg-background-accent shadow-xl border border-border overflow-hidden w-full">
        <div className="flex flex-col p-4 gap-4 my-4 border-b border-b-border">
          <h1 className="capitalize text-text-foreground text-[1.6rem] font-bold">
            {title}
          </h1>
          <p className="text-muted-foreground text-[1.4rem] my-3">{email}</p>
        </div>

        <div>
          <Link
            to="/profile"
            className="flex items-center gap-4 w-full cursor-pointer p-3 rounded-lg hover:bg-tertiary text-text-foreground m-2 transition-all duration-300 ease-in"
          >
            <IoIosPerson /> Profile
          </Link>
          <button
            className={
              "flex items-center gap-4 w-full cursor-pointer p-3 rounded-lg hover:bg-tertiary text-text-foreground m-2 transition-all duration-300 ease-in"
            }
          >
            {icon} {text}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileBox;
