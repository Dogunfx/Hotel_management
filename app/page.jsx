import "./style.css";
import HotelView from "./components/hotelview";
import { hotels } from "./models/hotels";
import { ToastContainer } from "react-toastify";
export default function Home() {
  return (
    <div>
      <title>Hotel Management</title>
      <h1>Hotel management system designed by DogunFX</h1>
      <p>Getting to know more about ReactJS</p>

      <input type="text" placeholder="Enter Hotel Name" />
      <input type="text" placeholder="Enter Hotel Address" />
      <button>Add New Hotel</button>

      {hotels.map((hotel) => (
        <HotelView
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
