"use strict";

// Icons
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const HeaderButton = ({ onClick }) => {
  return (
    <>
      <button
        className="btn-mobile-nav p-4 border border-primary rounded-md cursor-pointer lg:hidden"
        onClick={onClick}
      >
        <IoMdMenu
          className="icon-mobile-nav group-[.nav-open]/nav:hidden"
          name="menu-outline"
        />
        <IoMdClose
          className="icon-mobile-nav hidden group-[.nav-open]/nav:block group-[.nav-open]/nav:border group-[.nav-open]/nav:rounded-md group-[.nav-open]/nav:p-4 group-[.nav-open]/nav:border-primary group-[.nav-open]/nav:z-50"
          name="close-outline"
        />
      </button>
    </>
  );
};

export default HeaderButton;
