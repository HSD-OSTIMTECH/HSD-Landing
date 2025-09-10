import React, { useState } from 'react';
import Button from '@/components/ui/button';
import { Icon } from '@iconify/react';

// Dummy üyeler
type Member = {
  id: number;
  name: string;
  email: string;
  date: string;
  status: string;
  department: string;
  rejectReason?: string;
};

const dummyMembers: Member[] = [
  { id: 1, name: 'Ali Yılmaz', email: 'ali@mail.com', date: '2025-07-10', status: 'Bekliyor', department: 'Yazılım' },
  { id: 2, name: 'Ayşe Demir', email: 'ayse@mail.com', date: '2025-07-12', status: 'Bekliyor', department: 'Pazarlama' },
  { id: 3, name: 'Mehmet Kaya', email: 'mehmet@mail.com', date: '2025-07-13', status: 'Bekliyor', department: 'Tasarım' },
];

const Approval = () => {
  const [members, setMembers] = useState(dummyMembers);
  const [rejectModal, setRejectModal] = useState<{ open: boolean; memberId: number | null }>({ open: false, memberId: null });
  const [rejectReason, setRejectReason] = useState('');

  const handleApprove = (id: number) => {
    setMembers(prev => prev.map(m => m.id === id ? { ...m, status: 'Onaylandı' } : m));
  };

  const handleReject = (id: number) => {
    setRejectModal({ open: true, memberId: id });
    setRejectReason('');
  };

  const handleRejectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMembers(prev => prev.map(m => m.id === rejectModal.memberId ? { ...m, status: 'Reddedildi', rejectReason } : m));
    setRejectModal({ open: false, memberId: null });
    setRejectReason('');
  };

  return (
    <div className="">
      <h1 className="text-2xl font-bold text-white mb-8">Üye Onaylama</h1>
      <div className="overflow-x-auto bg-neutral-950 rounded-xl shadow-lg border border-neutral-800 p-6">
        <table className="min-w-full">
          <thead>
            <tr className="bg-neutral-900">
              <th className="px-4 py-2 text-left text-white">#</th>
              <th className="px-4 py-2 text-left text-white">İsim</th>
              <th className="px-4 py-2 text-left text-white">E-posta</th>
              <th className="px-4 py-2 text-left text-white">Bölüm</th>
              <th className="px-4 py-2 text-left text-white">Kayıt Tarihi</th>
              <th className="px-4 py-2 text-left text-white">Durum</th>
              <th className="px-4 py-2 text-left text-white">İşlem</th>
            </tr>
          </thead>
          <tbody>
            {members.map((m, idx) => (
              <tr
                key={m.id}
                className="border-t border-neutral-800 hover:bg-neutral-900/60 transition-colors"
              >
                <td className="px-4 py-2 text-neutral-400 font-semibold">
                  {idx + 1}
                </td>
                <td className="px-4 py-2 text-white">{m.name}</td>
                <td className="px-4 py-2 text-white">{m.email}</td>
                <td className="px-4 py-2 text-white">{m.department}</td>
                <td className="px-4 py-2 text-white">{m.date}</td>
                <td className="px-4 py-2">
                  {m.status === "Bekliyor" && (
                    <span className="text-yellow-400">Bekliyor</span>
                  )}
                  {m.status === "Onaylandı" && (
                    <span className="text-green-500">Onaylandı</span>
                  )}
                  {m.status === "Reddedildi" && (
                    <span className="text-red-500">Reddedildi</span>
                  )}
                </td>
                <td className="px-4 py-2 flex gap-2">
                  {m.status === "Bekliyor" && (
                    <>
                      <Button
                        variant="primary"
                        onClick={() => handleApprove(m.id)}
                      >
                        Onayla
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => handleReject(m.id)}
                      >
                        Reddet
                      </Button>
                    </>
                  )}
                  {m.status === "Reddedildi" && m.rejectReason && (
                    <Button
                      variant="outline"
                      onClick={() => setRejectModal({ open: true, memberId: m.id })}
                      className="text-xs px-2 py-1"
                    >
                      Sebebi Gör
                    </Button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Reddetme Modalı ve Sebep Gör Modalı */}
      {rejectModal.open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={(e) => {
            if (e.target === e.currentTarget)
              setRejectModal({ open: false, memberId: null });
          }}
        >
          <div
            className="bg-black rounded-xl p-8 w-full max-w-md relative border border-neutral-800"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setRejectModal({ open: false, memberId: null })}
              className="absolute top-4 right-4 text-white hover:text-primary transition cursor-pointer text-2xl"
            >
              <Icon icon="mdi:close" />
            </button>
            {(() => {
              const member = members.find(m => m.id === rejectModal.memberId);
              if (member && member.status === 'Reddedildi' && member.rejectReason) {
                return (
                  <>
                    <h2 className="text-xl font-bold text-white mb-4">Reddetme Sebebi</h2>
                    <div className="bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 text-white mb-2 whitespace-pre-line break-words">
                      {member.rejectReason}
                    </div>
                  </>
                );
              }
              // Reddetme formu
              return (
                <>
                  <h2 className="text-xl font-bold text-white mb-4">Reddetme Sebebi</h2>
                  <form onSubmit={handleRejectSubmit}>
                    <textarea
                      className="w-full border border-neutral-700 rounded-lg px-4 py-2 text-white bg-black focus:outline-none focus:border-primary resize-none mb-4"
                      rows={3}
                      placeholder="Reddetme sebebini yazınız..."
                      value={rejectReason}
                      onChange={(e) => setRejectReason(e.target.value)}
                      required
                    />
                    <div className="flex gap-4">
                      <Button type="submit" variant="primary">
                        Reddet
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() =>
                          setRejectModal({ open: false, memberId: null })
                        }
                      >
                        İptal
                      </Button>
                    </div>
                  </form>
                </>
              );
            })()}
          </div>
        </div>
      )}
    </div>
  );
};

export default Approval;