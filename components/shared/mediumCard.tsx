'use client'
import React from 'react';
import Button from '../ui/button';

type MediumCardProps = {
  title?: string;
  description?: string;
  tags?: string[];
  imageUrl?: string;
  buttonText?: string;
  buttonHref?: string;
};

const MediumCard: React.FC<MediumCardProps> = ({
  title = 'Ai Ne Durumda?',
  description = 'Buraya içerik gelecek ve üstte de fotoğraf aslında gayet güzel oalcak hahahaha :)',
  tags = ['Yapay Zeka', 'Yazılım'],
  imageUrl = '/images/defaultImage.png',
  buttonText = 'Yazıyı Oku',
  buttonHref = '#',
}) => {
  return (
    <div className="rounded-2xl overflow-hidden bg-neutral-900 shadow-md w-full max-w-sm font-poppins">
      <div className="bg-neutral-200 relative h-48 flex items-start justify-end p-4">
        <div className="flex gap-2 absolute top-4 right-4 z-10">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="font-advent-pro bg-neutral-500 text-white text-base px-4 py-2 rounded-full tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>
        <img
          src={imageUrl}
          alt="card visual"
          className="absolute inset-0 w-full h-full object-cover rounded-t-2xl"
          style={{ zIndex: 0, opacity: 0.2 }}
        />
      </div>
      <div className="p-6">
        <h3 className="text-white text-xl font-semibold mb-2 line-clamp-2">{title}</h3>
        <p className="text-neutral-400 text-base mb-6 line-clamp-3">{description}</p>
        <Button className="w-full mt-2" variant="primary" as="link" href={buttonHref}>
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default MediumCard;