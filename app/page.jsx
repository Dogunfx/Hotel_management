"use client";

import "./style.css";
import HotelView from "./components/hotelview";
import { hotels } from "./models/hotels";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
export default function Home() {
  var [hotel, setHotel] = useState({
    hotelName: "",
    hotelAddress: "",
    hotelId: 0,
  });
  var [hotelsState, updateHotels] = useState(hotels);

  function addNewHotel() {
    hotel = { ...hotel, hotelId: Math.floor(Math.random() * 199 + 1) };
    updateHotels([...hotelsState, hotel]);
    setHotel({ hotelName: "", hotelAddress: "" });
  }

  return (
    <div>
      <title>Hotel Management</title>
      <h1>Hotel management system designed by DogunFX</h1>
      <p>Getting to know more about ReactJS</p>

      <div className="controls">
        <input
          type="text"
          placeholder="Enter Hotel Name"
          value={hotel.hotelName}
          onChange={(e) => {
            setHotel({ ...hotel, hotelName: e.target.value });
          }}
        />
        <input
          value={hotel.hotelAddress}
          onChange={(e) => {
            setHotel({ ...hotel, hotelAddress: e.target.value });
          }}
          type="text"
          placeholder="Enter Hotel Address"
        />
        <input onClick={addNewHotel} value="Add New Hotel" type="button" />
      </div>

      {hotelsState.map((hotel) => (
        <HotelView
          hotelName={hotel.hotelName}
          hotelAddress={hotel.hotelAddress}
          hotelPhone={hotel.hotelPhone}
          isFav={hotel.isFav}
          key={hotel.hotelId}
        />
      ))}

      <ToastContainer />
    </div>
  );
}
