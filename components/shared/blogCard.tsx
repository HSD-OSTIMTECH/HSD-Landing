import React from "react";
import { Icon } from "@iconify/react";

export type BlogCardProps = {
  title: string;
  description: string;
  date: string;
  author: string;
  image?: string;
  href?: string;
};

const BlogCard: React.FC<BlogCardProps> = ({ title, description, date, author, image, href }) => {
  return (
    <a
      href={href || "#"}
      className="group relative flex flex-col bg-neutral-900/60 border border-neutral-800 rounded-2xl shadow-lg overflow-hidden hover:border-primary/30 hover:bg-neutral-900/80 transition-all duration-300"
    >
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-300"
        />
      )}
      <div className="flex flex-col gap-2 p-5 flex-1">
        <div className="flex items-center gap-2 text-xs text-neutral-400 font-poppins mb-1">
          <Icon icon="hugeicons:calendar-01" className="text-primary text-base" />
          <span>{date}</span>
          <span className="mx-2">•</span>
          <Icon icon="hugeicons:user-01" className="text-primary text-base" />
          <span>{author}</span>
        </div>
        <h3 className="text-lg font-bold font-advent-pro text-white group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-neutral-400 font-poppins text-sm line-clamp-3">
          {description}
        </p>
      </div>
    </a>
  );
};

export default BlogCard;
