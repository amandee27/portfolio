"use client";
import React from "react";
import Footer from "./layout/Footer";

function Contact() {
  const loadContact = () => {
    console.log("Load Contact");
  };
  return (
    // <div>
    //   <div className="grid grid-cols-2 gap-4">
    //     <div>
    //       <h1 className="text-center text-2xl">Quick Links</h1>
    //     </div>
    //     <div>
    //       <h1 className="px-20 text-2xl">Contact</h1>
    //       <div>
    //         <p className="ml-5 text-right">
    //           Feel free to DM me on X or LinkedIn if you'd like to chat
    //         </p>
    //       </div>
    //       <div className="grid grid-cols-2">
    //         <div>
    //           <p className="text-right">Email</p>
    //         </div>
    //         <div className="pl-4">
    //           <p>
    //             For contact, kindly send an email to example@domain.com.{" "}
    //             <span className="block-bots" aria-hidden="true">
    //               GO AWAY SPAM BOTS!
    //             </span>
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <Footer></Footer>
  );
}

export default Contact;
