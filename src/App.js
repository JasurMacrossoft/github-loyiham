import React, { useEffect, useState } from "react";

export default function App() {
  const [result, setResult] = useState("");

  const processData = async () => {
    const data = { number: 22 };
    const response = await fetch("/.netlify/functions/data-processing", {
      method: "POST",
      body: JSON.stringify(data),
    });
    if (response.ok) {
      const resultData = await response.json();
      setResult(`Result: ${resultData.result}`);
    } else {
      setResult("Data processing failed");
    }
  };

  const authenticateUser = async () => {
    const credentials = {username: "user", password: "password"}
    const response = fetch("/.netlify/functions/authenticate", {
      method: "POST",
      body: JSON.stringify(credentials)
    })

    if (response.ok) {
      const authResult = await response.json();
      setResult(`Auth: ${authResult.message}`);
    } else {
      setResult("AuithenticateUser failed");
    }
  };

  useEffect(() => {}, []);

  return (
    <div>
      <button onClick={processData}>Process Data</button>
      <button onClick={authenticateUser}>AuithenticateUser</button>
      <h3>{result}</h3>
    </div>
  );
}
