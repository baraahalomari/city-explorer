import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Card from 'react-bootstrap/Card';
require('dotenv').config();


class Weather extends React.Component {


  render() {



    return (
      <>
        {(this.props.weatherData.length !== 0 && this.props.displayWeather) && this.props.weatherData.map(item => {
          return (
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Weather</Card.Title>
                  <Card.Text >
                    Date: {item.date}<br></br>
                Description: {item.description}

                  </Card.Text>
                <Card.Text>
                  {this.props.weatherData.data}
                </Card.Text>

              </Card.Body>
            </Card>
          )
        })
        }
      </>
    )
  }
}

export default Weather;