"use strict";

// COMPONENTS
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import SubHeader from "../src/components/SubHeader";
import FormHeader from "../src/components/FormHeader";
import FieldContainer from "../src/components/FieldContainer";
import InputField from "../src/components/InputField";
import Select from "../src/components/Select";
import Address from "../src/components/Address";
import Button from "../src/components/Button";
import PaymentInfo from "../src/components/PaymentInfo";
import Message from "../src/components/Message";

// ICONS
import { FaPaperPlane } from "react-icons/fa";

import { useState, useRef } from "react";

const Booking = () => {
  // State for event type
  const [event, setEvent] = useState("");

  // Event Options
  const eventOptions = [
    { value: "", label: "Select the type of event" },
    { value: "Pre-wedding Session", label: "Pre-wedding Session" },
    { value: "Wedding Ceremony", label: "Wedding Ceremony" },
    { value: "Engagement Ceremony", label: "Engagement ceremony" },
    { value: "Birthday Party", label: "Birthday Party" },
    { value: "Naming Ceremony", label: "Naming Ceremony" },
    { value: "Dedication Ceremony", label: "Dedication Ceremony" },
    { value: "Portrait Session", label: "Portrait Session" },
    { value: "Outdoor Photo Session", label: "Outdoor Photo Session" },
    { value: "Corporate Event", label: "Corporate Event" },
    { value: "Family Session", label: "Family Session" },
    { value: "Party / Campaign Event", label: "Party / Campaign Event" },
    { value: "other", label: "Other" },
  ];

  // fuction Handle Event change
  const handleEventChange = (e) => {
    setEvent(e.target.value);
  };

  // Getting date (will use to limit date selection to present day upward)
  const date = new Date();
  const today = date.toISOString().split("T")[0]; // Format date as YYYY-MM-DD

  // State for event States
  const [eventState, setEventState] = useState("");

  const eventStateOptions = [
    { value: "", label: "Select the event state" },
    { value: "Lagos", label: "Lagos" },
    { value: "Abuja", label: "Abuja" },
    { value: "Rivers", label: "Rivers" },
    { value: "Kano", label: "Kano" },
    { value: "Kaduna", label: "Kaduna" },
    { value: "Oyo", label: "Oyo" },
    { value: "Edo", label: "Edo" },
    { value: "Anambra", label: "Anambra" },
    { value: "Enugu", label: "Enugu" },
    { value: "Delta", label: "Delta" },
    { value: "Imo", label: "Imo" },
    { value: "Other", label: "Other" },
  ];
  const handleEventStateChange = (e) => {
    setEventState(e.target.value);
  };

  const [eventCountry, setEventCountry] = useState("");

  const eventCountryOptions = [
    { value: "", label: "Select event country" },
    { value: "Nigeria", label: "Nigeria" },
    { value: "other", label: "Other" },
  ];

  const handleEventCountryChange = (e) => {
    setEventCountry(e.target.value);
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
    }, 5000); // hide after 5 seconds
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="main-content flex flex-col flex-1" id="top">
        <section className="pt-35">
          <SubHeader
            title={"Book a Photography Session"}
            text={
              "Let's create something beautiful together. Fill out the form below to inquire about our availability."
            }
          />
          <div className="container">
            <form
              action=""
              className="bg-[#f7f7e3] rounded-lg mx-6 shadow-xl border border-[#ddddb5] mb-20"
            >
              <FormHeader
                title={"Your Information"}
                text={" All fields are required unless otherwise noted."}
              />
              <div className="p-[2.4rem] pt-0 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FieldContainer
                    containerClass={" flex flex-col gap-3 mb-6"}
                    labelClass={"capitalize text-[#504230] font-medium"}
                    labelFor={"full-name"}
                    title={"Full Name"}
                    inputField={
                      <InputField
                        type={"text"}
                        className={
                          "flex border border-[#ddddb5] bg-[#f5f5dc] rounded-lg p-4 w-full mt-4 placeholder:text[#8a775c]"
                        }
                        id={"full-name"}
                        placeholder={"John Doe"}
                        required
                      />
                    }
                  />
                  <FieldContainer
                    containerClass={"flex flex-col gap-3 mb-6"}
                    labelClass={"capitalize text-[#504230] font-medium"}
                    labelFor={"email"}
                    title={"Email Address"}
                    inputField={
                      <InputField
                        type={"email"}
                        className={
                          "flex border border-[#ddddb5] bg-[#f5f5dc] rounded-lg p-4 w-full mt-4 placeholder:text[#8a775c]"
                        }
                        id={"email"}
                        placeholder={"you@example.com"}
                        required
                      />
                    }
                  />
                </div>
                <FieldContainer
                  containerClass={"flex flex-col mb-6"}
                  labelClass={"capitalize text-[#504230] font-medium mb-3"}
                  labelFor={"event-type"}
                  title={"Event type"}
                  inputField={
                    <Select
                      options={eventOptions}
                      value={event}
                      onChange={handleEventChange}
                      className={
                        "w-full rounded-lg border border-[#ddddb5] bg-[#f5f5dc] px-4 py-4 text-[1.4rem] mt-4 placeholder:text[#8a775c]"
                      }
                    />
                  }
                />
                <FieldContainer
                  containerClass={
                    event === "other" ? "flex flex-col mb-6" : "hidden"
                  }
                  labelClass={"capitalize text-[#504230] font-medium mb-3"}
                  labelFor={"custom-event"}
                  title={"Custom Event type"}
                  inputField={
                    <InputField
                      type={"text"}
                      className={
                        "flex border border-[#ddddb5] bg-[#f5f5dc] rounded-lg p-4 w-full mt-4 placeholder:text[#8a775c]"
                      }
                      id={"custom-event"}
                      placeholder={"eg., Family Reunion"}
                      required
                    />
                  }
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FieldContainer
                    containerClass={"flex flex-col mb-6"}
                    labelClass={"capitalize text-[#504230] font-medium mb-3"}
                    labelFor={"start-date"}
                    title={"Event date: From"}
                    inputField={
                      <InputField
                        type={"date"}
                        className={
                          "flex border border-[#ddddb5] bg-[#f5f5dc] rounded-lg p-4 w-full mt-4 placeholder:text[#8a775c]"
                        }
                        id={"start-date"}
                        placeholder={"Pick a date"}
                        min={today}
                        required
                      />
                    }
                  />
                  <FieldContainer
                    containerClass={"flex flex-col mb-6"}
                    labelClass={"capitalize text-[#504230] font-medium mb-3"}
                    labelFor={"end-date"}
                    title={"To"}
                    inputField={
                      <InputField
                        type={"date"}
                        className={
                          "flex border border-[#ddddb5] bg-[#f5f5dc] rounded-lg p-4 w-full mt-4 placeholder:text[#8a775c]"
                        }
                        id={"end-date"}
                        placeholder={"Pick a date"}
                        min={today}
                        required
                      />
                    }
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FieldContainer
                    containerClass={"flex flex-col mb-6"}
                    labelClass={"capitalize text-[#504230] font-medium mb-3"}
                    labelFor={"start-time"}
                    title={"Event time: start"}
                    inputField={
                      <InputField
                        type={"time"}
                        className={
                          "flex border border-[#ddddb5] bg-[#f5f5dc] rounded-lg p-4 w-full mt-4 placeholder:text[#8a775c]"
                        }
                        id={"start-time"}
                        min={"00:00"}
                        max={"23:00"}
                      />
                    }
                  />
                  <FieldContainer
                    containerClass={"flex flex-col mb-6"}
                    labelClass={"capitalize text-[#504230] font-medium mb-3"}
                    labelFor={"end-time"}
                    title={"end"}
                    inputField={
                      <InputField
                        type={"time"}
                        className={
                          "flex border border-[#ddddb5] bg-[#f5f5dc] rounded-lg p-4 w-full mt-4 placeholder:text[#8a775c]"
                        }
                        id={"end-time"}
                        min={"00:00"}
                        max={"23:00"}
                      />
                    }
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FieldContainer
                    containerClass={"flex flex-col mb-6"}
                    labelClass={"capitalize text-[#504230] font-medium mb-3"}
                    labelFor={"country"}
                    title={"Country"}
                    inputField={
                      <Select
                        options={eventCountryOptions}
                        value={eventCountry}
                        onChange={handleEventCountryChange}
                        className={
                          "w-full rounded-lg border border-[#ddddb5] bg-[#f5f5dc] px-4 py-4 text-[1.4rem] mt-4 placeholder:text[#8a775c]"
                        }
                      />
                    }
                  />
                  {eventCountry === "Nigeria" ? (
                    <FieldContainer
                      containerClass={"flex flex-col mb-6"}
                      labelClass={"capitalize text-[#504230] font-medium mb-3"}
                      labelFor={"state"}
                      title={"State"}
                      inputField={
                        <Select
                          options={eventStateOptions}
                          value={eventState}
                          onChange={handleEventStateChange}
                          className={
                            "w-full rounded-lg border border-[#ddddb5] bg-[#f5f5dc] px-4 py-4 text-[1.4rem] mt-4 placeholder:text[#8a775c]"
                          }
                        />
                      }
                    />
                  ) : (
                    <FieldContainer
                      containerClass={"flex flex-col mb-6"}
                      labelClass={"capitalize text-[#504230] font-medium mb-3"}
                      labelFor={"country"}
                      title={"Other Country"}
                      inputField={
                        <InputField
                          type={"text"}
                          className={
                            "flex border border-[#ddddb5] bg-[#f5f5dc] rounded-lg p-4 w-full mt-4 placeholder:text[#8a775c]"
                          }
                          id={"country"}
                          placeholder={"Enter your Country and State..."}
                        />
                      }
                    />
                  )}
                </div>
                <Address
                  containerClass={"space-y-2 mt-[2.4rem]"}
                  labelClass={
                    "capitalize text-[#504230] font-medium mb-3 leading-5 sm:leading-0"
                  }
                  title={"event address / location"}
                  htmlFor={"event-address"}
                  textareaClass={
                    "w-full border border-[#ddddb5] bg-[#f5f5dc] rounded-lg min-h-[10rem] px-[1rem] py-[1rem] text-[1.4rem] mt-[1rem] placeholder:text[#8a775c] placeholder:leading-7 sm:placeholder:leading-0"
                  }
                  id={"event-address"}
                  placeholder={"Please provide the full venue and address..."}
                />
              </div>
              <div class="flex items-center justify-center p-[2.4rem] pt-0">
                <Button
                  type={"button"}
                  className={
                    "flex items-center justify-center gap-4 capitalize text-white bg-[#a68b64] px-4 py-6 w-full rounded-lg cursor-pointer hover:bg-[#b19a76] transition-colors duration-300 ease-in-out leading-5 sm:leading-0"
                  }
                  onClick={displayPaymentInfo}
                  text={"Send booking request"}
                  icon={<FaPaperPlane />}
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
      />

      {visible && (
        <Message
          title={"Booking Request Sent!"}
          backgroundColor={"bg-[#f5f5db]"}
          message={
            "We have recieved your booking request, we will get back to you shortly."
          }
        />
      )}
    </div>
  );
};

export default Booking;
