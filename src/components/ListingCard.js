import React, { useState } from "react";

function ListingCard({ listing, handleDelete }) {

  const [isClicked, setIsClicked] = useState(false)

  function truify() {
    setIsClicked(true)
  }

  function falsify() {
    setIsClicked(false)
  }

  function handleClick() {
    fetch(`http://localhost:6001/listings/${listing.id}`, {
    method: "DELETE",
  })
    .then((r) => r.json())
    .then(() => handleDelete(listing.id));
    
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={"description"} />
      </div>
      <div className="details">
        {!isClicked ? (
          <button onClick={truify} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={falsify} className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button onClick={handleClick} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;