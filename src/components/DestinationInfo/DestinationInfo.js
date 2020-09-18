import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './DestinationInfo.css';

const DestinationInfo = (props) => {
    const {name, bg, id} = props.destination;
    return (
        <Link to={"/destinationDetails/"+id}>
            <div className="card-container">
                <Card className="card">
                    <Card.Img className="card-img" variant="top" src={bg} />
                    <Card.ImgOverlay>
                        <h5 className="text-light text-head">{name}</h5>
                    </Card.ImgOverlay>                               
                </Card> 
            </div>
        </Link>
    );
};

export default DestinationInfo;