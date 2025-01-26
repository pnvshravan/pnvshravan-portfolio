import { useState, useEffect } from "react";
import { DateTime } from "luxon";

export const getLocalTime = () => {
  const [localTime, setLocalTime] = useState("");

  // Function to get the local time with the desired format
  const getLocalTime = () => {
    const now = DateTime.now();
    const format = "HH:mm:ss (ZZZZ) @ dd-MM-yyyy";
    return now.toFormat(format);
  };

  useEffect(() => {
    // Update the time every second
    const interval = setInterval(() => {
      setLocalTime(getLocalTime());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return localTime;
}