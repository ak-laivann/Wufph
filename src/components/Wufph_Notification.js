import React from "react";
import FacebookNotification from './FacebookNotification';
import WhatsappNotification from "./WhatsappNotification";
import TwitterNotification from "./TwitterNotification";
import InstaNotification from "./InstaNotification";

const WufphNotification = () => {
  return (
    <div  className="wupopup">
        <FacebookNotification />
        <InstaNotification />
        <TwitterNotification />
        <WhatsappNotification />
    </div>
  );
};

export default WufphNotification;