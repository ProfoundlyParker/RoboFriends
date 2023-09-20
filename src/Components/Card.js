import React from 'react';
import './Card.css';

// Displays robot cards with personal info and images
const Card = ({ firstName, lastName, email, image }) => {
    return (
        <div className='tc background dib br4 ma2 grow bw2 shadow-5'>
            <img src={image} height='300px' width='300px' alt="robots"></img>
         <div>
            <h2>{firstName} {lastName}</h2>
            <p>{email}</p>
         </div>
        </div>
    );
}

export default Card;
