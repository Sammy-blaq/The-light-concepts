"use strict";

// COMPONENTS
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import { Link } from "react-router-dom";

// ICONS
import { IoIosPersonAdd } from "react-icons/io";

const SignUp = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* MAIN CONTENT */}
      <main
        className="main-content flex flex-col items-center justify-center flex-1 w-full h-full"
        id="top"
      >
        <section className="flex items-center justify-center w-full h-full">
          <div className="flex flex-col items-center justify-center w-200 mx-6 rounded-lg bg-background-accent shadow-xl border border-border my-24">
            <div className="flex flex-col p-[2.4rem] gap-8 text-center my-8">
              <h1 className="capitalize text-text-foreground text-[3rem] font-bold">
                Create an Account
              </h1>
              <p className="text-muted-foreground text-[1.4rem] mt-3">
                Join our community of photography lovers.
              </p>
            </div>
            <div className="p-[2.4rem] pt-0 w-full">
              {/* SIGNUP FORM */}
              <form action="" class="space-y-6 w-full">
                <div className="mb-16">
                  <label
                    for="full-name"
                    className="capitalize text-text-foreground font-medium"
                  >
                    Full Name
                  </label>
                  <input
                    type="tex"
                    className="flex text-[1.4rem] border border-border bg-background rounded-lg p-4 w-full mt-4 placeholder:text[#8a775c]"
                    placeholder="John Doe"
                    id="full-name"
                  />
                </div>
                <div className="space-y-2 mt-[2.4rem] mb-16">
                  <label
                    for="phone"
                    className="capitalize text-text-foreground font-medium"
                  >
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    className="flex text-[1.4rem] border border-border bg-background rounded-lg p-4 w-full mt-4 placeholder:text-text-foreground"
                    placeholder="e.g., +1 (123) 456 789"
                    id="phone"
                  />
                </div>
                <div className="space-y-2 mt-[2.4rem] mb-16">
                  <label
                    for="email"
                    className="capitalize text-text-foreground font-medium"
                  >
                    Email
                  </label>

                  <input
                    type="email"
                    className="flex text-[1.4rem] border border-border bg-background rounded-lg p-4 w-full mt-4 placeholder:text-text-foreground"
                    placeholder="e.g., you@example.com"
                    id="email"
                  />
                </div>
                <div className="space-y-2 mt-[2.4rem] mb-16">
                  <label
                    for="password"
                    className="capitalize text-text-foreground font-medium"
                  >
                    Password
                  </label>

                  <input
                    type="password"
                    className="flex text-[1.4rem] border border-border bg-background rounded-lg p-4 w-full mt-4 placeholder:text-text-foreground "
                    placeholder="**************"
                    id="password"
                  />
                </div>
                <div className="space-y-2 mt-[2.4rem] mb-16">
                  <label
                    for="confirm-Password"
                    className="capitalize text-text-foreground font-medium"
                  >
                    Confirm Password
                  </label>

                  <input
                    type="passord"
                    className="flex text-[1.4rem] border border-border bg-background rounded-lg p-4 w-full mt-4 placeholder:text-text-foreground"
                    placeholder="Enter password again..."
                    id="confirm-password"
                  />
                </div>
                <button
                  type="button"
                  className="flex items-center justify-center gap-4 text-white bg-primary px[1rem] py-6 rounded-md mt-[2.4rem] w-full mb-16 cursor-pointer hover:bg-primary/80 transition-all duration-300 ease-in-out"
                >
                  <IoIosPersonAdd className="text-[1.6rem]" />
                  Sign Up
                </button>
              </form>
              <div className="my-[2.4rem]">
                <div className="flex justify-center items-center mt-16 text-muted-foreground">
                  <p>Already have an account? </p>
                  <Link
                    to="/sign-in"
                    className="font-semibold hover:text-muted-foreground/60 transition-colors duration-300 ease-out focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-6"
                  >
                    Sign in
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SignUp;
