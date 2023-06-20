import React from "react";
import Card from './Card';

const CardList = ({ robots }) => {
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
