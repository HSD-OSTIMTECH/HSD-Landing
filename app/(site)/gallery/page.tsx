import React from 'react';
import GalleryCard from '@/components/shared/galleryCard';

const galleryItems = [
    {
        image: '/images/defaultImage.png',
        title: '2025 HSD OSTIMTECH HACKATHON',
        description: '2025 HSD OSTIMTECH HACKATHON Kontejanı hakkında ve süreç Hakkında yazı falan işte burada konsept bu şekilde çok ta bir olayı yok',
        status: 'Online',
    },
    {
        image: '/images/defaultImage.png',
        title: '2024 HSD OSTIMTECH SUMMIT',
        description: '2024 HSD OSTIMTECH SUMMIT hakkında kısa bir açıklama burada yer alacak.',
        status: 'Online',
    },
    {
        image: '/images/defaultImage.png',
        title: '2023 HSD OSTIMTECH WORKSHOP',
        description: '2023 HSD OSTIMTECH WORKSHOP ile ilgili detaylar burada olacak.',
        status: 'Online',
    },
];

const Gallery = () => {
    return (
        <div className='px-5 sm:px-0 my-24 max-w-7xl container mx-auto flex flex-col items-start gap-6'>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-advent-pro font-semibold max-w-lg">
                HSD OSTIMTECH'den <span className='text-primary'>Kareler</span>
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
                {galleryItems.map((item, idx) => (
                    <GalleryCard
                        key={idx}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        status={item.status}
                    />
                ))}
            </div>
        </div>
    );
};

export default Gallery;