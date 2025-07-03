import { useState } from "react";
import "./App.css";
// const userData = ;

function App() {
  //useEffect(() => {
  //useEffect(() => {
  // useRef(() => {
  //custom hook
  //javascript-{map, filter, reducer} --if we want mapping then we need to know these methods
  //map return new array
  //filter return new array
  //reducer return object or any other structure or value
  const userData = [
    { id: 1, name: "Jarif", phone: "01700000000" },
    { id: 2, name: "Trisha", phone: "01700000001" },
    { id: 3, name: "Saki", phone: "01700000002" },
    { id: 4, name: "Rita", phone: "01700000003" },
  ];

  const [user, setUser] = useState(userData);
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  function handleIncrement() {
    // setCount(count + 1);
    setCount((prev) => prev + 1);
  }

  function handleDarkMode() {
    setDarkMode(!darkMode);
    // setDarkMode(!darkMode);
  }

  return (
    <>
      <div style={darkMode ? { backgroundColor: "black", color: "white" } : {}}>
        <h1>count:{count}</h1>
        <button onClick={() => handleDarkMode()}>
          {darkMode ? "Light" : "Dark"}
        </button>
        <button onClick={() => handleIncrement()}>Increment Count</button>
        <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {/* <li>
            {userData.map((user, index) => (
              <div key={index}>
                <h1>{user.name}</h1>
                <p>{user.phone}</p>
              </div>
            ))}
          </li> */}

          {user.map((user) => (
            <li key={user.id}>
              Name: {user.name} <br /> phone {user.phone}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
