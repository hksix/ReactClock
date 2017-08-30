import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Displaytime from './worldClock.js';
import LocationMenu from './locations.js';
import PlaceName from './PlaceName.js';
import TimeDisplay from './TimeDisplay.js';
import Clock from './Clock.js';

const cities = {
  Atlanta: new Date(),
  Tokyo: new Date(),
  Zurich: new Date()
}

class App extends Component{
  render() {
    const myClocks = Object.keys(cities).map( (city, idx) => < Clock name={city} time={cities[city]} key={idx} /> );
    
    return (
    <div className="App">
      {myClocks}
    </div>
    );
  }
  }



   
        {/* < PlaceName name={this.state.location[0]} />
        < TimeDisplay time={new Date()} />
        < PlaceName name={this.state.location[1]} /> */}



        {/* < LocationMenu name={this.state.location[0]} handleUpdate={this.__updateTime}/>
        < LocationMenu name={this.state.location[1]} handleUpdate={this.__updateTime}/>
        < LocationMenu name={this.state.location[2]} handleUpdate={this.__updateTime}/>
        
        <div>
          <Displaytime location={this.state.location[0]} time={this.state.currentTime.toLocaleTimeString('en-US',{timeZone:'America/New_York'})} />
          <Displaytime location={this.state.location[1]} time={this.state.currentTime.toLocaleTimeString('en-US',{timeZone:'Asia/Tokyo'})} />
          <Displaytime location={this.state.location[2]} time={this.state.currentTime.toLocaleTimeString('en-US',{timeZone:'Europe/Zurich'})} />
        </div> */}

//   __getHours = (offset)=>{
//     return this.state.currentTime.getHours() + offset;
//   }
//   __getMins = ()=>{
//     return this.state.currentTime.getMinutes();
//   }
//   __getSeconds = ()=>{
//     return this.state.currentTime.getSeconds();
//   }

//   __fulltime = (offset)=>{
//     return this.__getHours(offset) + ":" + this.__getMins() + ":" + this.__getSeconds();
//   }
//   __updateTime = () =>{
//     const newTime = new Date(this.state.currentTime.getTime());
//     this.setState({
//         currentTime: newTime
//     });
// }
// __updateLocation = (newLocation) =>{
//     this.setState({
//         locaiton: newLocation
//     });
// }
// __updateLookAndFeel = (isDigital, newColor) => {
//     this.setState({
//       digital: isDigital,
//       color: newColor
//     });
// }
  

export default App;
