import React, { useState } from 'react';
import Button from '@/components/ui/button';

type Question = {
  id: number;
  text: string;
};

const AddForm = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [newQuestion, setNewQuestion] = useState('');
  const [editValue, setEditValue] = useState('');

  const handleAddQuestion = () => {
    if (newQuestion.trim() === '') return;
    setQuestions(prev => [
      ...prev,
      { id: Date.now(), text: newQuestion }
    ]);
    setNewQuestion('');
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

  return (
    <div className="max-w-2xl">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-white">Form Oluştur</h1>
        <Button onClick={handleAddQuestion}>Soru Ekle</Button>
      </div>
      <div className="mb-6 flex gap-2">
        <input
          type="text"
          value={newQuestion}
          onChange={e => setNewQuestion(e.target.value)}
          className="flex-1 border border-neutral-700 rounded-full px-4 py-2 text-white bg-black focus:outline-none focus:border-primary"
          placeholder="Soru yazın..."
          onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); handleAddQuestion(); } }}
        />
        <Button onClick={handleAddQuestion} variant="outline">Ekle</Button>
      </div>
      <div className="space-y-4">
        {questions.map(q => (
          <div key={q.id} className="bg-black border border-neutral-800 rounded-lg p-4 flex items-center gap-4">
            {editingId === q.id ? (
              <>
                <input
                  type="text"
                  value={editValue}
                  onChange={e => setEditValue(e.target.value)}
                  className="flex-1 border border-neutral-700 rounded-full px-4 py-2 text-white bg-black focus:outline-none focus:border-primary"
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
  );
};

export default AddForm;