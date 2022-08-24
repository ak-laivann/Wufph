
import React, { useState } from "react";
import './Twitter.css';
import Twitter_Notification from './Twitter_Notification';

const Twitter = () => {

    const [tweet, setTweet] = useState(false);
    
    return (
        <div>
            <button className="twitter" onClick={() => setTweet(!tweet)}>Twitter</button>
            {tweet && <Twitter_Notification />}
        </div>
    );
};

export default Twitter;