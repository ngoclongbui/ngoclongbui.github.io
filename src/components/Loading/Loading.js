/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import loading from "../../assets/Loading/Loading.gif";

export default function Loading() {
  const { isStatus } = useSelector((state) => state.LoadingReducers);
  const [duration, setDuration] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isStatus) {
      setDuration(true);
      setInterval(() => {
        setIsLoading(false);
      }, 600);
    }
  }, [isStatus]);

  return isLoading ? (
    <div
      className={`h-screen w-screen flex items-center justify-center fixed z-[999] top-0 left-0 transition duration-500
      ${
        !duration
          ? "backdrop-blur-lg bg-slate-900/[0.3]"
          : "bg-slate-900/[0] backdrop-blur-[0]"
      }`}
    >
      <img
        className={`w-8 h-8 transition duration-500 ${
          !duration ? "opacity-50" : "opacity-0"
        }`}
        src={loading}
        alt="loading-gif"
      />
    </div>
  ) : null;
}
