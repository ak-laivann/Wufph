
import React, { useState } from "react";
import './Insta.css';
import Insta_Notification from './Insta_Notification';

const Instagram = () => {

    const [ig, setIg]= useState(false); 

    return (
        <div>
            <button className="instagram" onClick={()=>setIg(!ig)}>Instagram</button>
            { ig && <Insta_Notification />}

        </div>
    );
};

export default Instagram;