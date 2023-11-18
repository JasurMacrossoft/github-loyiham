import React, { useEffect, useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await fetch("./netlify/functions/getItems");
        if (response.ok) {
          const data = await response.json();
          setItems(data);
        } else {
          console.error("faild to fetch items.");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
    fetchItems();
  }, []);

  return (
    <div>
      <h1>Items</h1>
      <ul>
        {items ? items.map((element, index) => <li>{element.name}</li>) : ""}
      </ul>
    </div>
  );
}
