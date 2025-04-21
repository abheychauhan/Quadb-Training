import React from "react";

function UserCard({ user, onClick }) {
  return (
    <div
      onClick={() => onClick(user.id)}
      className="bg-white rounded-2xl shadow-md p-6 text-center cursor-pointer hover:shadow-lg hover:scale-105 transform transition duration-300"
    >
      <img
        src={user.image}
        alt={user.name}
        className="w-24 h-24 mx-auto object-cover rounded-full mb-4 border-4 border-indigo-100"
      />
      <h2 className="text-xl font-semibold text-indigo-700">{user.name}</h2>
      <p className="text-gray-600">{user.bio}</p>
    </div>
  );
}

export default UserCard;
