import React from 'react';
import image from '../../resources/Icon/star_1_.png';
import './PlaceDetails.css';

const PlaceDetails = (props) => {
    const {title, roomInfo, shortDescription, nightPrice, totalPrice, img, rating} = props.place;
    return (
        <div className="place-container my-3">
            <div className="place-left">
                <img src={img} alt=""/>
            </div>
            <div className="place-right p-3">
                <h5>{title}</h5>
                <p>{roomInfo}</p>
                <p>{shortDescription}</p>
                <div className="place-bottom">
                    <div className="place-bottom-left ">
                        <div className="bottom-left mr-2 ">
                            <img src={image} alt=""/>
                        </div>
                        <div className="bottom-right pt-1">
                            <p>{rating}</p>
                        </div>
                    </div>
                    <div className="place-bottom-right pt-1">
                        <div className="mr-2">
                            <p>{nightPrice}</p>
                        </div>
                        <div className="text-muted">
                            <p>{totalPrice}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceDetails;