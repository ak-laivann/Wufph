
import React, { useState } from "react";
import './Wufph.css';
import WufphNotification from './WufphNotification';

const Wufph = () => {

    const [all, setAll] = useState(false)
    return (
        <div className="noice">
            <button className="wufph" onClick={()=> setAll(!all)}>Wufph</button>
            { all && <WufphNotification /> }
        </div>
    );
};

export default Wufph;