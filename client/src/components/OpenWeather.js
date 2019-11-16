import React from 'react';
import ReactWeather from 'react-open-weather';
import 'react-open-weather/lib/css/ReactWeather.css';


class OpenWeather extends React.Component {
    constructor(props) {
      super(props);
     
    }
  
    render() {
      return (
        <div>
         
         {/* <ReactWeather forecast="today" apikey="" type="auto" /> */}

        </div>
      );
    }
  }

  export default OpenWeather;