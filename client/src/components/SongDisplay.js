import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap';

class SongDisplay extends React.Component {

  render() {

    return (
      <div>
        {this.props.data.map((a, i) => <ListGroup className='list-group' key={i}>
          <a href={a.uri} target='_blank' rel="noreferrer">
            <ListGroupItem className='list-group-item h2_p_left'>
              <div className='row'>
                <div className='col col-auto'>
                  <img className='cropped' src={a.url} alt={a.name + "album image"} />
                </div>
                <div className='col textsize'>
                  <div className='ms-2 me-auto'>
                    <div className='fw-bold'>{a.name}</div>
                    <p>{a.artist}</p>
                  </div>
                </div>
              </div>
            </ListGroupItem>
          </a>
        </ListGroup>)}
      </div>

    )
  }
}

export default SongDisplay;
