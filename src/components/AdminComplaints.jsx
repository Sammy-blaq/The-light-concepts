"use strict";

// COMPONENTS
import AdminSubHeader from "./AdminSubHeader";
import SearchBar from "./SearchBar";

// ICONS
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";

import { useContext } from "react";

// getting admin page context
import { AdminContext } from "../../pages/Admin";

import { useState } from "react";

const AdminComplaints = () => {
  const { toggleAside } = useContext(AdminContext);

  // State to track which accordion is open
  const [openIndex, setOpenIndex] = useState(null);

  // Toggle function — closes one if another opens
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const complaintsList = [
    {
      user: "user1",
      date: "24/11/2025, 6:37PM",
      text: "The print quality was no as expected, the colors seemed faded.",
    },
    {
      user: "user1",
      date: "09/10/2025",
      text: "The print quality was no as expected, the colors seemed faded.",
    },
  ];
  return (
    <div className="rounded-xl shadow-sm ">
      {/* Mobile Button to toggle aside bar */}
      <div className="my-10 md:hidden">
        <div className="flex items-center gap-8">
          <button
            onClick={toggleAside}
            type="button"
            className="p-4 border border-[#ddddb5] rounded-lg cursor-pointer"
          >
            <IoMdMenu />
          </button>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row items-center justify-between mr-12">
        <AdminSubHeader
          containerClass={"p-12 flex flex-col gap-2 md:mt-8"}
          title={"All Complaints"}
          titleClass={"text-4xl font-semibold text-[#504230]"}
          text={`Review and manage all users submitted complaints.`}
          textClass={"text-[#8a775c] text-2xl"}
        />
        <SearchBar
          placeholder={`Search by customer id ...`}
          className={
            "border border-[#ddddb5] w-100 sm:w-120 px-14 p-2 md:p-4 md:w-150 md:px-14 rounded-xl"
          }
          continerClass={`flex items-center`}
          iconClass={`w-10 h-10 translate-x-12`}
        />
      </div>
      <div className="p-4 pt-0 bg-[#f7f7e3] rounded-xl">
        <div className="relative w-full overflow-auto">
          {complaintsList.map((complaint, index) => (
            <div
              key={index}
              onClick={() => {
                toggleAccordion(index);
              }}
              className="p-8 flex flex-col gap-12 border-b border-[#ddddb5] cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-8 group">
                  <p className="text-[#504230] leading-7 sm:leading-0">
                    Complaint from:{complaint.user}
                  </p>
                  <p className="text-[#8a775c]">{complaint.date}</p>
                </div>
                <p>
                  <FaAngleDown
                    className={`${openIndex === index ? "hidden" : "block"}`}
                  />
                  <FaAngleUp
                    className={`${openIndex === index ? "block" : "hidden"}`}
                  />
                </p>
              </div>
              {openIndex === index && (
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className={"text-[#504230] text-2xl"}>{complaint.text}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminComplaints;
