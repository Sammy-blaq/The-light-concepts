"use strict";

// COMPONENTS
import AdminSubHeader from "./AdminSubHeader";
import SearchBar from "./SearchBar";

// ICONS
import { IoMdMenu } from "react-icons/io";

import { useContext } from "react";

// getting admin page context
import { AdminContext } from "../../pages/Admin";

const AdminBookings = () => {
  const { toggleAside } = useContext(AdminContext);
  return (
    <div className="rounded-xl shadow-sm ">
      {/* Mobile Button to toggle aside bar */}
      <div className="my-10 md:hidden">
        <div className="flex items-center gap-8">
          <button
            onClick={toggleAside}
            type="button"
            className="p-4 border border-border rounded-lg cursor-pointer"
          >
            <IoMdMenu />
          </button>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row items-center justify-between mr-12">
        <AdminSubHeader
          containerClass={"p-12 flex flex-col gap-2 md:mt-8"}
          title={"All Bookings"}
          titleClass={"text-4xl font-semibold text-text-foreground"}
          text={`A complet list of all bookings from all users.`}
          textClass={"text-muted-foreground text-2xl"}
        />
        <SearchBar
          placeholder={`Search by customer id, event or state...`}
          className={
            "border border-border w-100 sm:w-120 px-14 p-2 md:p-4 md:w-150 md:px-14 rounded-xl"
          }
          continerClass={`flex items-center`}
          iconClass={`w-10 h-10 translate-x-12`}
        />
      </div>
      <div className="p-4 pt-0 bg-background-accent">
        <div className="relative w-full overflow-auto">
          <table className="w-full caption-bottom text-sm ">
            <thead className="[&_tr]:border-b">
              <tr className="border-b border-border transition-colors hover:bg-background data-[state=selected]:bg-muted">
                <th className="h-12 p-8 text-left capitalize  text-2xl align-middle font-medium text-muted-foreground">
                  Customer Id
                </th>
                <th className="h-12 p-8 text-left capitalize  text-2xl align-middle font-medium text-muted-foreground">
                  Event Type
                </th>
                <th className="h-12 p-8 text-left capitalize  text-2xl align-middle font-medium text-muted-foreground">
                  Event Date
                </th>
                <th className="h-12 p-8 text-left capitalize  text-2xl align-middle font-medium text-muted-foreground">
                  Event State
                </th>
                <th className="h-12 p-8 text-right capitalize  text-2xl align-middle font-medium text-muted-foreground">
                  Address
                </th>
              </tr>
            </thead>
            <tbody className="[&_tr:last-child]:border-0">
              <tr className="border-b border-border transition-colors text-2xl hover:bg-background data-[state=selected]:bg-muted">
                <td className="p-8 align-middle text-text-foreground [&:has([role=checkbox])]:pr-0">
                  rahilat@gmail.com
                </td>
                <td className="p-8 align-middle text-text-foreground [&:has([role=checkbox])]:pr-0">
                  Birthday Party
                </td>
                <td class="p-8 align-middle text-text-foreground [&amp;:has([role=checkbox])]:pr-0 text-left">
                  23/11/2025,6:00PM
                </td>
                <td class="p-8 align-middle text-text-foreground [&amp;:has([role=checkbox])]:pr-0 text-left">
                  Abuja
                </td>
                <td class="p-8 align-middle text-text-foreground [&amp;:has([role=checkbox])]:pr-0 text-right">
                  Chelsea hotel
                </td>
              </tr>
              <tr className="border-b border-border transition-colors text-2xl hover:bg-background data-[state=selected]:bg-muted">
                <td className="p-8 align-middle text-text-foreground [&:has([role=checkbox])]:pr-0">
                  bling@gmail.com
                </td>
                <td className="p-8 align-middle text-text-foreground [&:has([role=checkbox])]:pr-0">
                  Wedding
                </td>
                <td class="p-8 align-middle text-text-foreground [&amp;:has([role=checkbox])]:pr-0 text-left">
                  23/12/2025,10:00AM
                </td>
                <td class="p-8 align-middle text-text-foreground [&amp;:has([role=checkbox])]:pr-0 text-left">
                  Kano
                </td>
                <td class="p-8 align-middle text-text-foreground [&amp;:has([role=checkbox])]:pr-0 text-right">
                  BUK New Site
                </td>
              </tr>
              <tr className="border-b border-border transition-colors text-2xl hover:bg-background data-[state=selected]:bg-muted">
                <td className="p-8 align-middle text-text-foreground [&:has([role=checkbox])]:pr-0">
                  denis@gmail.com
                </td>
                <td className="p-8 align-middle text-text-foreground [&:has([role=checkbox])]:pr-0">
                  Corporate Event
                </td>
                <td class="p-8 align-middle text-text-foreground [&amp;:has([role=checkbox])]:pr-0 text-left">
                  13/12/2025,12:00PM
                </td>
                <td class="p-8 align-middle text-text-foreground [&amp;:has([role=checkbox])]:pr-0 text-left">
                  Kano
                </td>
                <td class="p-8 align-middle text-text-foreground [&amp;:has([role=checkbox])]:pr-0 text-right">
                  BUK Old Site
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminBookings;
