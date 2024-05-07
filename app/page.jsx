"use client";

import "./style.css";
import HotelView from "./components/hotelview";
import { hotels } from "./models/hotels";
import { toast, ToastContainer } from "react-toastify";
import { useState } from "react";
export default function Home() {
  var [hotelName, setHotelName] = useState("");
  var [hotelAddress, setHotelAddress] = useState("");
  var [hotelsState, setHotelsState] = useState(hotels);

  function updateHotelName(evt) {
    setHotelName(evt.target.value);
  }

  function updateHotelAddress(evt) {
    setHotelAddress(evt.target.value);
  }

  function addNewHotel() {
    var newHotel = {
      hotelName: hotelName,
      hotelAddress: hotelAddress,
      hotelPhone: "NA",
      isFav: false,
    };

    setHotelsState([...hotelsState, newHotel]);
    toast(hotelName + " Hotel has been added");
    setHotelAddress("");
    setHotelName("");
  }

  return (
    <div>
      <title>Hotel Management</title>
      <h1>Hotel management system designed by DogunFX</h1>
      <p>Getting to know more about ReactJS</p>

      <input
        type="text"
        placeholder="Enter Hotel Name"
        value={hotelName}
        onChange={updateHotelName}
      />
      <input
        type="text"
        placeholder="Enter Hotel Address"
        value={hotelAddress}
        onChange={updateHotelAddress}
      />
      <button onClick={addNewHotel}>Add New Hotel</button>

      {hotelsState.map((hotel, index) => (
        <HotelView
          key={index}
          hotelName={hotel.hotelName}
          hotelAddress={hotel.hotelAddress}
          hotelPhone={hotel.hotelPhone}
          isFav={hotel.isFav}
        />
      ))}

      <ToastContainer />
    </div>
  );
}
