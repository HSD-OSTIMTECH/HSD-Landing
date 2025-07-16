import React, { useRef, useEffect } from 'react';
import { Icon } from '@iconify/react';

interface LoginModalProps {
    onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ onClose }) => {
    const modalRef = useRef<HTMLDivElement>(null);

    // Dışarı tıklayınca kapansın
    useEffect(() => {
        function handleClick(e: MouseEvent) {
            if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
                onClose();
            }
        }
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, [onClose]);

    return (
        <div className="fixed inset-0 w-full h-full flex items-center justify-center z-50 bg-black/80 backdrop-blur-xl">
            <div ref={modalRef} className="relative bg-neutral-900 rounded-xl shadow-2xl w-full max-w-md mx-auto p-8 flex flex-col gap-4">
                {/* Çarpı butonu */}
                <button
                    className="absolute top-4 right-4 text-neutral-400 hover:text-red-500 transition-colors"
                    onClick={onClose}
                    aria-label="Kapat"
                >
                    <Icon icon="hugeicons:cancel-01" className="text-2xl" />
                </button>
                {/* Başlık */}
                <h2 className="text-2xl font-semibold text-center text-white mb-1">Tekrar Hoş Geldin <span className="inline-block">👋</span></h2>
                <p className="text-center text-neutral-400 text-sm mb-4">Seni tekrar aramızda görmek çok güzel</p>
                {/* Form */}
                <form className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="text-white text-sm">E-posta</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="ornek@ostimteknik.edu.tr"
                            className="bg-transparent border border-neutral-700 rounded-full px-4 py-2 text-white focus:outline-none focus:border-primary placeholder:text-neutral-400"
                            autoComplete="email"
                        />
                    </div>
                    <div className="flex flex-col gap-1 relative">
                        <label htmlFor="password" className="text-white text-sm">Şifre</label>
                        <input
                            id="password"
                            type="password"
                            placeholder=""
                            className="bg-transparent border border-neutral-700 rounded-full px-4 py-2 text-white focus:outline-none focus:border-primary pr-10"
                            autoComplete="current-password"
                        />
                        <span className="absolute right-4 top-8 text-neutral-400 cursor-pointer">
                            <Icon icon="hugeicons:eye-off-01" className="text-lg" />
                        </span>
                    </div>
                    <button type="submit" className="bg-primary text-white rounded-full py-2 mt-2 font-semibold text-base w-full transition-all hover:bg-primary/80">Giriş Yap</button>
                </form>
                <div className="flex flex-col items-center gap-1 mt-2">
                    <span className="text-neutral-300 text-sm">Daha Kayıt Olmadın mı? <a href="#" className="text-secondary hover:underline">Hemen Kayıt Ol!</a></span>
                    <a href="#" className="text-sky-400 text-sm hover:underline">Şifreni mi unuttun?</a>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;