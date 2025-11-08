"use strict";

// COMPONENTS
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import SubHeader from "../src/components/SubHeader";
import FormHeader from "../src/components/FormHeader";
import ImageUpload from "../src/components/ImageUpload";
import Select from "../src/components/Select";
import Address from "../src/components/Address";
import Button from "../src/components/Button";
import PaymentInfo from "../src/components/PaymentInfo";
import Message from "../src/components/Message";

// ICONS
import { FaShoppingCart } from "react-icons/fa";

import { useState, useRef } from "react";

const Order = () => {
  // State for selected size
  const [selectedSize, setSelectedSize] = useState("");

  const sizeOptions = [
    { value: "", label: "Select a print size" },
    { value: "5x7", label: "5 x 7 inches (+₦4,500)" },
    { value: "8x10", label: "8 x 10 inches (+₦8,000)" },
    { value: "10x12", label: "10 x 12 inches (+₦10,500)" },
    { value: "12x15", label: "12 x 15 inches (+₦15,500)" },
    { value: "16x20", label: "16 x 20 inches (+₦20,000)" },
    { value: "16x24", label: "16 x 24 inches (+₦26,200)" },
    { value: "20x24", label: "20 x 24 inches (+₦35,100)" },
    { value: "20x30", label: "20 x 30 inches (+₦55,200)" },
    { value: "24x30", label: "24 x 30 inches (+₦70,200)" },
    { value: "24x35", label: "24 x 35 inches (+₦86,500)" },
    { value: "30x35", label: "30 x 35 inches (+₦120,000)" },
    { value: "35x40", label: "35 x 40 inches (+₦155,000)" },
  ];

  // Function Handle size change
  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  // State for frame or frameless
  const [frame, setFrame] = useState("no");
  const frameOption = [
    { value: "no", label: "No frame / frameless" },
    { value: "yes", label: "Frame" },
  ];

  const handleFrameChange = (e) => {
    setFrame(e.target.value);
  };

  // STATE FOR FRAME TYPE
  const [frameType, setFrameType] = useState("");
  const frameTypeOption = [
    { value: "Black wood", label: "Black wood" },
    { value: "White wood", label: "White wood" },
    { value: "Natural oak", label: "Natural oak" },
    { value: "Fabre wood", label: "Fabre wood" },
  ];

  const handleFrameTypeChanege = (e) => {
    setFrameType(e.target.value);
  };

  // TO DISPLAY PAYMENT MESSAGE ON CLICK
  const messageRef = useRef(null);
  const overlayRef = useRef(null);

  // Show payment info
  const displayPaymentInfo = () => {
    messageRef.current.classList.remove("hidden");
    overlayRef.current.classList.remove("hidden");
    showMessage();
  };
  //  close payment information
  const closePaymentInfo = () => {
    messageRef.current.classList.add("hidden");
    overlayRef.current.classList.add("hidden");
  };

  // DISPLAY SUCCESS MESSAGE
  const [visible, setVisible] = useState(false);

  const showMessage = () => {
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 3000); // hide after 3 seconds
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* MAIN CONTENT */}
      <main className="main-content flex flex-col flex-1" id="top">
        {/* SECTION ORDER PRINT */}
        <section className="pt-35">
          <SubHeader
            title={"Create Your Print"}
            text={
              "Follow these simple steps to turn your digital photos into stunning physical art."
            }
          />
          <div className="container">
            {/* FORM */}
            <form
              action=""
              className="bg-background-accent rounded-lg shadow-xl border border-border mb-20 mx-6"
            >
              <FormHeader
                title={"Your Order Details"}
                text={"Upload an image and select your Preferences."}
              />
              <div className="p-[2.4rem] pt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  <ImageUpload label={"1. Upload Image"} />

                  <div className="space-y-6 pt-2">
                    <div className="flex flex-col gap-3">
                      <label
                        htmlFor="print-size"
                        className="capitalize text-text-foreground font-medium"
                      >
                        2. choose size
                      </label>
                      <Select
                        options={sizeOptions}
                        value={selectedSize}
                        onChange={handleSizeChange}
                        placeholder="Select Size"
                        aria-label="Select Size"
                        className={
                          "w-full rounded-lg border border-border bg-background-accent px-4 py-4 text-[1.4rem] mt-4"
                        }
                      />
                    </div>
                    <div className="pt-4 flex flex-col gap-3">
                      <label
                        htmlFor=""
                        className="capitalize text-text-foreground font-medium"
                      >
                        3. select frame
                      </label>
                      <Select
                        options={frameOption}
                        value={frame}
                        onChange={handleFrameChange}
                        className="w-full rounded-lg border border-border bg-[#f5f5dc] px-4 py-4 text-[1.4rem] mt-4"
                      />
                    </div>
                    <div
                      className={
                        frame === "yes"
                          ? "pt-4 flex flex-col gap-3"
                          : "space-y-6 pt-2 hidden"
                      }
                    >
                      <label
                        htmlFor="frame-type"
                        className="capitalize text-text-foreground font-medium"
                      >
                        select frame type
                      </label>
                      <Select
                        options={frameTypeOption}
                        value={frameType}
                        onChange={handleFrameTypeChanege}
                        className={
                          "w-full rounded-lg border border-border bg-background-accent px-4 py-4 text-[1.4rem] mt-4"
                        }
                        id="frame-type"
                      />
                    </div>
                  </div>
                </div>
                <Address
                  containerClass={"mt-20 flex flex-col gap-3"}
                  labelClass={"capitalize text-text-foreground font-medium"}
                  htmlFor={"address"}
                  title={"4. shipping address"}
                  textareaClass={
                    "w-full border border-[#ddddb5] bg-[#f5f5dc] rounded-lg min-h-[10rem] px-[1rem] py-[1rem] text-[1.4rem] mt-[1rem]"
                  }
                  placeholder={"Enter your full shipping address..."}
                  id={"address"}
                />
              </div>
              <div class="flex justify-between items-center p-[2.4rem] bg-[#f5f5dc]/50 mb-8">
                <div className="flex flex-col gap-12">
                  <p class="text-[1.8rem] font-semibold capitalize text-text-foreground leading-5 sm:leading-0">
                    total price:
                  </p>
                  <p class="text-[2rem] font-bold text-primary md:text-[3.6rem]">
                    ₦0
                  </p>
                </div>
                <Button
                  className={
                    "flex items-center gap-4 text-white capitalize bg-primary px-8 py-4 rounded-lg text-[1.6rem] cursor-pointer hover:bg-primary/80 transition-colors duration-300 ease-in-out leading-5 sm:leading-0"
                  }
                  type={"button"}
                  text={"place order"}
                  icon={<FaShoppingCart />}
                  onClick={displayPaymentInfo}
                />
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
      <PaymentInfo
        msgRef={messageRef}
        overlayRef={overlayRef}
        onClick={closePaymentInfo}
        overlayOnClick={closePaymentInfo}
      />

      {visible && (
        <Message
          title={"Order Placed!"}
          backgroundColor={"bg-background"}
          message={"Your master piece is on the way. Thank you for your order."}
        />
      )}
    </div>
  );
};

export default Order;
