"use strict";

// COMPONENTS
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

const SignIn = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* MAIN CONTENT */}
      <main
        className="main-content flex flex-col items-center justify-center flex-1 w-full h-full"
        id="top"
      >
        {/* SIGNIN FORM */}
        <section className="flex items-center justify-center w-full h-full">
          <div class="flex flex-col items-center justify-center w-200 mx-6 rounded-lg bg-[#f7f7e3] shadow-xl border border-[#ddddb5]">
            <div class="flex flex-col p-[2.4rem] text-center">
              <h1 class="capitalize text-[#504230] text-[3rem] font-bold">
                Sign In
              </h1>
              <p class="text-[#8a775c] text-[1.4rem] mt-3">
                Access your account and order history.
              </p>
            </div>
            <div class="p-[2.4rem] pt-0 w-full">
              <form action="" class="space-y-6 w-full">
                <div class="space-y-2">
                  <label
                    for="eamil"
                    class="capitalize text-[#504230] font-medium"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    class="flex text-[1.4rem] border border-[#ddddb5] bg-[#f5f5dc] rounded-lg p-4 w-full mt-4 placeholder:text[#8a775c]"
                    placeholder="you@example.com"
                    id="eamil"
                  />
                </div>
                <div class="space-y-2 mt-[2.4rem]">
                  <div class="flex justify-between items-center">
                    <label
                      for="password"
                      class="capitalize text-[#504230] font-medium"
                    >
                      password
                    </label>
                    <a
                      href="#"
                      class="capitalize text-[#8a775c] text-[1.4rem] hover:text-[#8a775c]/60 transition-colors duration-300 ease-out"
                    >
                      forgot your password?
                    </a>
                  </div>
                  <input
                    type="password"
                    class="flex text-[1.4rem] border border-[#ddddb5] bg-[#f5f5dc] rounded-lg p-4 w-full mt-4 placeholder:text[#8a775c]"
                    placeholder="********"
                    id="password"
                  />
                </div>
                <button
                  type="button"
                  class="flex items-center justify-center gap-4 text-white bg-[#a68b64] px[1rem] py-6 rounded-md mt-[2.4rem] w-full"
                >
                  <ion-icon name="log-in" class="text-[1.6rem]"></ion-icon>
                  Sign In
                </button>
              </form>
              <div class="mt-[2.4rem]">
                <div class="flex items-center justify-center">
                  <p class="text-[#8a775c]">Or continue with</p>
                </div>
                <div class="flex justify-center items-center mt-[2.4rem] text-[#8a775c]">
                  <p>Don't have account?</p>
                  <a
                    href="./sign-up.html"
                    class="font-semibold hover:text-[#8a775c]/60 transition-colors duration-300 ease-out"
                  >
                    Sign up
                  </a>
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

export default SignIn;
