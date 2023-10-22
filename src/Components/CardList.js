import React from "react";
import Card from './Card';

//Maps through JSON API array to get robot's info
const CardList = ({ robots }) => {
    if (!Array.isArray(robots)) {
        return <div>Waiting for API...</div>;
    }
    return (
    <div>
        {robots.map((robot) => {
                return (
                <Card 
                key={robot.id}
                firstName={robot.firstName} 
                lastName={robot.lastName}
                email={robot.email}
                image={robot.image}
                />
                );
            })}
        </div>
        );
    };

export default CardList;
