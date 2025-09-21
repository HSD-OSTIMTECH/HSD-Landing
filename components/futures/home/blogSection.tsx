import React from "react";
import BlogCard, { BlogCardProps } from "../../shared/blogCard";
import { Icon } from "@iconify/react";

const blogPosts: BlogCardProps[] = [
  {
    title: "2025 Hackathon Başarılarımız!",
    description:
      "Ekibimiz bu yılki hackathonda 1.lik ödülünü kazandı. Proje detayları ve takım üyelerimizin deneyimleri için blog yazımıza göz atın.",
    date: "21 Eylül 2025",
    author: "Poyraz Y.",
    image: "/images/hackathon.jpg",
    href: "/blog/hackathon-2025",
  },
  {
    title: "Yeni Dönem Etkinlikleri Duyuruldu",
    description:
      "2025-2026 dönemi için planlanan tüm etkinlikler ve başvuru tarihleri açıklandı. Takvim ve detaylar için bloga göz atın.",
    date: "15 Eylül 2025",
    author: "Yigit K.",
    image: "/images/events.jpg",
    href: "/blog/etkinlikler-2025",
  },
  {
    title: "Yazılımda Kariyer Paneli Gerçekleşti",
    description:
      "Sektörden önemli isimlerin katıldığı panelde yazılımda kariyer fırsatları konuşuldu. Panel özetini ve tavsiyeleri blogda bulabilirsiniz.",
    date: "10 Eylül 2025",
    author: "Admin",
    image: "/images/panel.jpg",
    href: "/blog/kariyer-paneli",
  },
];

const BlogSection: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-0 py-32">
      <div className="flex items-center gap-3 mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold font-advent-pro text-white">Blog & Haberler</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <BlogCard key={post.title} {...post} />
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
