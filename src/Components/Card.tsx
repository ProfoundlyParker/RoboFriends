import React from 'react';

// Added types for card props received
type CardProps = {
    firstName: string;
    lastName: string;
    email: string;
    image?: string;
}

// Displays robot cards with personal info and images
const Card: React.FC<CardProps> = ({ firstName, lastName, email }) => {
    // Displays robot images instead of cat images
    const robotImage = `https://robohash.org/${email}?set=set1`
    return (
        <div className='text-center bg-card-bg inline-block rounded-2xl m-2 grow border-0 shadow-2xl'>
            <img src={robotImage} height='300px' width='300px' alt="robots"></img>
         <div>
            <h2 className='block box-border text-2xl font-bold mt-5 ms-0 me-0 m-4'>{firstName} {lastName}</h2>
            <p className='box-border block ms-0 me-0 m-4 mt-5 mb-4'>{email}</p>
         </div>
        </div>
    );
}

export default Card;
