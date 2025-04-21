import React from "react";

function UserDetail({ user }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md mt-6 text-center">
      <img
        src={user.image}
        alt={user.name}
        className="w-32 h-32 mx-auto object-cover rounded-full border-4 border-indigo-200 mb-4"
      />
      <h2 className="text-2xl font-semibold text-indigo-700">{user.name}</h2>
      <p className="text-gray-500 mb-4">{user.bio}</p>
      <p className="font-bold text-indigo-500">Email: {user.email}</p>
      <p className="font-bold text-indigo-500">Location: {user.location}</p>
      <p className="font-bold text-indigo-500">Joined: {user.joined}</p>
    </div>
  );
}

export default UserDetail;
