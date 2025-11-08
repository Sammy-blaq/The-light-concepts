import React from "react";

const Complaint = () => {
  return (
    <div className="flex flex-col gap-12 sm:gap-18 text-text-foreground">
      <header className="flex flex-col gap-6 sm:gap-10">
        <h1 className="font-bold text-[1.6rem] sm:text-[2.4rem] leading-7 sm:leading-0">
          Submit a Complaint
        </h1>
        <p className="text-muted-foreground text-[1.4rem] sm:text-[1.6rem] leading-7 sm:leading-0">
          We are sorry for any inconvenience. Please let us know what went
          wrong.
        </p>
      </header>
      <form action="" method="post" className="flex flex-col gap-12">
        <div className="flex flex-col gap-2">
          <label htmlFor="complaint" className="text-[1.6rem] font-medium">
            Complaint Details
          </label>
          <textarea
            name=""
            id="complaint"
            className="w-full border border-border bg-background-accent rounded-lg min-h-50 px-4 py-4 text-[1.4rem] mt-4 placeholder:leading-7 placeholder:sm:leading-0"
            placeholder="Please describe the issue in detail..."
          ></textarea>
        </div>
        <div className="w-full h-full">
          <button
            type="button"
            className=" p-8 text-white rounded-lg cursor-pointer bg-primary hover:bg-primary/80 transition-all duration-300 ease-in-out leading-7 sm:leading-0"
          >
            Submit Complaint
          </button>
        </div>
      </form>
    </div>
  );
};

export default Complaint;
