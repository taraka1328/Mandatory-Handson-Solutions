import React, { useState } from "react";

function CurrencyConvertor() {
  const [rupees, setRupees] = useState("");
  const [euro, setEuro] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const euroValue = (parseFloat(rupees) / 90).toFixed(2); // Assuming 1 Euro = 90 INR
    setEuro(euroValue);
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>Currency Convertor (INR to Euro)</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Enter INR"
          value={rupees}
          onChange={(e) => setRupees(e.target.value)}
        />
        <button type="submit">Convert</button>
      </form>
      {euro && <h3>Converted Euro: €{euro}</h3>}
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const sayHello = () => {
    alert("Hello! This is a static message.");
  };

  const sayWelcome = (msg) => {
    alert(msg);
  };

  const handleSyntheticEvent = (e) => {
    alert("I was clicked");
    console.log("Synthetic Event:", e);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React Event Examples</h1>

      {/* Counter Buttons */}
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement} style={{ marginLeft: "10px" }}>
        Decrement
      </button>

      <br /> <br />

      {/* Say Welcome Button */}
      <button onClick={() => sayWelcome("Welcome!")}>Say Welcome</button>

      <br /> <br />

      {/* Synthetic Event Button */}
      <button onClick={handleSyntheticEvent}>OnPress</button>

      {/* Currency Converter */}
      <CurrencyConvertor />
    </div>
  );
}

export default App;
