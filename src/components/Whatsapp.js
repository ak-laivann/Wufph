
import React, { useState } from "react";
import './Whatsapp.css';
import Whatsapp_Notification from './Whatsapp_Notification';

const Whatsapp = () => {

    const [wapp, setWapp] = useState(false);
    
    return (
        <div>
            <button className="whatsapp" onClick={() => setWapp(!wapp)}>Whatsapp</button>
            { wapp && <Whatsapp_Notification /> }
        </div>
    );
};

export default Whatsapp;