import React from "react";
import "./blog.css";
import BlogCard from "./BlogCard";
import Back from "../common/back/Back";

const Blog = () => {
  return (
    <div>
      <Back title="Blog post" />
      <section className="blog padding">
        <div className="container">
          <BlogCard />
        </div>
      </section>
    </div>
  );
};

export default Blog;
