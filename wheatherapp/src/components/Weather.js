import React from 'react';

const Weather = props => {
    return(
         <div>
              {
                  props.city && props.country && <p className="weather__key">Location:  
                     <span className="weather__value"> {props.city} {props.country}</span>
                      
                      </p>
              } 
              {
                  props.temperature && <p className="weather__key">temperature: 
                      <span className="weather__value"> {parseFloat(Math.round(props.temperature - 273)).toFixed(2)} °C</span>
                      </p>
              }
              {
                  props.humidity && <p className="weather__key">humidity: 
                       <span className="weather__value"> {props.humidity}</span>
                       </p>
              }
              {
                  props.description && <p className="weather__key">Conditions: 
                      <span className="weather__value"> {props.description}</span>

                      </p>
              }
              {
                  props.windSpeed && <p className="weather__key">Wind Speed: 
                      <span className="weather__value"> {props.windSpeed} km/h</span>
                  </p>
              }
              {
                  props.error && <p>{props.error}</p>
              }
             
            </div>
    );
}

export default Weather;