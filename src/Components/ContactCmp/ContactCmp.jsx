import React, { useRef, useState } from "react";
import "./ContactCmp.css";
import MapLocation from "../MapLocation/MapLocation";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactCmp = () => {
  const form = useRef();
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");

  // ==================================EmailJS function ==============================//

  const sendEmail = (e) => {
    e.preventDefault();
    if (
      email === "" ||
      number === "" ||
      message === "" ||
      name === "" ||
      subject === ""
    ) {
      return toast.error("Missings Fields");
    } else {
      console.log("send");
      emailjs
        .sendForm("service_or4rkcq", "template_2q5x5yd", form.current, {
          publicKey: "IErOLB5UYKwIo5_Ux",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            toast.success("Email Send Successfully");
          },
          (error) => {
            console.log("FAILED...", error.text);
            toast.error("Email Send Failed");
          }
        );
    }
  };
  // ==================================EmailJS function ==============================//
  return (
    <div className="flex justify-evenly w-full md-flex-row  bg-[#097969] p-[20px] sm:flex-row flex-col">
      <div className="contact  " id="contact">
        <h2 className="heading pt-[2rem] text-[#fdda0d]">Contact Us</h2>

        <form action="" className="from" ref={form} onSubmit={sendEmail}>
          <div className="input-box">
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-box">
            <input
              type="number"
              placeholder="Mobile Number"
              name="mobile_number"
              onChange={(e) => setNumber(e.target.value)}
            />
            <input
              type="text"
              placeholder="Email Subject"
              name="subject"
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="Your Message"
            onChange={(e) => setMessage(e.target.value)}
            // className="heading"
          ></textarea>
          <input
            type="submit"
            value="Send"
            className="btn mb-[1rem] text-white text-2xl hover:bg-[#fdda0d] w-[100%] h-[10vh] rounded-lg"
          />
        </form>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
      <div className=" bg-[#097969] text-center  flex justify-center items-center">
        <div>
          <h2 className="text-3xl font-bold uppercase text-white mb-[2rem]">
            A <span className="text-[#fdda0d]">question</span>, a project, a job{" "}
            <span className="text-[#fdda0d]">application</span>?
          </h2>
          <p className="text-1xl font-semibold  text-white mb-[2rem] overflow-hidden">
            Please feel free to contact us and we will be happy to assist you in
            anyway we can!
          </p>
          <p className="text-1xl font-semibold  text-white mb-[2rem] overflow-auto">
            Info@webdeezien.com
          </p>
          <p className="text-1xl font-semibold  text-white mb-[2rem]">
            (507) 623-2311
          </p>
          <p className="text-1xl font-semibold  text-white mb-[2rem] overflow-auto">
            6605 NW 121st Street Oklahoma City, Ok. 73162
          </p>
          <p className="text-1xl font-semibold  text-white mb-[2rem]">
            Find Us
          </p>
          <div className=" flex justify-center  rounded-md">
            <MapLocation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCmp;
