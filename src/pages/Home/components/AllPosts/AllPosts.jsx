import React from "react";
import Post from "./Post";

const AllPosts = () => {
  return (
    <div className="max-w-[517px] w-full">
      <div className="flex justify-between items-center mb-[32px]">
        <h2 className="heading-2">All Posts</h2>
        <a className="text-purple body-1 cursor-pointer">View All</a>
      </div>

      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default AllPosts;
