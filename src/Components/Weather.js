import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Card from 'react-bootstrap/Card';
require('dotenv').config();


class Weather extends React.Component {


  render() {

    return (
      <>

        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Weather</Card.Title>

            {this.props.weatherData.map((item,indx) => (
              <Card.Text key={indx}>
                Date: {item.date}<br></br>
                Description: {item.description}

              </Card.Text>

            ))}

            <Card.Text>
              {this.props.weatherData.data}
            </Card.Text>

          </Card.Body>
        </Card>
      </>
    )
  }
}

export default Weather;