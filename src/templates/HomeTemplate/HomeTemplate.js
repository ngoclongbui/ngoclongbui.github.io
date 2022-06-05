import React from "react";
import Time from "../../components/Time/Time";
import Home from "../../pages/Home/Home";

export default function BasicTemplate() {
  return (
    <section className="homeTemplate flex items-center justify-center">
      <div className="2xl:container w-screen h-screen max-h-[960px]">
        <Time />
        <Home />
      </div>
    </section>
  );
}
