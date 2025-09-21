'use client'
import React from "react";
import BlogCard from "../../shared/blogCard";

const BlogSection: React.FC = () => {
  const [posts, setPosts] = React.useState<any[]>([]);

  React.useEffect(() => {
    fetch("/api/medium")
      .then((res) => res.json())
      .then(setPosts)
      .catch(console.error);
  }, []);

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-0 pb-32">
      <div className="flex items-center gap-3 mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold font-advent-pro text-white">Son Medium Yazılarımız</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <BlogCard key={post.title} {...post} />
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
