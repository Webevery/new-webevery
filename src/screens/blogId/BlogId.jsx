import React from "react";
import styles from "./BlogId.module.scss";
import BlogIdSection from "@/sections/blogIdSection/BlogIdSection";

const BlogId = ({ params }) => {
  return <div className="screen">
    <BlogIdSection params={params} />
  </div>;
};

export default BlogId;
