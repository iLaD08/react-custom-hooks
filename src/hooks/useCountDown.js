import { useEffect, useState } from "react";

const useCoutDown = (date) => {
  const [countdownLoading, setLoading] = useState(true);
  const [CountDown, setCountDown] = useState({
    days: 0,
    hours: 0,
    min: 0,
    sec: 0,
  });

  const calculateCountdown = (endDate) => {
    let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;

    if (diff <= 0) return false;

    const timeLeft = {
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
      millisec: 0,
    };

    if (diff >= 365.25 * 86400) {
      timeLeft.years = Math.floor(diff / (365.25 * 86400));
      diff -= timeLeft.years * 365.25 * 86400;
    }
    if (diff >= 86400) {
      timeLeft.days = Math.floor(diff / 86400);
      diff -= timeLeft.days * 86400;
    }
    if (diff >= 3600) {
      timeLeft.hours = Math.floor(diff / 3600);
      diff -= timeLeft.hours * 3600;
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60);
      diff -= timeLeft.min * 60;
    }
    timeLeft.sec = diff;

    return timeLeft;
  };

  const addLeadingZeros = (value) => {
    value = String(value);
    while (value.length < 2) {
      value = `0${value}`;
    }
    return value;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const newDate = calculateCountdown(date);
      if (newDate) {
        setCountDown(newDate);
        setLoading(false);
      } else {
        clearInterval(interval);
        setLoading(false);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [date]);

  return {
    countdownLoading,
    countdown: [
      {
        days: addLeadingZeros(CountDown.days),
        hours: addLeadingZeros(CountDown.hours),
        min: addLeadingZeros(CountDown.min),
        sec: addLeadingZeros(CountDown.sec),
      },
    ],
  };
};

export default useCoutDown;
