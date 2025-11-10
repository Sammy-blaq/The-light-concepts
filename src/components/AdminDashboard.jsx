"use strict";

// Components
import AdminSubHeader from "./AdminSubHeader";
import OverviewCard from "./OverviewCard";
import FieldContainer from "./FieldContainer";
import InputField from "./InputField";
import ImageUpload from "./ImageUpload";
import Button from "./Button";

// ICONS
import { IoMdPeople } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { BiSolidComment } from "react-icons/bi";
import { IoMdMenu } from "react-icons/io";
import { MdOutlineFileUpload } from "react-icons/md";

import { useContext } from "react";

// getting admin page context
import { AdminContext } from "../../pages/Admin";

const AdminDashboard = () => {
  const { toggleAside } = useContext(AdminContext);

  return (
    <div>
      <AdminSubHeader
        containerClass={"flex-col gap-10 pt-16 hidden md:flex"}
        title={`Admin Dashboard`}
        titleClass={`font-bold text-[2.8rem] text-text-foreground capitalize`}
        text={`Overview of your application.`}
        textClass={`text-muted-foreground`}
      />

      <div className="mt-12 md:hidden">
        <div className="flex items-center gap-8">
          <button
            onClick={toggleAside}
            type="button"
            className="p-4 border border-border rounded-lg cursor-pointer"
          >
            <IoMdMenu />
          </button>
          <h1 className="text-4xl font-bold">Dashboard</h1>
        </div>
      </div>

      {/* OVERVIEW CARDS */}
      <div className="grid gap-12 mt-16 md:grid-cols-2 lg:grid-cols-4">
        <OverviewCard
          title={"Total Users"}
          icon={<IoMdPeople />}
          number={"150"}
        />
        <OverviewCard
          title={"Total Orders"}
          icon={<FaShoppingCart />}
          number={"+2350"}
        />
        <OverviewCard
          title={"Total Bookings"}
          icon={<FaCalendar />}
          number={"+573"}
        />
        <OverviewCard
          title={"Pending Complaints"}
          icon={<BiSolidComment />}
          number={"12"}
        />
      </div>

      {/* Image upload */}

      <div className="rounded-lg border border-border bg-background-accent shadow-sm my-8">
        <AdminSubHeader
          title={"Upload New Gallery Image"}
          text={"Add a new image to the main gallery page."}
          containerClass={"flex-col gap-10 pt-16 hidden md:flex mx-16 my-4"}
          titleClass={`font-bold text-[2.8rem] text-text-foreground capitalize`}
          textClass={`text-muted-foreground`}
        />
        <div className="p-10 md:p-16 grid md:grid-cols-2 gap-12 items-center w-full">
          <div>
            <FieldContainer
              containerClass={"flex flex-col gap-3 mb-16"}
              labelClass={"capitalize text-text-foreground font-medium"}
              labelFor={"image-upload"}
              title={"Image Title"}
              inputField={
                <InputField
                  type={"text"}
                  className={
                    "flex border border-border bg-background rounded-lg p-4 w-full mt-4 placeholder:text-text-foreground placeholder:text-[1.4rem]"
                  }
                  id={"image-upload"}
                  placeholder={"e.g., Beautiful Sunset in Lagos"}
                  required
                />
              }
            />
            <div className="flex flex-col gap-3 mb-6">
              <label
                htmlFor="image-description"
                className="text-text-foreground"
              >
                Description
              </label>
              <textarea
                id="image-description"
                className="w-full border border-border bg-background rounded-lg min-h-30 px-4 py-4 text-[1.4rem] mt-4 placeholder:text-text-foreground placeholder:leading-7 sm:placeholder:leading-0"
                placeholder="A short, captivating description of the image."
                rows={4}
              ></textarea>
            </div>
          </div>

          <ImageUpload label={"Image File"} />
        </div>
        <div className="flex items-center justify-center px-10 md:mx-16">
          <Button
            icon={<MdOutlineFileUpload className="text-4xl" />}
            className={
              "w-full bg-primary hover:bg-primary/80 rounded-lg py-6 mt-8 flex items-center justify-center gap-4 text-white text-[1.6rem] cursor-pointer transition-all duration-300 ease-in-out my-16"
            }
            text={"Add to Gallery"}
          />
        </div>
      </div>

      <div className="grid gap-12 md:grid-cols-2 mt-12">
        <div className="bg-background-accent drop-shadow-sm p-10 rounded-xl flex flex-col gap-12">
          <AdminSubHeader
            containerClass={"flex flex-col gap-2"}
            title={"Recent Orders"}
            titleClass={
              "text-4xl font-semibold  text-text-foreground capitalize"
            }
            text={"A list of the most recent orders."}
            textClass={"text-2xl text-muted-foreground"}
          />
          <div className="p-4 pt-0 overflow-x-auto">
            <div className=" relative w-full overflow-x-auto md:overflow-x-visible overflow-y-hidden scroll-smooth">
              <table className="w-full caption-bottom text-sm">
                <thead className="[&_tr]:border-b">
                  <tr className="border-b border-border transition-colors hover:bg-background data-[state=selected]:bg-muted">
                    <th className="h-12 p-8 text-left capitalize  text-2xl align-middle font-medium text-muted-foreground">
                      customer
                    </th>
                    <th className="h-12 p-8 text-left capitalize text-2xl align-middle font-medium text-muted-foreground">
                      status
                    </th>
                    <th className="h-12 p-8 text-right capitalize  text-2xl align-middle font-medium text-muted-foreground">
                      amount
                    </th>
                  </tr>
                </thead>
                <tbody className="[&_tr:last-child]:border-0">
                  <tr className="border-b border-border transition-colors text-2xl hover:bg-background data-[state=selected]:bg-muted">
                    <td className="p-8 align-middle text-text-foreground [&:has([role=checkbox])]:pr-0">
                      User1
                    </td>
                    <td className="p-8 align-middle text-text-foreground [&:has([role=checkbox])]:pr-0">
                      <div className="inline-flex items-center rounded-full border  border-border px-2.5 py-0.5 text-xl font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 capitalize">
                        Completed
                      </div>
                    </td>
                    <td class="p-8 align-middle text-text-foreground [&amp;:has([role=checkbox])]:pr-0 text-right">
                      ₦115,000
                    </td>
                  </tr>

                  <tr className="border-b border-border transition-colors text-2xl hover:bg-background data-[state=selected]:bg-muted">
                    <td className="p-8 align-middle text-text-foreground [&:has([role=checkbox])]:pr-0">
                      User2
                    </td>
                    <td className="p-8 align-middle text-text-foreground [&:has([role=checkbox])]:pr-0">
                      <div className="inline-flex items-center rounded-full border  border-border px-2.5 py-0.5 text-xl font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 capitalize">
                        Processing
                      </div>
                    </td>
                    <td class="p-8 align-middle text-text-foreground [&amp;:has([role=checkbox])]:pr-0 text-right">
                      ₦75,000
                    </td>
                  </tr>
                  <tr className="border-b border-border transition-colors text-2xl hover:bg-background data-[state=selected]:bg-muted">
                    <td className="p-8 align-middle text-text-foreground [&:has([role=checkbox])]:pr-0">
                      User3
                    </td>
                    <td className="p-8 align-middle text-text-foreground [&:has([role=checkbox])]:pr-0">
                      <div className="inline-flex items-center rounded-full border  border-border px-2.5 py-0.5 text-xl font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 capitalize">
                        Pending
                      </div>
                    </td>
                    <td class="p-8 align-middle text-text-foreground [&amp;:has([role=checkbox])]:pr-0 text-right">
                      ₦92,000
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="bg-background-accent drop-shadow-sm p-10 rounded-xl">
          <AdminSubHeader
            containerClass={"flex flex-col gap-2"}
            title={"Recent Users"}
            titleClass={
              "text-4xl font-semibold  text-text-foreground capitalize"
            }
            text={"The latest users who signed up."}
            textClass={"text-2xl text-muted-foreground"}
          />
          <div className="py-12">
            <div className="flex items-center gap-8 not-last:pb-10">
              <div className="w-16 h-16 rounded-[50%] bg-background-accent flex items-center justify-center">
                <span className="capitalize">J</span>
              </div>
              <div className="flex flex-col gap-8">
                <p className="text-text-foreground text-[1.6rem] font-semibold capitalize">
                  John Doe
                </p>
                <p className="text-muted-foreground text-[1.4rem] leading-2">
                  john.doe@example.com
                </p>
              </div>
            </div>
            <div className="flex items-center gap-8 not-last:pb-10">
              <div className="w-16 h-16 rounded-[50%] bg-background-accent flex items-center justify-center">
                <span className="capitalize">J</span>
              </div>
              <div className="flex flex-col gap-8">
                <p className="text-text-foreground text-[1.6rem] font-semibold capitalize">
                  Jane Smith
                </p>
                <p className="text-muted-foreground text-[1.4rem] leading-2">
                  jane.smith@example.com
                </p>
              </div>
            </div>
            <div className="flex items-center gap-8 not-last:pb-10">
              <div className="w-16 h-16 rounded-[50%] bg-background-accent flex items-center justify-center">
                <span className="capitalize">a</span>
              </div>
              <div className="flex flex-col gap-8">
                <p className="text-text-foreground text-[1.6rem] font-semibold capitalize">
                  Alice Johnson
                </p>
                <p className="text-muted-foreground text-[1.4rem] leading-2">
                  alic.johnson@example.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
