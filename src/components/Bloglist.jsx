import React, { useState, useEffect } from "react";
import loadingImg from "../assets/boxing_fitness.webp";
import Card from "./Card.jsx";

const Bloglist = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setLoading] = useState(false);

  function extractImage(content) {
    const match = content.match(/<img[^>]+src="([^">]+)"/);
    return match ? match[1] : null;
  }

  useEffect(() => {
    setLoading(true);
    fetch("https://muscleandiron-blog-backend.vercel.app/blogger/posts")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {isLoading ? (
        <div>
          <p>Loading....</p>
        </div>
      ) : (
        <>
          <div>
            <img
              src={loadingImg}
              alt="Loading..."
              className="w-full h-full object-cover py-2"
            />
          </div>
          <div>
            <h1 className="text-2xl md:text-4xl font-bold text-center py-4">
              The <span className="text-indigo-500 py-5">Muscle N' Iron</span>{" "}
              Blog
            </h1>
          </div>
          <div className="grid grid-col-1 md:grid-cols-3 lg:grid-cols-4 w-full gap-5 p-2 justify-center">
            {blogs.map((blog, i) => {
              return (
                <Card
                  key={blog.id || i}
                  title={blog.title}
                  content={blog.content}
                  image={extractImage(blog.content)}
                  url={blog.url}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Bloglist;
