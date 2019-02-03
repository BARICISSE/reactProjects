import React from 'react';
import Titles from './components/Titles'
import Form from './components/Form'

import Weather from './components/Weather'

const API_KEY = "a390f78373260f6b8b0ebd2998b2c01d";

class App extends React.Component {
      state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined,
        wind: undefined
      }
      getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`);
        const data = await api_call.json();
       if(city && country){
        console.log(data);
        this.setState({
          temperature: data.main.temp,
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          wind: data.wind.speed,
          error: ""
        });
      } else {
        this.setState({
          temperature: undefined,
          city: undefined,
          country: undefined,
          humidity: undefined,
          description: undefined,
          error: "Error: Enter a value"
        });
      }
    }
   render(){
     return (
       <div> 
          <div className="wrapper">
            <div className="main">
              <div className="contiainer">
                <div className="row">
                  <div className="col-xs-5 title-container">
                      <Titles />
                  </div>
                  <div className="col-xs-7 form-container">
                        <Form click={this.getWeather}></Form>
                        <Weather
                          temperature={this.state.temperature}
                          city={this.state.city}
                          country={this.state.country}
                          humidity={this.state.humidity}
                          description={this.state.description}
                          windSpeed={this.state.wind}
                          error={this.state.error}
                        >
                        </Weather>
                  </div>
                </div>
              </div>
            </div>
          </div>
       </div>
     );
   }
}

export default App;