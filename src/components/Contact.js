import React from "react";
import "./Contact.css";

function Contact(props) {
  return (
    <div className="Contact">
      <img className="avatar" src={props.avatar} alt={props.name} />
      <div className="status">
        <h2 className="name">{props.name}</h2>
        <div className="alignStatus">
          {props.online ? (
            <div className="status-online"></div>
          ) : (
            <div className="status-offline"></div>
          )}
          <p className="status-text">{props.online ? "online" : "offline"}</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
