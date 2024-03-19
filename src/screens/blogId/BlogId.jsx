import React from "react";
// import styles from "./BlogId.module.scss";
import BlogIdSection from "@/sections/blogIdSection/BlogIdSection";

const BlogId = ({ params }) => {
  return (
    <>
      <BlogIdSection params={params} />
    </>
  );
};

export default BlogId;
