import React from "react";

const GuestPage = () => {
  return (
    <div>
      <h2>Welcome Guest!</h2>
      <p>You can browse flight details below:</p>
      <ul>
        <li>Flight 101 – Delhi to Mumbai – 10:00 AM</li>
        <li>Flight 202 – Hyderabad to Chennai – 1:30 PM</li>
        <li>Flight 303 – Bangalore to Kolkata – 5:45 PM</li>
      </ul>
      <p><i>Login to book tickets.</i></p>
    </div>
  );
};

export default GuestPage;
