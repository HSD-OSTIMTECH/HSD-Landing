import React from 'react';
import {Icon} from '@iconify/react'

interface GalleryCardProps {
    image: string;
    title: string;
    description: string;
    status?: string;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ image, title, description, status }) => {
    return (
        <div
            className="relative rounded-xl overflow-hidden bg-primary shadow-lg group transition-all duration-300 cursor-pointer w-full max-w-xs sm:max-w-sm md:max-w-md aspect-square"
        >
            {/* Image */}
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover block transition-all duration-300 group-hover:scale-105 aspect-square"
            />
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-primary bg-opacity-95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col p-4 sm:p-6 justify-between">
                <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2 sm:mb-4">{title}</h3>
                    <p className="text-sm sm:text-base text-white/90 leading-relaxed">{description}</p>
                </div>
                <div className="flex items-center gap-2 text-white/80 text-xs sm:text-sm mt-4">
                    <Icon icon="hugeicons:location-01" className="text-white text-lg sm:text-xl" />
                    <span>{status || 'Online'}</span>
                </div>
            </div>
        </div>
    );
};

export default GalleryCard;