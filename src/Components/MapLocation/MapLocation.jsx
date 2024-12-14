import React from "react";

const MapLocation = () => {
  return (
    <div className="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3244.354153042275!2d-97.63327272475347!3d35.594329634743694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b2035dabef00bb%3A0xa5f7eb1a20a89c35!2s6605%20NW%20121st%20St%2C%20Oklahoma%20City%2C%20OK%2073162%2C%20USA!5e0!3m2!1sen!2s!4v1708673658507!5m2!1sen!2s"
        width="250"
        height="250"
        style={{ border: "0px", borderRadius: "10px" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapLocation;
