import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
function BlogDetails() {
  const { id } = useParams();
  const [bg, setbg] = useState([]);
  const [bgcmnts, setbgcmnts] = useState([])
  const [bgcmntPOstID, setbgcmntPOstID] = useState([])
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  }
  const fetchblogDetails = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => {
         setbg(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  const fetchblogcomments = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data), setbgcmnts(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }


  useEffect(() => {

        fetchblogDetails();
        fetchblogcomments();

  }, []);


  if (!bg) {
    return <h2 className="text-center text-2xl mt-8">bg not found!</h2>;
  }

  return  bg  ? (
    <div className="max-w-3xl mx-auto p-6">
      <button onClick={handleBack} className="flex items-center gap-2 text-xl hover:text-blue-500 mb-5"><i className="text-xl ri-arrow-left-long-fill"></i>Back</button>
      
      <h1 className="text-3xl font-bold mb-6">{bg.title}</h1>
      <p className="text-gray-700 leading-relaxed">{bg.body}</p>
      <div>
        <h2 className="text-2xl font-bold mt-8 mb-4">Comments</h2>
        {bgcmnts.length > 0 ? (
          bgcmnts.map((comment) => (
            <Link to={`/blogs/${comment.id}`} key={comment.id} className="border border-gray-400 rounded-md p-4 mb-4 block hover:bg-gray-100 transition">
              <h3 className="text-gray-800 font-semibold">{comment.name}</h3>
              <p>Email : <span className="text-gray-600"> {comment.email}</span> </p>
              <p className="text-gray-400">{comment.body}</p>
            </Link>
          ))
        ) : (
          <p>No comments available.</p>
        )}
      </div>
    </div>
  ) :
    <div className="text-center mt-8">
      <h2 className="text-2xl">Loading...</h2>
    </div>
  ;
}

export default BlogDetails;
