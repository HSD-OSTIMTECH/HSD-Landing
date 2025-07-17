import React, { useState, useEffect } from 'react';
import AnnouncementCard, { type AnnouncementCardProps } from '../components/shared/announcementCard';
import SelectBox from '@/components/ui/selectBox';

const Announcements = () => {
  const [selectedDate, setSelectedDate] = useState('2025-06-04');
  const [selectedCategory, setSelectedCategory] = useState('event');
  const [importantAnnouncements, setImportantAnnouncements] = useState<AnnouncementCardProps[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setImportantAnnouncements([
        {
          title: "2025 HSD OSTIMTECH HACKATHON Duyurusu",
          author: "Poyraz Avsever",
          date: "16 Kasım 2025",
          time: "18:00",
          content: "Hackathon süreci, başvuru detayları ve kontenjanlar hakkında tüm bilgiler burada."
        },
        {
          title: "Yeni Core Team Üyeleri Açıklandı!",
          author: "Yigit Yildiz",
          date: "20 Temmuz 2025",
          time: "15:00",
          content: "2025 yılı için yeni Core Team üyeleri duyuruldu. Detaylar ve başvuru süreci için tıklayın."
        }
      ]);
    }, 800);
  }, []);

  return (
    <div className="my-24 max-w-7xl container mx-auto px-2 sm:px-4">
      <section className="flex flex-col items-start mb-24 w-full">
        <h1 className="text-2xl md:text-3xl font-advent-pro font-semibold max-w-lg">
          Önemli Duyurular
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mt-8 w-full">
          {importantAnnouncements.length === 0 ? (
            <div className="text-neutral-400 font-poppins text-lg">
              Yükleniyor...
            </div>
          ) : (
            importantAnnouncements.map((a, i) => (
              <AnnouncementCard
                key={i}
                title={a.title}
                author={a.author}
                date={a.date}
                time={a.time}
                content={a.content}
              />
            ))
          )}
        </div>
      </section>
      <section>
        <div className="flex flex-col md:flex-row items-center justify-between my-8 gap-4 w-full">
          <h1 className="text-2xl md:text-3xl font-advent-pro font-semibold max-w-lg text-center md:text-left w-full md:w-auto">
            Duyurular
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto mt-4 md:mt-0 items-center justify-center md:justify-end">
            <SelectBox
              options={[
                { label: "04 / 06 / 2025", value: "2025-06-04" },
                { label: "16 / 11 / 2025", value: "2025-11-16" },
                { label: "01 / 01 / 2026", value: "2026-01-01" },
              ]}
              value={selectedDate}
              onChange={setSelectedDate}
            />
            <SelectBox
              options={[
                { label: "Etkinlik", value: "event" },
                { label: "Core Team", value: "coreteam" },
                { label: "Genel", value: "general" },
                { label: "Diğer", value: "other" },
              ]}
              value={selectedCategory}
              onChange={setSelectedCategory}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          <AnnouncementCard
            title="2025 HSD OSTIMTECH HACKATHON Kontejanları Hakkında Ve Süreç Hakkında"
            author="Poyraz Avsever"
            date="16 Kasım 2025"
            time="18:00"
            content="Hackathon süreci, başvuru detayları ve kontenjanlar hakkında tüm bilgiler burada."
          />
          <AnnouncementCard
            title="Yeni Core Team Üyeleri Açıklandı!"
            author="Yigit Yildiz"
            date="20 Temmuz 2025"
            time="15:00"
            content="2025 yılı için yeni Core Team üyeleri duyuruldu. Detaylar ve başvuru süreci için tıklayın."
          />
          <AnnouncementCard
            title="Genel Duyuru: Yaz Dönemi Etkinlikleri"
            author="HSD OSTIMTECH"
            date="01 Ağustos 2025"
            time="10:00"
            content="Yaz dönemi boyunca gerçekleşecek tüm etkinlikler ve kayıt bilgileri burada."
          />
          <AnnouncementCard
            title="Sosyal Sorumluluk Projesi Başlıyor!"
            author="Poyraz Avsever"
            date="05 Eylül 2025"
            time="13:30"
            content="Toplum için faydalı yeni bir sosyal sorumluluk projesi başlıyor. Katılım için detaylara göz atın."
          />
        </div>
      </section>
    </div>
  );
};

export default Announcements;