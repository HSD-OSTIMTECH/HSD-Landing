import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // API isteği burada olacak (şimdilik sadece state değişiyor)
    setSent(true);
  };

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="bg-neutral-900 rounded-xl shadow-2xl w-full max-w-md mx-auto p-8 flex flex-col gap-6">
        <h2 className="text-2xl font-semibold text-center text-white mb-1">Şifremi Unuttum</h2>
        <p className="text-center text-neutral-400 text-sm mb-2">Kayıtlı e-posta adresinizi girin, size bir doğrulama bağlantısı gönderelim.</p>
        {!sent ? (
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-white text-sm">E-posta</label>
              <input
                id="email"
                type="email"
                placeholder="ornek@ostimteknik.edu.tr"
                className="bg-transparent border border-neutral-700 rounded-full px-4 py-2 text-white focus:outline-none focus:border-primary placeholder:text-neutral-400"
                autoComplete="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="bg-primary text-white rounded-full py-2 mt-2 font-semibold text-base w-full transition-all hover:bg-primary/80">Mail Gönder</button>
          </form>
        ) : (
          <div className="text-center text-green-400 text-base font-medium py-4">
            Doğrulama bağlantısı e-posta adresinize gönderildi.
          </div>
        )}
      </div>
    </div>
  );
}

export default ForgotPassword;