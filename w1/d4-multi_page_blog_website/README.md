# Multi-Page Blog Website

This is a simple multi-page blog website built with React, React Router, and TailwindCSS. It fetches blog data from a placeholder API and displays it in a user-friendly interface.

## Features

- **Home Page**: Displays the latest blogs.
- **Blogs Page**: Lists all blogs with a "Read More" option.
- **Blog Details Page**: Shows detailed information about a specific blog, including comments.
- **About Page**: Provides information about the website.
- **Responsive Design**: Built with TailwindCSS for a mobile-friendly experience.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd d4-multi_page_blog_website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

## API

This project uses the [JSONPlaceholder](https://jsonplaceholder.typicode.com/) API to fetch blog data and comments.

### Endpoints Used

- **Posts Endpoint:**  
  `https://jsonplaceholder.typicode.com/posts`  
  Fetches all blog posts.

- **Single Post Endpoint:**  
  `https://jsonplaceholder.typicode.com/posts/:id`  
  Fetches details of a specific blog post.

- **Comments Endpoint:**  
  `https://jsonplaceholder.typicode.com/comments`  
  Fetches all comments.

- **Comments for a Specific Post:**  
  `https://jsonplaceholder.typicode.com/posts/:id/comments`  
  Fetches comments for a specific blog post.

---