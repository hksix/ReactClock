import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Displaytime from './worldClock.js';
import LocationMenu from './locations.js';
import PlaceName from './PlaceName.js';
import TimeDisplay from './TimeDisplay.js';
import Clock from './Clock.js';
import Adderbutton from './Adderbutton.js';



class App extends Component{
  // 
  constructor(props){
    super(props);

    this.state = {
      time: new Date(),
      cities: {
        Atlanta:{
          // time: new Date(),
          tz: 'America/New_York'
        },
        Tokyo: {
          // time: new Date(),
          tz: 'Asia/Tokyo'
        },
        Zurich: {
          // time: new Date(),
          tz: 'Europe/Zurich'
      }
    }
    }
  }

  componentDidMount(){
    setInterval(()=>{
      this.__updateTimes(this.state.cities);
    },1000);
  }

  render() {
    
    const myClocks = Object.keys(this.state.cities).map( (city, idx) => (
    < Clock 
      name={city} 
      time={this.state.time} 
      timeZone={this.state.cities[city].tz} 
      key={idx} 
      clickHandler={this._deleteClock} /> )
  );
    
    return (
    <div className="App">
      {myClocks}
      <Adderbutton 
      clickHandeler ={this._addClock} />
    </div>
    );
  }

  _addClock = () =>{
    let newCities ={florida: {time: new Date(),tz: 'America/New_York'}}
    let addedCities = Object.assign({}, this.state.cities,newCities)
      this.setState({
        cities: addedCities
        }
      );
  }

  _deleteClock = () =>{
    console.log(this.state.cities)
    
    }

  __updateTimes = () =>{

  this.setState({
    time: new Date()
    })
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
