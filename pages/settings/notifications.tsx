import React, { useState } from 'react';

const Notifications = () => {
  const [emailNotif, setEmailNotif] = useState(true);
  const [smsNotif, setSmsNotif] = useState(false);
  const [appNotif, setAppNotif] = useState(true);

  return (
    <div className="w-full max-w-lg bg-neutral-900 rounded-2xl shadow-xl border border-neutral-800 p-8 flex flex-col gap-8">
      <h2 className="text-xl font-semibold text-white mb-4">Bildirim Ayarları</h2>
      <div className="flex flex-col gap-6">
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={emailNotif}
            onChange={() => setEmailNotif(v => !v)}
            className="accent-primary w-5 h-5"
          />
          <span className="text-white">E-posta ile bildirim al</span>
        </label>
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={smsNotif}
            onChange={() => setSmsNotif(v => !v)}
            className="accent-primary w-5 h-5"
          />
          <span className="text-white">SMS ile bildirim al</span>
        </label>
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={appNotif}
            onChange={() => setAppNotif(v => !v)}
            className="accent-primary w-5 h-5"
          />
          <span className="text-white">Uygulama içi bildirim al</span>
        </label>
      </div>
    </div>
  );
};

export default Notifications;