
import React, { useState } from "react";
import './Wufph.css';
import Wufph_Notification from './Wufph_Notification';

const Wufph = () => {

    const [all, setAll] = useState(false)
    return (
        <div className="noice">
            <button className="wufph" onClick={()=> setAll(!all)}>Wufph</button>
            { all && <Wufph_Notification /> }
        </div>
    );
};

export default Wufph;