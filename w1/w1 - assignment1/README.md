# User Profile Cards Application

This project is a React-based application built with Vite and TailwindCSS. It displays a list of user profile cards, allowing users to click on a card to view detailed information about the selected user.

## Features

- Displays user profile cards with names, bios, and images.
- Allows users to click on a card to view detailed information.
- Responsive design with TailwindCSS for styling.

## Concepts Used

### 1. JSX
- JSX (JavaScript XML) is used to define the structure of the UI in a syntax similar to HTML.
- Example:
  ```jsx
  <div className="min-h-screen bg-gray-100 p-20 flex flex-col items-center">
    <h1 className="text-3xl font-bold text-center mb-6 text-indigo-600 mb-20">User Profile Cards</h1>
    <UserList />
  </div>
  ```

### 2. Components
- The application is built using reusable React components:
  - `App`: The root component that renders the application layout.
  - `UserList`: Displays a list of user cards and handles user selection.
  - `UserCard`: Represents an individual user card.
  - `UserDetails`: Displays detailed information about a selected user.

### 3. Props
- Props are used to pass data between components.
- Example:
  - The `UserCard` component receives `user` and `onClick` as props:
    ```jsx
    function UserCard({ user, onClick }) {
      return (
        <div onClick={() => onClick(user.id)} className="bg-white rounded-2xl shadow-md p-6 text-center cursor-pointer">
          <img src={user.image} alt={user.name} className="w-24 h-24 mx-auto object-cover rounded-full mb-4" />
          <h2 className="text-xl font-semibold text-indigo-700">{user.name}</h2>
          <p className="text-gray-600">{user.bio}</p>
        </div>
      );
    }
    ```

## How to Run

1. Install dependencies:
   ```sh
   npm install
   ```

2. Start the development server:
   ```sh
   npm run dev
   ```

3. Open the application in your browser at `http://localhost:3000`.

## Technologies Used

- React
- Vite
- TailwindCSS
- ESLint