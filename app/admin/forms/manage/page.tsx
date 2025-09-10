import React, { useState } from 'react';

const dummyForms = [
  {
    id: 1,
    title: 'Geri Bildirim Formu',
    questions: ['Adınız nedir?', 'Görüşleriniz?'],
    responses: [
      { id: 1, answers: ['Ali', 'Çok iyi'] },
      { id: 2, answers: ['Ayşe', 'Daha iyi olabilir'] },
    ],
  },
  {
    id: 2,
    title: 'Etkinlik Katılım Formu',
    questions: ['Etkinliğe katıldınız mı?', 'Etkinlik hakkındaki düşünceleriniz?'],
    responses: [
      { id: 1, answers: ['Evet', 'Harikaydı'] },
      { id: 2, answers: ['Hayır', ''] },
    ],
  },
];

const ManageForms = () => {
  const [selectedFormId, setSelectedFormId] = useState<number>(dummyForms[0].id);
  const selectedForm = dummyForms.find(f => f.id === selectedFormId);

  return (
    <div className="max-w-5xl mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold text-white mb-8">Form Yanıtları</h1>
      {/* Form seçimi için kartlar */}
      <div className="flex gap-4 mb-10 flex-wrap">
        {dummyForms.map(form => (
          <div
            key={form.id}
            onClick={() => setSelectedFormId(form.id)}
            className={`min-w-[220px] bg-black border px-6 py-4 rounded-xl cursor-pointer transition-all duration-200
              ${selectedFormId === form.id ? 'border-primary ring-2 ring-primary' : 'border-neutral-800 hover:border-primary/60'}`}
          >
            <div className="text-lg font-semibold text-white mb-1">{form.title}</div>
            <div className="text-neutral-400 text-sm">{form.questions.length} soru</div>
            <div className="text-neutral-400 text-xs mt-1">{form.responses.length} yanıt</div>
          </div>
        ))}
      </div>

      {/* Yanıt tablosu */}
      {selectedForm && (
        <div className="overflow-x-auto bg-black rounded-xl border border-neutral-800 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white">{selectedForm.title} - Yanıtlar</h2>
            <span className="text-neutral-400 text-sm">Toplam {selectedForm.responses.length} yanıt</span>
          </div>
          <table className="min-w-full">
            <thead>
              <tr className="bg-neutral-900">
                <th className="px-4 py-2 text-left text-white">#</th>
                {selectedForm.questions.map((q, idx) => (
                  <th key={idx} className="px-4 py-2 text-left text-white">{q}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {selectedForm.responses.map((resp, idx) => (
                <tr key={resp.id} className="border-t border-neutral-800 hover:bg-neutral-900/60 transition-colors">
                  <td className="px-4 py-2 text-neutral-400 font-semibold">{idx + 1}</td>
                  {resp.answers.map((ans, i) => (
                    <td key={i} className="px-4 py-2 text-white">{ans || <span className="text-neutral-600 italic">-</span>}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          {selectedForm.responses.length === 0 && (
            <div className="text-neutral-400 mt-4">Henüz yanıt yok.</div>
          )}
        </div>
      )}
    </div>
  );
};

export default ManageForms;