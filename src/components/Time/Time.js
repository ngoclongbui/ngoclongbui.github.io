import React, { useEffect, useState } from "react";
import moment from "moment";
export default function Time() {
  const [time, setTime] = useState(moment());
  useEffect(() => {
    setInterval(() => setTime(new moment()), 3000);
  });

  return (
    <div className="fixed text-[48px] font-light p-5">
      <p>{time.format("HH:mm A")}</p>
      <p>{time.format("dddd")}</p>
      <p>{time.format("MMM YY")}</p>
    </div>
  );
}
