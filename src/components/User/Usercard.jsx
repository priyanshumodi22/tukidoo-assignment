import React from "react";

const UserCard = ({ name, image }) => {
  return (
    <div className="w-full h-32 relative rounded-[30px] overflow-hidden cursor-pointer">
      <img src={image} className="w-full h-full object-cover" />
      <p className="absolute -bottom-2 -left-2 bg-white font-medium rounded-3xl px-8 py-2">
        {name}
      </p>
    </div>
  );
};

export default UserCard;
