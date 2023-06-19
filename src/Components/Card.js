import React from 'react';

const Card = ({ firstName, lastName, email, image }) => {
    return (
        <div className='tc bg-light-green dib br3 ma2 grow bw2 shadow-5'>
            <img src={image} alt="robots"></img>
         <div>
            <h2>{firstName} {lastName}</h2>
            <p>{email}</p>
         </div>
        </div>
    );
}

export default Card;
