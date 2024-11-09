import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const buttonNames = [
    "All",
    "Gaming",
    "Songs",
    "Live",
    "Cricket",
    "Cooking",
    "Valentines",
    "Soccer",
    "News",
    "Music",
    "Gadgets",
  ];

  return (
    <div className="flex">
      {buttonNames.map((name) => (
        <Button key={name} name={name} />
      ))}
    </div>
  );
};

export default ButtonList;
