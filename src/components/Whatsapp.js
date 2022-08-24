
import React, { useState } from "react";
import './Whatsapp.css';
import WhatsappNotification from './WhatsappNotification';

const Whatsapp = () => {

    const [wapp, setWapp] = useState(false);
    
    return (
        <div>
            <button className="whatsapp" onClick={() => setWapp(!wapp)}>Whatsapp</button>
            { wapp && <WhatsappNotification /> }
        </div>
    );
};

export default Whatsapp;