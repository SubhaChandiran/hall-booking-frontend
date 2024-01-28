import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";
import Error from "../components/Error";

function Bookingscreen({ match }) {
  const { roomid } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [room, setRoom] = useState();

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const data = (
          await axios.post("/api/rooms/getroombyid", {
            roomid: roomid,
          })
        ).data;
        setRoom(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    })();
  }, []);

  return (
    <>
      <div className="m-5">
        {loading ? (
          <Loader />
        ) : room ? (
          <div>
            <div className="row justify-content-center mt-5 bs">
              <div className="col-md-6">
                <h1>{room.name}</h1>
                <img src={room.imageurls[0]} className="bigimg" />
              </div>
              <div className="col-md-6">
                {/* --- Booking Details --- */}
                <div style={{ textAlign: "right" }}>
                  <h1>Booking Details</h1>
                  <hr />
                  <b>
                    <p>Name : </p>
                    <p>From Data : </p>
                    <p>To Date : </p>
                    <p>Max Count : {room.maxcount} </p>
                  </b>
                </div>
                {/* ---- Amount ---- */}
                <div style={{ textAlign: "right" }}>
                  <b>
                    <h1>Amount</h1>
                    <hr />
                    <p>Total Days : </p>
                    <p>Rent Per Day : {room.rentperday} </p>
                    <h1>Total Amount : </h1>
                  </b>
                </div>
                <div style={{ float: "right" }}>
                  <button className="btn btn-primary">Pay Now</button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Error />
        )}
      </div>
    </>
  );
}

export default Bookingscreen;
