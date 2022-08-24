
import React, { useState } from "react";
import './Facebook.css';
import FacebookNotification from "./FacebookNotification";

const Facebook = () => {

    const [show, setShow]= useState(false); 


    return (
        <div>
            <button className="facebook" onClick={() => setShow(!show)} >Facebook</button>
            { show && <FacebookNotification />}
            {/* <Facebook_Notification isVisible={show} /> */}
        </div>
    );
};

export default Facebook;