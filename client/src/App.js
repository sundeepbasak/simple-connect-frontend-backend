import React, { useState, useEffect } from "react";

function App() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("http://localhost:5000/api")
      .then((res) => res.json())
      .then((res) => setBackendData(res));
  }, []);

  return (
    <div>
      {typeof backendData.users === "undefined" ? (
        <p>Loading...</p>
      ) : (
        backendData.users.map((user, index) => {
          return <p key={index}>{user}</p>;
        })
      )}
    </div>
  );
}

export default App;
