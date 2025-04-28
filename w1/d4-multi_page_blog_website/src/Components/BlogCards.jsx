import { Link } from "react-router-dom";

function BlogCards({ blog }) {
  return (
    <div className="border-gray-300 border rounded-md p-4 shadow-lg hover:shadow-2xl transition">
      <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
      <p className="text-gray-600 mb-4">{blog.summary}</p>
      <Link to={`/blogs/${blog.id}`} className="text-blue-500 hover:underline">
        Read More →
      </Link>
    </div>
  );
}

export default BlogCards;
