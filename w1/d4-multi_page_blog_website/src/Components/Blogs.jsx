import { Link, useNavigate } from "react-router-dom";
import BlogCards from "./BlogCards";
import { useEffect, useState } from "react";

function Blogs() {
  const [blog, setblogs] = useState([]);
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  }

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
      <h1 className="text-3xl font-bold mb-8 text-center">All Blogs</h1>
      <button onClick={handleBack} className="flex items-center gap-2 text-xl hover:text-blue-500 mb-5"><i className="text-xl ri-arrow-left-long-fill"></i>Back</button>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blog.map((blog) => (
            
                <BlogCards blog={blog} key={blog.id}  />
        ))}
      </div>
    </div>
  );
}

export default Blogs;
