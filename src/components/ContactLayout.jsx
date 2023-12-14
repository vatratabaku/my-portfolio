import "./css/contactLayout.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

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
      <h1>CONTACT ME</h1>
      <form ref={form} onSubmit={sendEmail}>
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
          <textarea name="message"  placeholder="Message" type="text" className="textInput my-textarea" />
        </div>
        <input className="inputButton" type="submit" value="Send" />
      </form>
    </div>
  );
};

// function ContactLayout() {
// return (
//   <div className="forms-wraper">
//       <h1>CONTACT ME</h1>
//     <div className="firstFormRow">
//       <div className="textInputWrapper">
//         <input placeholder="Name" type="text" className="textInput firstInput"></input>
//       </div>
//       <div className="textInputWrapper">
//         <input placeholder="Surname" type="text" className="textInput firstInput"></input>
//       </div>
//     </div>
//     <div className="textInputWrapper">
//         <input placeholder="Email" type="text" className="textInput"></input>
//      </div>
//      <div className="textInputWrapper">
//       <br />
//         <textarea placeholder="Message" type="text" className="textInput my-textarea"></textarea>
//       </div>
//       <button>Send</button>
//   </div>
// );
// }

// export default ContactLayout;

export default ContactUs;
