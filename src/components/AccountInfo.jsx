"use strict";

// COMPONENTS
import SubHeader from "./SubHeader";

// ICONS
import { CiLogout } from "react-icons/ci";

const AccountInfo = () => {
  return (
    <div className="flex flex-col gap-18 text-text-foreground">
      <div className="flex flex-col gap-6 sm:gap-10">
        <h1 className="text-[1.8rem] leading-7 sm:text-[2.6rem] capitalize font-bold ">
          Account Information
        </h1>
        <p className="text-muted-foreground leading-7 sm:leading-0">
          Manage your account details and settings.
        </p>
      </div>
      <div className="flex flex-col gap-12">
        <div className="flex gap-4">
          <p className="font-bold capitalize">Email:</p>
          <p className="text-[1.4rem] sm:text-[1.6rem]">you@example.com</p>
        </div>
        <div className="flex gap-4">
          <p className="font-bold uppercase">uid:</p>
          <p className="text-[1.4rem] sm:text-[1.6rem]">
            TLCx8oEbtQZZBgutkLlna5
          </p>
        </div>
        <div>
          <button className="flex items-center gap-4 cursor-pointer p-3 rounded-lg bg-background px-8 py-6 border border-border hover:bg-tertiary text-text-foreground m-2 transition-all duration-300 ease-in capitalize">
            <CiLogout className="text-[1.6rem]" /> Sign out
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
