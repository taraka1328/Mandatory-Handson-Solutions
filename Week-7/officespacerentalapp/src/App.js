import React from 'react';
import './App.css';
function App(){
  const offices = [
    { name: "Tech Park 1", rent: 55000, address: "Hyderabad, India", image: "https://via.placeholder.com/400x300?text=Office+1" },
    { name: "Cyber Towers", rent: 75000, address: "Bangalore, India", image: "https://via.placeholder.com/400x300?text=Office+2" },
    { name: "IT Hub Plaza", rent: 60000, address: "Chennai, India", image: "https://via.placeholder.com/400x300?text=Office+3" },
  ];
  return (
    <div className='app'>
      <h1>Office Space Rental App</h1>
      {offices.map((office,index) => (
        <div key={index} style={{
          border: "1px solid gray",
          margin: "10px",
          padding: "10px",
          borderRadius: "8px",
          maxWidth: "300px"
        }}>
          <img src={office.image} alt="Office Image" width="250"/>
          <h2>{office.name}</h2>
           <p style={{ color: office.rent < 60000 ? "red" : "green" }}>
                Rent: ₹{office.rent.toLocaleString()}
            </p>
            </div>
      ))}
    </div>
  );
}
export default App;