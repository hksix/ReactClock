import React, { Component } from 'react';

const Displaytime = ({location, time}) => (
    <div>
        <span>
            {location}
            <br /> 
        </span>
        <span>
            {time}
        </span>
    </div>
);

// class WorldClock extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             currentTime: (new Date()),
//             location: 'Atlanta',
//             clockFace: 'normal',
//             digital: false,
//             color: 'yellow'
//         }
//     }
//     __updateTime = (timeDifference) =>{
//         const newTime = new Date(this.state.currentTime.getTime() + timeDifference);
//         this.setState({
//             currentTime: newTime
//         });
//     }
//     __updateLocation = (newLocation) =>{
//         this.setState({
//             locaiton: newLocation
//         });
//     }
//     __updateLookAndFeel = (isDigital, newColor) => {
//         this.setState({
//           digital: isDigital,
//           color: newColor
//         });
//     }
// }


export default Displaytime;