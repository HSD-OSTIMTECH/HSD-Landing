// Navigation ve Footer için ortak link verileri

export const navigationData = {
  about: {
    title: "Hakkımızda",
    links: [
      { href: "/about", text: "Biz Kimiz?" },
      { href: "/about/hsd", text: "HSD Nedir?" },
      { href: "/about/team", text: "Yönetim Kadrosu" },
      { href: "/about/achievements", text: "Başarılarımız" },
      { href: "/about/partners", text: "Destekçilerimiz" },
      { href: "/about/faq", text: "Sıkça Sorulan Sorular" },
      { href: "/about/careers", text: "Ekip Katılım Başvurusu" },
    ],
    cards: [
      {
        title: "Teknoloji Topluluğu",
        description:
          "Üniversite öğrencileri için modern teknolojiler eğitimi ve networking platformu.",
        image: "/images/defaultImage.png",
        gradient: "from-secondary/50 to-purple-900/50",
        badge: { text: "150+ Üye", color: "bg-secondary" },
        extra: "5 yıllık deneyim",
      },
      {
        title: "Eğitim Programları",
        description:
          "Sıfırdan ileri seviyeye programlama bootcamp'leri ve workshop'ları.",
        image: "/images/defaultImage.png",
        gradient: "from-green-900/50 to-teal-900/50",
        badge: { text: "Aktif", color: "bg-green-600" },
        extra: "20+ Program",
      },
    ],
  },
  projects: {
    title: "Projelerimiz",
    links: [
      { href: "/projects", text: "Devam Eden Projeler" },
      { href: "/projects/completed", text: "Tamamlanan Projeler" },
      { href: "/projects/apply", text: "Proje Katılma Başvurusu" },
      { href: "/projects/mentors", text: "Mentorlar & Danışmanlar" },
      { href: "/projects/calendar", text: "Proje Takvimleri" },
      { href: "/projects/technologies", text: "Kullandığımız Teknolojiler" },
      { href: "/projects/suggestions", text: "Proje Öneri Kutusu" },
    ],
    cards: [
      {
        title: "E-Commerce Platform",
        description:
          "Modern web teknolojileri ile geliştirilmiş tam kapsamlı e-ticaret platformu projesi.",
        image: "/images/defaultImage.png",
        gradient: "from-green-900/50 to-secondary/50",
        badge: { text: "Aktif", color: "bg-green-600" },
        extra: "React, Node.js",
      },
      {
        title: "AI Chatbot",
        description:
          "Yapay zeka destekli müşteri hizmetleri chatbot sistemi. NLP ve machine learning kullanıyor.",
        image: "/images/defaultImage.png",
        gradient: "from-purple-900/50 to-pink-900/50",
        badge: { text: "Geliştirme", color: "bg-secondary" },
        extra: "Python, TensorFlow",
      },
    ],
  },
  events: {
    title: "Etkinlikler",
    links: [
      { href: "/events/upcoming", text: "Yaklaşan Etkinlikler" },
      { href: "/events/past", text: "Geçmiş Etkinlikler" },
      { href: "/events/workshops", text: "Workshop & Seminerler" },
      { href: "/events/hackathons", text: "Hackathonlar" },
      { href: "/events/meetups", text: "Topluluk Buluşmaları" },
      { href: "/events/conferences", text: "Konferanslar" },
      { href: "/events/submit", text: "Etkinlik Önerisi" },
    ],
    cards: [
      {
        title: "React Advanced Workshop",
        description:
          "Modern React pattern'leri, hooks optimizasyonu ve performance teknikleri üzerine 4 saatlik workshop.",
        gradient: "from-orange-900/50 to-red-900/50",
        icon: "mdi:calendar-star",
        iconColor: "text-orange-400",
        badge: { text: "Bu Hafta", color: "bg-orange-600" },
        date: "15 Ocak 2025",
        extra: "45 katılımcı",
        extraIcon: "mdi:account-group",
      },
      {
        title: "AI/ML Hackathon",
        description:
          "48 saatlik yapay zeka ve makine öğrenmesi konulu hackathon. Büyük ödüller ve networking fırsatları.",
        gradient: "from-cyan-900/50 to-secondary/50",
        icon: "mdi:trophy",
        iconColor: "text-cyan-400",
        badge: { text: "Gelecek Ay", color: "bg-cyan-600" },
        date: "22-24 Şubat",
        extra: "25.000₺ ödül",
        extraIcon: "mdi:gift",
      },
    ],
  },
  announcements: {
    title: "Duyurular",
    links: [
      { href: "/announcements/latest", text: "Son Duyurular" },
      { href: "/announcements/important", text: "Önemli Duyurular" },
      { href: "/announcements/events", text: "Etkinlik Duyuruları" },
      { href: "/announcements/academic", text: "Akademik Duyurular" },
      { href: "/announcements/job", text: "İş & Kariyer Fırsatları" },
      { href: "/announcements/archive", text: "Duyuru Arşivi" },
    ],
    cards: [
      {
        title: "Yeni Üyelik Dönem",
        description:
          "2025 Bahar dönem üyelik başvuruları açıldı. Son başvuru tarihi 30 Ocak.",
        gradient: "from-emerald-900/50 to-green-900/50",
        icon: "mdi:account-plus",
        iconColor: "text-emerald-400",
        badge: { text: "Önemli", color: "bg-red-600" },
        date: "10 Ocak 2025",
        extra: "Son 20 gün",
        extraIcon: "mdi:clock-alert",
      },
      {
        title: "Staj Programı",
        description:
          "Teknoloji şirketlerinde staj fırsatları. CV'nizi gönderin, değerlendirelim.",
        gradient: "from-indigo-900/50 to-purple-900/50",
        icon: "mdi:briefcase",
        iconColor: "text-indigo-400",
        badge: { text: "Fırsat", color: "bg-indigo-600" },
        date: "5 Ocak 2025",
        extra: "15 pozisyon",
        extraIcon: "mdi:account-multiple",
      },
    ],
  },
  blog: {
    title: "Blog",
    links: [
      { href: "/blog/tech", text: "Teknoloji Yazıları" },
      { href: "/blog/medium", text: "Medium Yazılarımız" },
      { href: "/blog/tutorials", text: "Tutorials & Rehberler" },
      { href: "/blog/news", text: "Teknoloji Haberleri" },
      { href: "/blog/career", text: "Kariyer Tavsiyeleri" },
      { href: "/blog/interviews", text: "Röportajlar" },
    ],
    cards: [
      {
        title: "React 19 Yenilikleri",
        description:
          "React 19'da gelen yeni özellikler ve geliştiriciler için pratik kullanım örnekleri.",
        image: "/images/defaultImage.png",
        gradient: "from-secondary/50 to-cyan-900/50",
        badge: { text: "Popüler", color: "bg-secondary" },
        date: "8 Ocak 2025",
        extra: "1.2K okuma",
        extraIcon: "mdi:eye",
      },
      {
        title: "AI Mühendisliği Yolculuğu",
        description:
          "Yapay zeka mühendisi olmak isteyen öğrenciler için kapsamlı roadmap ve kaynaklar.",
        image: "/images/defaultImage.png",
        gradient: "from-purple-900/50 to-pink-900/50",
        badge: { text: "Trending", color: "bg-purple-600" },
        date: "5 Ocak 2025",
        extra: "850 okuma",
        extraIcon: "mdi:trending-up",
      },
    ],
  },
  community: {
    title: "Topluluk",
    links: [
      { href: "/community/github", text: "GitHub Organizasyonu" },
      { href: "/community/linkedin", text: "LinkedIn Grubumuz" },
      { href: "/community/study-groups", text: "Çalışma Grupları" },
    ],
    cards: [
      {
        title: "Discord Topluluğu",
        description:
          "7/24 aktif Discord sunucumuzda diğer geliştiricilerle sohbet edin ve yardımlaşın.",
        gradient: "from-violet-900/50 to-purple-900/50",
        icon: "mdi:discord",
        iconColor: "text-violet-400",
        badge: { text: "Aktif", color: "bg-violet-600" },
        extra: "500+ üye online",
        extraIcon: "mdi:account-group",
      },
      {
        title: "Open Source Katkıları",
        description:
          "GitHub'da open source projelere katkıda bulunun. Deneyim kazanın ve portfolyonuzu güçlendirin.",
        gradient: "from-slate-900/50 to-gray-900/50",
        icon: "mdi:github",
        iconColor: "text-slate-400",
        badge: { text: "Katılım Açık", color: "bg-slate-600" },
        extra: "12 aktif proje",
        extraIcon: "mdi:source-branch",
      },
    ],
  },
};

// Galeri linki (ayrı olarak)
export const galleryLink = {
  href: "/gallery",
  text: "Galeri"
};

// Sosyal medya linkleri
export const socialMediaLinks = {
  instagram: "https://instagram.com/hsd.ostimtech",
  linkedin: "https://linkedin.com/company/hsdostim",
  medium: "https://medium.com/@hsdostim",
  github: "https://github.com/HSD-OSTIMTECH",
  email: "hsd.ostimtech@gmail.com"
};

// Yasal linkler
export const legalLinks = [
  { href: "/policy/privacy", text: "Gizlilik Politikası" },
  { href: "/policy/terms", text: "Kullanım Şartları" },
  { href: "/policy/cookies", text: "Çerez Politikası" }
];
