import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const GetConsultant = () => {
  const form = useRef();
  const [email, setEmail] = useState("" )
  const [number, setNumber] = useState("" )
  const [message, setMessage] = useState("" )
  const [name, setName] = useState("" )

  // ==================================EmailJS function ==============================//

  const sendEmail = (e) => {
    e.preventDefault();
    if (email === "" || number === "" || message === "" || name === "" ) {
      return toast.error('Missings Fields')
    } else {
      console.log("send")
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
    <div className='lg:p-[5rem] lg:pr-[5rem] px-[2rem] pb-[3rem] h-[100vh] bg-[url("https://res.cloudinary.com/dpvxkqhi8/image/upload/v1708534584/branding%20hopes/banner_b0pbcx.jpg")]  pt-[12vh] bg-cover bg-center bg-[#18252b] '>
      <div>
        <h1 className="text-[35px] md:text-[50px] text-[#FDDA0D]  font-bold ">
          Get
          <span className="text-white"> Free</span>
          <span className=" text-[#097969]"> Consultancy!</span>
        </h1>
        <p className="mt-[1.5rem] text-[20px] text-[#ffffff]">
          We have experts available to provide guidance for you.
        </p>
        <form ref={form}>
          <div className="flex lg:flex-row flex-col mt-[2rem] gap-5 ">
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Full Name"
              name="name"
              className="p-[20px]"
              required
            />
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email Address"
              name="email"
              className="p-[20px]"
              required
            />
            <input
              onChange={(e) => setNumber(e.target.value)}
              type="number"
              name="mobile_number"
              placeholder="Mobile Number"
              // name="number"
              className="p-[20px]"
              required
            />
          </div>
          <div className="mt-[2rem] ">
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              className="p-[15px]"
              name="message"
              id=""
              cols="40"
              rows="5"
              placeholder="Your Message"
              required
            // className="heading"
            ></textarea>
          </div>
          <div className="right flex-1 flex justify-start items-center mt-[2rem]">
            <button type="submit" value="Send" className="btn mb-[1rem] rounded-lg  py-[17px] px-[39px]  bg-[#fdda0d]  hover:text-white font-bold hover:bg-[#097969] cursor-pointer" onClick={sendEmail}> send </button>
          </div>
        </form>
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
          transition:Bounce />
      </div>
    </div>
  );
};

export default GetConsultant;
