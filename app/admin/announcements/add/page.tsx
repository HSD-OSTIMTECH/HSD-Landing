import React, { useState } from 'react';
import AnnouncementCard from '@/components/shared/announcementCard';
import Button from '@/components/ui/button';

const AddAnnouncement = () => {
  const [form, setForm] = useState({
    title: '',
    author: '',
    date: '',
    time: '',
    content: '',
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // API çağrısı vs. burada
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 items-start">
      <form className="w-full max-w-lg" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm text-neutral-300 mb-1">
            Duyuru Başlığı
          </label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            className="w-full border border-neutral-700 rounded-full px-4 py-2 text-white placeholder:text-neutral-500 bg-black focus:outline-none focus:border-primary"
            placeholder="Duyuru başlığını giriniz"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm text-neutral-300 mb-1">Yazar</label>
          <input
            type="text"
            name="author"
            value={form.author}
            onChange={handleChange}
            className="w-full border border-neutral-700 rounded-full px-4 py-2 text-white placeholder:text-neutral-500 bg-black focus:outline-none focus:border-primary"
            placeholder="Yazar adı"
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm text-neutral-300 mb-1">Tarih</label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="w-full border border-neutral-700 rounded-full px-4 py-2 text-white bg-black focus:outline-none focus:border-primary"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-neutral-300 mb-1">Saat</label>
            <input
              type="time"
              name="time"
              value={form.time}
              onChange={handleChange}
              className="w-full border border-neutral-700 rounded-full px-4 py-2 text-white bg-black focus:outline-none focus:border-primary"
              required
            />
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-sm text-neutral-300 mb-1">
            Duyuru İçeriği
          </label>
          <textarea
            name="content"
            rows={4}
            value={form.content}
            onChange={handleChange}
            className="w-full border border-neutral-700 rounded-lg px-4 py-2 text-white placeholder:text-neutral-500 bg-black focus:outline-none focus:border-primary resize-none"
            placeholder="Duyuru içeriğini giriniz"
            required
          />
        </div>
        <div className="flex gap-4">
          <Button>Kaydet</Button>
          <Button
            type="button"
            variant="outline"
            onClick={() =>
              setForm({
                title: "",
                author: "",
                date: "",
                time: "",
                content: "",
              })
            }
          >
            Temizle
          </Button>
        </div>
      </form>
      <div className="w-full max-w-xl">
        <AnnouncementCard {...form} />
      </div>
    </div>
  );
};

export default AddAnnouncement;