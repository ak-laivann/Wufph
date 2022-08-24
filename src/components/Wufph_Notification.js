import React from "react";
import Facebook_Notification from './Facebook_Notification';
import Whatsapp_Notification from "./Whatsapp_Notification";
import Twitter_Notification from "./Twitter_Notification";
import Insta_Notification from "./Insta_Notification";

const Wufph_Notification = () => {
  return (
    <div  className="wupopup">
        <Facebook_Notification />
        <Insta_Notification />
        <Twitter_Notification />
        <Whatsapp_Notification />
    </div>
  );
};

export default Wufph_Notification;