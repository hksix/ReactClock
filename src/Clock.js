import React from 'react';

import PlaceName from './PlaceName.js';
import TimeDisplay from './TimeDisplay.js';

const Clock = ({name, time, timeZone, clickHandler}) => (
    <div className="row">
    <div className="clock col-md-4">
        <PlaceName name={name} />
        <TimeDisplay time={time} timeZone={timeZone}/>
        <button onClick={()=> {
            clickHandler(name);
            }}>x</button>
            <br />
            <br />
        </div>
    </div>
);

export default Clock;
