import React from 'react';
import './Card.css';

// Added types for card props received
type CardProps = {
    firstName: string;
    lastName: string;
    email: string;
    image: string;
}

// Displays robot cards with personal info and images
const Card: React.FC<CardProps> = ({ firstName, lastName, email, image }) => {
    // Displays robot images instead of cat images
    const robotImage = image.replace('?set=set4', '')
    return (
        <div className='tc background dib br4 ma2 grow bw2 shadow-5'>
            <img src={robotImage} height='300px' width='300px' alt="robots"></img>
         <div>
            <h2>{firstName} {lastName}</h2>
            <p>{email}</p>
         </div>
        </div>
    );
}

export default Card;
