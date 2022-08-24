
import React, { useState } from "react";
import './Insta.css';
import InstaNotification from './InstaNotification';

const Instagram = () => {

    const [ig, setIg]= useState(false); 

    return (
        <div>
            <button className="instagram" onClick={()=>setIg(!ig)}>Instagram</button>
            { ig && <InstaNotification />}

        </div>
    );
};

export default Instagram;