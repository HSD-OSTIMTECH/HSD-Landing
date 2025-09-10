import React, { useState } from 'react';
import { useRouter } from 'next/router';

const isTokenValid = (token: string | string[] | undefined) => {
    // Gerçek uygulamada API ile doğrulanır, burada örnek olarak 10+ karakterli token geçerli kabul ediliyor
    return typeof token === 'string' && token.length > 10;
};

const ResetPassword = () => {
    const router = useRouter();
    const { token } = router.query;
    const [form, setForm] = useState({
        oldPass: '',
        newPass: '',
        newPassAgain: '',
    });
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (form.newPass !== form.newPassAgain) {
            setError('Yeni şifreler eşleşmiyor.');
            return;
        }
        // API isteği burada olacak (şimdilik sadece state değişiyor)
        setSuccess(true);
        setError('');
    };

    if (!isTokenValid(token)) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <div className="bg-neutral-900 rounded-xl shadow-2xl w-full max-w-md mx-auto p-8 flex flex-col gap-6 text-center">
                    <h2 className="text-2xl font-semibold text-white mb-2">Şifre Sıfırlama</h2>
                    <p className="text-red-500 text-base font-medium">Şifre sıfırlama bağlantısı geçerli değil veya süresi dolmuş.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-[60vh] flex items-center justify-center">
            <div className="bg-neutral-900 rounded-xl shadow-2xl w-full max-w-md mx-auto p-8 flex flex-col gap-6">
                <h2 className="text-2xl font-semibold text-center text-white mb-1">Yeni Şifre Belirle</h2>
                <p className="text-center text-neutral-400 text-sm mb-2">Lütfen eski şifrenizi ve yeni şifrenizi girin.</p>
                {success ? (
                    <div className="text-center text-green-400 text-base font-medium py-4">
                        Şifreniz başarıyla değiştirildi.
                    </div>
                ) : (
                    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="oldPass" className="text-white text-sm">Eski Şifre</label>
                            <input
                                id="oldPass"
                                name="oldPass"
                                type="password"
                                className="bg-transparent border border-neutral-700 rounded-full px-4 py-2 text-white focus:outline-none focus:border-primary"
                                value={form.oldPass}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="newPass" className="text-white text-sm">Yeni Şifre</label>
                            <input
                                id="newPass"
                                name="newPass"
                                type="password"
                                className="bg-transparent border border-neutral-700 rounded-full px-4 py-2 text-white focus:outline-none focus:border-primary"
                                value={form.newPass}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="newPassAgain" className="text-white text-sm">Yeni Şifre (Tekrar)</label>
                            <input
                                id="newPassAgain"
                                name="newPassAgain"
                                type="password"
                                className="bg-transparent border border-neutral-700 rounded-full px-4 py-2 text-white focus:outline-none focus:border-primary"
                                value={form.newPassAgain}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {error && <div className="text-red-500 text-sm text-center">{error}</div>}
                        <button type="submit" className="bg-primary text-white rounded-full py-2 mt-2 font-semibold text-base w-full transition-all hover:bg-primary/80">Şifreyi Değiştir</button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default ResetPassword;