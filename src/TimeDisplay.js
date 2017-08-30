import React from 'react';

const TimeDisplay = ({time}) =>(
    <p>
        {time.toLocaleTimeString('en-US',
          {timeZone:'America/New_York'
          })}
    </p>

);

export default TimeDisplay;