import React from 'react';
import axios from 'axios';
import { Form, Button, Card } from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      locData: '',
      displayMap: false,
      errorMessage: false
    }

  }
  getLocation = async (event) => {
    event.preventDefault();
    let locUrl = `https://eu1.locationiq.com/v1/search.php?key=pk.318d7e351679b370b49a56a43771dcfc&q=${this.state.searchQuery}&format=json`
    try {
      let locResult = await axios.get(locUrl);
      this.setState({
        locData: locResult.data[0],
        displayMap: true
      })
    }
    catch {
      this.setState({
        displayMap: false,
        errorMessage: true
      })
    }
  }
  updateSearchQuery = (event) => {
    this.setState({
      searchQuery: event.target.value
    })
  }
  render() {
    return (
      <>
        <Form onSubmit={this.getLocation}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Location </Form.Label>
            <Form.Control placeholder="Enter location" onChange={this.updateSearchQuery} />

          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
  </Button>
        </Form>
        {/* <p> {this.state.locData.display_name} </p>
        {this.state.displayMap &&
          <img
            src={`https://maps.locationiq.com/v3/staticmap?key=pk.318d7e351679b370b49a56a43771dcfc&center=${this.state.locData.lat},${this.state.locData.lon}`} alt=''
          />
        } */}
       
        {this.state.displayMap &&
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={`https://maps.locationiq.com/v3/staticmap?key=pk.318d7e351679b370b49a56a43771dcfc&center=${this.state.locData.lat},${this.state.locData.lon}`} />
          <Card.Body>
            <Card.Title>Locations</Card.Title>
            <Card.Text>
              {this.state.locData.display_name}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
}
      </>
    )
  }  
}
export default App;
