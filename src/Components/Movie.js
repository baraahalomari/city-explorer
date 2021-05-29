import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/CardDeck';

class Movies extends React.Component{
    render(){
        return(
            <>
            <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Movies</Card.Title>

            {this.props.moviesData.map((item,indx) => (
              <Card.Text key={indx}>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>Release Date : {item.releaseDate}</Card.Text>
                <Card.Text> Votes : {item.totalVotes}</Card.Text>
                <img variant ='top' src={item.imagePath} alt='' className='image' height='300px' width='300px'/>

              </Card.Text>

            ))}

            <Card.Text>
              {this.props.moviesData.data}
            </Card.Text>

          </Card.Body>
        </Card>
            </>
        )
    }
}
export default Movies;