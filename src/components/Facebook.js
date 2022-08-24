
import React, { useState } from "react";
import './Facebook.css';
import Facebook_Notification from "./Facebook_Notification";

const Facebook = () => {

    const [show, setShow]= useState(false); 


    return (
        <div>
            <button className="facebook" onClick={() => setShow(!show)} >Facebook</button>
            { show && <Facebook_Notification />}
            {/* <Facebook_Notification isVisible={show} /> */}
        </div>
    );
};

export default Facebook;