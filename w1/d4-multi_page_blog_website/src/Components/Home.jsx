import { use, useEffect, useState } from "react";
import BlogCards from "./BlogCards";


function Home() {
    const [blogs, setblogs] = useState([])
    const latestBlogs = blogs.slice(0, 6);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        console.log(data), setblogs(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    }
    , []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Welcome to My Blog</h1>
      <div className="grid gap-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {latestBlogs.map((blog) => (
          <BlogCards key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}

export default Home;
