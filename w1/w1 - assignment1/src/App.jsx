import React from "react";
import UserList from "./components/UserList";


function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-20 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center mb-6 text-indigo-600 mb-20">User Profile Cards</h1>
      <UserList />
    </div>
  );
}

export default App;
