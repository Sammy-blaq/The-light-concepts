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
          <div className="flex flex-col items-center justify-center w-200 mx-6 rounded-lg bg-[#f7f7e3] shadow-xl border border-[#ddddb5]">
            <div className="flex flex-col p-[2.4rem] gap-8 text-center my-8">
              <h1 className="capitalize text-[#504230] text-[3rem] font-bold">
                Sign In
              </h1>
              <p className="text-[#8a775c] text-[1.4rem] mt-3">
                Access your account and order history.
              </p>
            </div>
            <div className="p-[2.4rem] pt-0 w-full">
              <form action="" class="space-y-6 w-full">
                <div className="space-y-2">
                  <label
                    for="eamil"
                    className="capitalize text-[#504230] font-medium"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="flex text-[1.4rem] border border-[#ddddb5] bg-[#f5f5dc] rounded-lg p-4 w-full mt-4 placeholder:text[#8a775c]"
                    placeholder="you@example.com"
                    id="eamil"
                  />
                </div>
                <div className="space-y-2 mt-[2.4rem]">
                  <div class="flex justify-between items-center">
                    <label
                      for="password"
                      className="capitalize text-[#504230] font-medium"
                    >
                      password
                    </label>
                    <a
                      href="#"
                      className="capitalize text-[#8a775c] text-[1.4rem] hover:text-[#8a775c]/60 transition-colors duration-300 ease-out"
                    >
                      forgot your password?
                    </a>
                  </div>
                  <input
                    type="password"
                    className="flex text-[1.4rem] border border-[#ddddb5] bg-[#f5f5dc] rounded-lg p-4 w-full mt-4 placeholder:text[#8a775c]"
                    placeholder="********"
                    id="password"
                  />
                </div>
                <button
                  type="button"
                  className="flex items-center justify-center gap-4 text-white bg-[#a68b64] px[1rem] py-6 rounded-md mt-[2.4rem] w-full"
                >
                  <ion-icon name="log-in" class="text-[1.6rem]"></ion-icon>
                  Sign In
                </button>
              </form>
              <div className="mt-[2.4rem]">
                <div className="flex items-center justify-center">
                  <p className="text-[#8a775c]">Or continue with</p>
                </div>
                <div className="flex justify-center items-center mt-[2.4rem] text-[#8a775c]">
                  <p>Don't have account?</p>
                  <a
                    href="./sign-up.html"
                    className="font-semibold hover:text-[#8a775c]/60 transition-colors duration-300 ease-out"
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
