import React, { useState } from 'react';
import FormCard from '@/components/shared/formCard';
import Button from '@/components/ui/button';
import { Icon } from '@iconify/react';

// Dummy form verisi
const dummyForms = [
  {
    id: 1,
    title: 'Geri Bildirim Formu',
    questions: [
      { id: 1, text: 'Adınız nedir?' },
      { id: 2, text: 'Görüşleriniz?' },
    ],
  },
  {
    id: 2,
    title: 'Etkinlik Katılım Formu',
    questions: [
      { id: 1, text: 'Etkinliğe katıldınız mı?' },
      { id: 2, text: 'Etkinlik hakkındaki düşünceleriniz?' },
    ],
  },
];

const EditForm = () => {
  const [search, setSearch] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedForm, setSelectedForm] = useState<typeof dummyForms[0] | null>(null);
  const [questions, setQuestions] = useState<{ id: number; text: string }[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editValue, setEditValue] = useState('');

  const filteredForms = dummyForms.filter(f =>
    search === '' || f.title.toLowerCase().includes(search.toLowerCase())
  );

  const openModal = (form: typeof dummyForms[0]) => {
    setSelectedForm(form);
    setQuestions(form.questions);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedForm(null);
    setEditingId(null);
    setEditValue('');
  };

  const handleEdit = (id: number, text: string) => {
    setEditingId(id);
    setEditValue(text);
  };

  const handleEditSave = (id: number) => {
    setQuestions(prev => prev.map(q => q.id === id ? { ...q, text: editValue } : q));
    setEditingId(null);
    setEditValue('');
  };

  const handleDelete = (id: number) => {
    setQuestions(prev => prev.filter(q => q.id !== id));
  };

  const handleFormDelete = () => {
    // Form silme işlemi burada (API vs.)
    closeModal();
  };

  return (
    <div className="min-h-screen">
      {/* Arama */}
      <div className="flex flex-col md:flex-row gap-4 mb-8 items-center">
        <input
          type="text"
          placeholder="Form Ara"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="flex-1 bg-black border border-neutral-800 rounded-full px-6 py-2 text-white placeholder:text-neutral-500 focus:outline-none focus:border-primary max-w-lg"
        />
      </div>
      {/* Form kartları */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredForms.map(form => (
          <FormCard
            key={form.id}
            id={form.id}
            title={form.title}
            questionCount={form.questions.length}
            onClick={() => openModal(form)}
          />
        ))}
      </div>

      {/* Modal */}
      {modalOpen && selectedForm && (
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
            <h2 className="text-2xl font-bold text-white mb-6">Formu Düzenle</h2>
            <div className="mb-6">
              <div className="text-lg text-white font-semibold mb-2">{selectedForm.title}</div>
              <div className="space-y-4">
                {questions.map(q => (
                  <div key={q.id} className="bg-neutral-900 border border-neutral-800 rounded-lg p-4 flex items-center gap-4">
                    {editingId === q.id ? (
                      <>
                        <input
                          type="text"
                          value={editValue}
                          onChange={e => setEditValue(e.target.value)}
                          className="flex-1 border w-full border-neutral-700 rounded-full px-4 py-2 text-white bg-black focus:outline-none focus:border-primary"
                          onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); handleEditSave(q.id); } }}
                        />
                        <Button onClick={() => handleEditSave(q.id)} variant="primary">Kaydet</Button>
                        <Button onClick={() => setEditingId(null)} variant="outline">İptal</Button>
                      </>
                    ) : (
                      <>
                        <span className="flex-1 text-white">{q.text}</span>
                        <Button onClick={() => handleEdit(q.id, q.text)} variant="outline">Düzenle</Button>
                        <Button onClick={() => handleDelete(q.id)} variant="outline">Sil</Button>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex gap-4">
              <Button onClick={closeModal}>Kaydet</Button>
              <Button variant="outline" onClick={handleFormDelete}>Formu Sil</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditForm;