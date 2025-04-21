import React, { useState } from "react";
import UserCard from "./UserCard";
import UserDetails from "./UserDetails";

const users = [
  {
    id: 1,
    name: "Rajnesh",
    bio: "Software Developer",
    email: "rajnesh@example.com",
    location: "USA",
    joined: "January 2020",
    image: "https://imgs.search.brave.com/hzFLmhZ6ydqhddIfQcS2KxWrGNRHGNZAIJZRnZaWA7E/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTg5/MDkwMzM5L3Bob3Rv/L2J1c2luZXNzbWFu/LXVzaW5nLW1vYmls/ZS1waG9uZS13aGls/ZS13cml0aW5nLW5v/dGVzLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1JamZ6cVha/VVVjS2xXXzltUC14/bEtpQXAtd0hfMWp6/c0U3cE1uZGxwbVAw/PQ"
  },
  {
    id: 2,
    name: "Sakshi",
    bio: "Graphic Designer",
    email: "skh@example.com",
    location: "Canada",
    joined: "March 2021",
    image: "https://imgs.search.brave.com/XUfaIKnS77EQnPR0YHGpA2zUoGHxuP9jPU8LW3SNxz0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQy/MDQ4Njg4OS9waG90/by9jYW5kaWQtcG9y/dHJhaXQtb2YteW91/bmctbWlkZGxlLWVh/c3Rlcm4tZGlnaXRh/bC1uYXRpdmUuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPVNW/N1poS2c3cUNlTDZv/WVpHQmFJeHFmVFRy/UVp1MDhrbmR2SUtx/ZExfUEk9"
  },
  {
    id: 3,
    name: "Shubham",
    bio: "Project Manager",
    email: "shubham@example.com",
    location: "Brazil",
    joined: "December 2019",
    image: "https://imgs.search.brave.com/6bad9MvzXSeERjgsRJtqQpGI9ZPY2WM-cui-8J36LWA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM2/OTE5OTM2MC9waG90/by9wb3J0cmFpdC1v/Zi1hLWhhbmRzb21l/LXlvdW5nLWJ1c2lu/ZXNzbWFuLXdvcmtp/bmctaW4tb2ZmaWNl/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz11anlHZHU4aktJ/MlVCNTUxNVhaQTMz/VHQ0REJoRFUxOWRL/U1RVVE1adnJnPQ"
  }
];

function UserList() {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserClick = (userId) => {
    if (selectedUser && selectedUser.id === userId) {
      setSelectedUser(null); // Deselect user if the same card is clicked again
    } else {
      const user = users.find((user) => user.id === userId);
      setSelectedUser(user);
    }
  };

  return (
      <div className="flex flex-wrap flex-col justify-center gap-6">
          <div className="flex flex-wrap justify-center gap-6">
              {users.map((user) => (
                  <UserCard key={user.id} user={user} onClick={()=>handleUserClick(user.id)} />
              ))}
          </div>
      {selectedUser && <UserDetails user={selectedUser} />}
    </div>
  );
}

export default UserList;
