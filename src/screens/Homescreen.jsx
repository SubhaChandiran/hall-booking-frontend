import React, { useEffect, useState } from "react";
import axios from "axios";
import Room from "../components/Room";
import Loader from "../components/Loader";
import Error from "../components/Error";

function Homescreen() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const data = (await axios.get("/api/rooms/getallrooms")).data;
        setRooms(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        console.log(error);
        setLoading(false);
      }
    })();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5">
          {loading ? (
            <h1>
              <Loader />
            </h1>
          ) : rooms.length > 1 ? (
            rooms.map((room) => {
              return (
                <div key={room.id} className="col-md-9 mt-2">
                  <Room room={room} />
                </div>
              );
            })
          ) : (
            <Error />
          )}
        </div>
      </div>
    </>
  );
}

export default Homescreen;
