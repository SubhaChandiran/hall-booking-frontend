import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Bookingscreen({ match }) {
  const { roomid } = useParams();
  const [loading, setLoading] = useState();
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
      <div>Bookingscreen</div>
      <h1>Room id = {roomid}</h1>
    </>
  );
}

export default Bookingscreen;
