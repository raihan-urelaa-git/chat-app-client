import React, { useState, useEffect } from "react";

export default function Contacts({ contacts, changeChat }) {
  const [currentUserName, setCurrentUserName] = useState(undefined);
  const [currentSelected, setCurrentSelected] = useState(undefined);

  useEffect(() => {
    async function fetchCurrentUserName() {
      try {
        const data = await JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY));
        setCurrentUserName(data.username);
      } catch (error) {
        console.error("Error fetching current user name:", error);
      }
    }

    fetchCurrentUserName();
  }, []);

  const changeCurrentChat = (index, contact) => {
    setCurrentSelected(index);
    changeChat(contact);
  };

  return (
    <div style={{ display: 'grid', gridTemplateRows: '10% 75% 15%', overflow: 'hidden' }}>
      <div className="brand"></div>
      <div className="contacts" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', overflow: 'auto', gap: '0.8rem' }}>
        {contacts.map((contact, index) => (
          <div
            key={contact._id}
            className={`contact ${index === currentSelected ? "selected" : ""}`}
            onClick={() => changeCurrentChat(index, contact)}
            style={{ cursor: 'pointer', width: '90%', borderRadius: '0.2rem', display: 'flex', gap: '1rem', alignItems: 'center', border: '1px solid' }}
          >
            <div className="username">
              <h3>{contact.username}</h3>
            </div>
          </div>
        ))}
      </div>
      <div className="current-user" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem' }}>
        <div className="username">
          <h2>current user:{currentUserName}</h2>
        </div>
      </div>
    </div>
  );
}
