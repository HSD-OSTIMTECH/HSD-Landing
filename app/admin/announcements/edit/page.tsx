import React, { useState } from 'react';
import AnnouncementCard from '@/components/shared/announcementCard';
import Button from '@/components/ui/button';
import { Icon } from '@iconify/react';

// Dummy veri örnekleri, gerçek projede API'den alınacak
const dummyAnnouncements = [
  {
    id: 1,
    title: 'Duyuru Başlığı 1',
    author: 'Yönetici',
    date: '2025-07-15',
    time: '14:00',
    content: 'Bu birinci duyuru içeriğidir. Duyuru detayları burada yer alır.',
  },
  {
    id: 2,
    title: 'Duyuru Başlığı 2',
    author: 'Admin',
    date: '2025-07-10',
    time: '10:30',
    content: 'İkinci duyuruya ait açıklama burada.',
  },
  {
    id: 3,
    title: 'Duyuru Başlığı 3',
    author: 'Yönetici',
    date: '2025-06-25',
    time: '09:00',
    content: 'Üçüncü duyuruya ait detaylar burada.',
  },
];

const authorOptions = [
  { label: 'Tümü', value: '' },
  { label: 'Yönetici', value: 'Yönetici' },
  { label: 'Admin', value: 'Admin' },
];

type Announcement = typeof dummyAnnouncements[0];

const EditAnnouncement = () => {
  const [search, setSearch] = useState('');
  const [selectedAuthor, setSelectedAuthor] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState<Announcement | null>(null);
  const [editForm, setEditForm] = useState({
    title: '',
    author: '',
    date: '',
    time: '',
    content: '',
  });

  const filteredAnnouncements = dummyAnnouncements.filter(
    (a) =>
      (selectedAuthor === '' || a.author === selectedAuthor) &&
      (search === '' || a.title.toLowerCase().includes(search.toLowerCase()))
  );

  const openModal = (announcement: typeof dummyAnnouncements[0]) => {
    setSelectedAnnouncement(announcement);
    setEditForm({
      title: announcement.title,
      author: announcement.author,
      date: announcement.date,
      time: announcement.time,
      content: announcement.content,
    });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedAnnouncement(null);
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEditForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleEditSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Güncelleme işlemi burada yapılır (API çağrısı vs.)
    closeModal();
  };

  const handleDelete = () => {
    // Silme işlemi burada yapılır (API çağrısı vs.)
    closeModal();
  };

  return (
    <div className="min-h-screen">
      {/* Arama ve filtre */}
      <div className="flex flex-col md:flex-row gap-4 mb-8 items-center">
        <input
          type="text"
          placeholder="Duyuru Ara"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="flex-1 bg-black border border-neutral-800 rounded-full px-6 py-2 text-white placeholder:text-neutral-500 focus:outline-none focus:border-primary max-w-lg"
        />
        <select
          value={selectedAuthor}
          onChange={e => setSelectedAuthor(e.target.value)}
          className="border border-neutral-800 rounded-full px-4 py-2 text-white bg-black focus:outline-none focus:border-primary"
        >
          {authorOptions.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>

      {/* Duyuru kartları */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredAnnouncements.map((announcement) => (
          <div key={announcement.id} onClick={() => openModal(announcement)} className="cursor-pointer">
            <AnnouncementCard {...announcement} />
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={e => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div
            className="bg-black rounded-xl p-8 w-full max-w-lg relative border border-neutral-800"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-primary transition cursor-pointer text-2xl"
            >
              <Icon icon="mdi:close" />
            </button>
            <h2 className="text-2xl font-bold text-white mb-6">Duyuruyu Düzenle</h2>
            <form onSubmit={handleEditSubmit}>
              <div className="mb-4">
                <label className="block text-sm text-neutral-300 mb-1">Duyuru Başlığı</label>
                <input
                  type="text"
                  name="title"
                  value={editForm.title}
                  onChange={handleEditChange}
                  className="w-full border border-neutral-700 rounded-full px-4 py-2 text-white placeholder:text-neutral-500 focus:outline-none focus:border-primary"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm text-neutral-300 mb-1">Yazar</label>
                <input
                  type="text"
                  name="author"
                  value={editForm.author}
                  onChange={handleEditChange}
                  className="w-full border border-neutral-700 rounded-full px-4 py-2 text-white placeholder:text-neutral-500 focus:outline-none focus:border-primary"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm text-neutral-300 mb-1">Tarih</label>
                  <input
                    type="date"
                    name="date"
                    value={editForm.date}
                    onChange={handleEditChange}
                    className="w-full border border-neutral-700 rounded-full px-4 py-2 text-white focus:outline-none focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-neutral-300 mb-1">Saat</label>
                  <input
                    type="time"
                    name="time"
                    value={editForm.time}
                    onChange={handleEditChange}
                    className="w-full border border-neutral-700 rounded-full px-4 py-2 text-white focus:outline-none focus:border-primary"
                    required
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm text-neutral-300 mb-1">Duyuru İçeriği</label>
                <textarea
                  name="content"
                  rows={4}
                  value={editForm.content}
                  onChange={handleEditChange}
                  className="w-full border border-neutral-700 rounded-lg px-4 py-2 text-white placeholder:text-neutral-500 focus:outline-none focus:border-primary resize-none"
                  required
                />
              </div>
              <div className="flex gap-4">
                <Button type="submit">Kaydet</Button>
                <Button type="button" variant="outline" onClick={handleDelete}>Sil</Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditAnnouncement;