import React from "react";
import Card from './Card';

const CardList = ({ robots }) => {
    // console.log(robots)
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


/* /* { ((users, i)=> {
        return (
        <Card 
        key={i} 
        id={users[i].id} 
        firstName={users[i].firstName} 
        lastName={users[i].lastName}
        email={users[i].email}
        />
        );
        }) } */