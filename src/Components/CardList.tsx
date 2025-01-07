import React from "react";
import Card from "./Card.tsx";

// Added robot info types
type Robot = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
};

// Allow robots to be an array of Robot, null, or undefined
type CardListProps = {
  robots: Robot[] | null | undefined;
};

//Maps through JSON API array to get robot's info
const CardList: React.FC<CardListProps> = ({ robots }) => {
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
