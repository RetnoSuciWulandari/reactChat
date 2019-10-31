import React from "react";
import Contact from "./Contact";

const users = [
  {
    avatar: "https://randomuser.me/api/portraits/men/18.jpg",
    name: "Ralph Perkins",
    online: true
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/85.jpg",
    name: "Harry Gray",
    online: true
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/47.jpg",
    name: "Peyton Barnes",
    online: false
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/35.jpg",
    name: "Bill Payne",
    online: false
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/0.jpg",
    name: "Carrie Warren",
    online: true
  }
];

class ContactList extends React.Component {
  render() {
    return (
      <div>
        {users.map(user => (
          <Contact avatar={user.avatar} name={user.name} online={user.online} />
        ))}
      </div>
    );
  }
}

export default ContactList;
