import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_BLOGS } from "../GraphQL/Queries";
import "../css/GetBlogs.css";

function GetBlogs() {
  // const { blogId } = useParams();
  const { error, loading, data } = useQuery(GET_BLOGS);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    if (data) {
      setBlogs(data.blogs);
      // console.log(data.blogs);
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div>
      {blogs.map((blog) => (
        <div key={blog.id} className="blog-card">
          <h1>{blog.title}</h1>
          <p>Status: {blog.status}</p>
          <p>Content: {blog.content}</p>
          <p>User ID: {blog.userId}</p>
          <p>Organization ID: {blog.organizationId}</p>
          <p>Created At: {new Date(blog.createdAt).toLocaleString()}</p>
          {blog.updatedAt && (
            <p>Updated At: {new Date(blog.updatedAt).toLocaleString()}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default GetBlogs;
