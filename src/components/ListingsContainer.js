import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, handleDelete }) {
  return (
    <main>
      <ul className="cards">
        {listings.map(listing => <ListingCard key={listing.id} handleDelete={handleDelete} listing={listing}/>)}
      </ul>
    </main>
  );
}

export default ListingsContainer;