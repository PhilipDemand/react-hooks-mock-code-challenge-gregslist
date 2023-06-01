import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listings, setListings] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(r => r.json())
    .then(data => setListings(data))
  }, [])

  function handleDelete(ident) {
    const updatedItems = listings.filter((listing) => listing.id !== ident);
    setListings(updatedItems);
  }

  return (
    <div className="app">
      <Header />
      <ListingsContainer handleDelete={handleDelete} listings={listings}/>
    </div>
  );
}

export default App;