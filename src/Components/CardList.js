import React from "react";
import Card from './Card';

//Maps through JSON API to get robot's info
const CardList = ({ robots }) => {
    return (
    <div>
        {robots.map((user, i) => {
                return (
                <Card 
                key={robots[i].id}
                firstName={robots[i].firstName} 
                lastName={robots[i].lastName}
                email={robots[i].email}
                image={robots[i].image}
                />
                );
            })}
        </div>
        );
    };

export default CardList;
