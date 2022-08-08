import React from "react";
import { InlineWidget } from "react-calendly";

const Calendly = () => {
  return (
    <div className="App" >
      <InlineWidget url="https://calendly.com/katlynboches" />
    </div>
  );
};

export default Calendly;