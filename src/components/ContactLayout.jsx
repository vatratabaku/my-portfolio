import "./css/contactLayout.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5qxq35q",
        "template_mwtngy9",
        form.current,
        "o-uBoqFFrCIaRqpIx"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="forms-wrapper">
      <motion.h1
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 100, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        CONTACT ME
      </motion.h1>
      <motion.form
        ref={form}
        onSubmit={sendEmail}
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <div className="firstFormRow">
          <div className="textInputWrapper">
            <input
              placeholder="Name"
              type="text"
              name="user_name"
              className="textInput firstInput"
            />
          </div>
          <div className="textInputWrapper">
            <input
              placeholder="Surname"
              type="text"
              className="textInput firstInput"
            />
          </div>
        </div>

        <div className="textInputWrapper second-row">
          <input
            placeholder="Email"
            type="email"
            name="user_email"
            className="textInput"
          />
        </div>

        <div className="textInputWrapper">
          <textarea
            name="message"
            placeholder="Message"
            type="text"
            className="textInput my-textarea"
          />
        </div>
        <input className="inputButton" type="submit" value="Send" />
      </motion.form>
    </div>
  );
};

export default ContactUs;
