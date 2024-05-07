"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function HotelView({
  hotelName,
  hotelAddress,
  hotelPhone,
  isFav,
}) {
  var [isFavState, setFavState] = useState(isFav);

  function handleClicking() {
    isFavState = !isFavState;
    setFavState(isFavState);
    toast(hotelName + " Has Changed");
  }

  return (
    <div className="hotel-view">
      <div className="hotel-desc">
        <h4 className="no-space">{hotelName}</h4>
        <p className="no-space">{hotelAddress}</p>
        <p className="no-space">{hotelPhone}</p>
      </div>
      <div className="hotel-action">
        <button onClick={handleClicking}>
          {isFavState ? (
            <i className="fa fa-heart"></i>
          ) : (
            <i className="fa fa-heart-o"></i>
          )}
        </button>
      </div>
    </div>
  );
}
