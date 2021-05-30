import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';


class Movies extends React.Component {
  
  render() {
    return (
      <>
        {this.props.moviesData.map((item,i) => {
          // console.log(this.props.moviesData);
          // console.log(item.releaseData);
         
        return( <Card key={i} className='MovieCard' style={{ width: '18rem' }}>
             <img variant='top' src={item.imgPath} alt='' className='image' height='300px' width='300px' />
            <Card.Body>
              <Card.Title>Movies</Card.Title>
              <Card.Text >
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>Release Date : {item.releaseData} <br />
                Over View : {item.overview}<br />
                Average Votes : {item.avgVotes}<br />
                Total Votes : {item.totalVotes}<br />
                popularity: {item.popularity}<br />
                </Card.Text>

              </Card.Text>

            </Card.Body>
          </Card> )

         
        })
        }
      </>
    )
  }
}
export default Movies;