import React from "react";

const Countdown = ({ countdownLoading, countdown }) => (
  <div>
    <h2>Countdown:</h2>
    {countdownLoading ? (
      <div>Countdown loading...</div>
    ) : (
      countdown.map(({ days, hours, min, sec }) => (
        <ul style={{ listStyle: "none" }}>
          <li>Days: {days}</li>
          <li>Hours: {hours}</li>
          <li>Min: {min}</li>
          <li>Sec: {sec}</li>
        </ul>
      ))
    )}
  </div>
);

export default Countdown;
