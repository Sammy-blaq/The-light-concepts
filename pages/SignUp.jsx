"use strict";

// COMPONENTS
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

const SignUp = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="main-content flex flex-col flex-1" id="top">
        <div className="container">
          <p>Sign Up</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SignUp;
