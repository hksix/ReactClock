import React from 'react';

import PlaceName from './PlaceName.js';
import TimeDisplay from './TimeDisplay.js';

const Clock = ({name, time}) => (
    <div className="clock">
        <PlaceName name={name} />
        <TimeDisplay time={time}/>
        </div>
);

export default Clock;
