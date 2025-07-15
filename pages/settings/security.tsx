import React, { useState } from 'react';
import Button from '@/components/ui/button';

const Security = () => {
  const [email, setEmail] = useState('');
  const [twoFactor, setTwoFactor] = useState(false);
  const [loginAlerts, setLoginAlerts] = useState(false);

  return (
    <div className="w-full max-w-lg bg-neutral-900 rounded-2xl shadow-xl border border-neutral-800 p-8 flex flex-col gap-8">
      <div>
        <h2 className="text-xl font-semibold text-white mb-2">
          Şifre Değişikliği
        </h2>
        <p className="text-neutral-400 text-sm mb-4">
          Şifre sıfırlama bağlantısı almak için e-posta alın.
        </p>
        <Button type="button">Mail Al</Button>
      </div>

      <div className="border-t border-neutral-800 pt-6">
        <h2 className="text-xl font-semibold text-white mb-2">
          Ekstra Güvenlik
        </h2>
        <div className="flex flex-col gap-4">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={twoFactor}
              onChange={() => setTwoFactor((v) => !v)}
              className="accent-primary w-5 h-5"
            />
            <span className="text-white">İki Adımlı Doğrulama (2FA)</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={loginAlerts}
              onChange={() => setLoginAlerts((v) => !v)}
              className="accent-primary w-5 h-5"
            />
            <span className="text-white">
              Bilinmeyen girişlerde e-posta bildirimi
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Security;