import React, { useEffect, useState } from "react";
import { Button } from "flowbite-react"; // Import Flowbite React components

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/api/")
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">{message || "Loading..."}</h1>
        <Button color="primary" onClick={() => alert('Button clicked!')}>
          Click Me!
        </Button>
      </header>
    </div>
  );
}

export default App;
