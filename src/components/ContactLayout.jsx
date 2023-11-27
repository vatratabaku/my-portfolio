import "./css/contactLayout.css";

function ContactLayout() {
  return (
    <div className="forms-wraper">
        <h1>CONTACT ME</h1>
      <div className="firstFormRow">
        <div className="textInputWrapper">
          <input placeholder="Name" type="text" className="textInput firstInput"></input>
        </div>
        <div className="textInputWrapper">
          <input placeholder="Surname" type="text" className="textInput firstInput"></input>
        </div>
      </div>
      <div className="textInputWrapper">
          <input placeholder="Email" type="text" className="textInput"></input>
       </div>
       <div className="textInputWrapper">
        <br />
          <textarea placeholder="Message" type="text" className="textInput my-textarea"></textarea>
        </div>
        <button>Send</button>
    </div>
  );
}

export default ContactLayout;
