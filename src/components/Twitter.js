
import React, { useState } from "react";
import './Twitter.css';
import TwitterNotification from './TwitterNotification';

const Twitter = () => {

    const [tweet, setTweet] = useState(false);
    
    return (
        <div>
            <button className="twitter" onClick={() => setTweet(!tweet)}>Twitter</button>
            {tweet && <TwitterNotification />}
        </div>
    );
};

export default Twitter;