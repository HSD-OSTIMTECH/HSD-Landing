
import React, { useRef, useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { motion, AnimatePresence } from 'framer-motion';

interface RegisterModalProps {
    onClose: () => void;
}

const stepVariants = {
    initial: { opacity: 0, x: 40 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, x: -40, transition: { duration: 0.3 } },
};

const RegisterModal: React.FC<RegisterModalProps> = ({ onClose }) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const [step, setStep] = useState(1);
    const [form, setForm] = useState({
        name: '',
        department: '',
        grade: '',
        email: '',
        password: '',
        password2: '',
    });
    const [code, setCode] = useState(['', '', '', '', '', '']);

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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // Kod inputları için handler
    const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
        const val = e.target.value.replace(/[^0-9]/g, '').slice(0, 1);
        const newCode = [...code];
        newCode[idx] = val;
        setCode(newCode);
        // Otomatik sonraki inputa geç
        if (val && idx < 5) {
            const next = document.getElementById(`code-input-${idx + 1}`);
            if (next) (next as HTMLInputElement).focus();
        }
    };

    return (
        <div className="fixed inset-0 w-full h-full flex items-center justify-center z-50 bg-black/80 backdrop-blur-xl">
            <motion.div
                ref={modalRef}
                className="relative bg-neutral-900 rounded-xl shadow-2xl w-full max-w-md mx-auto p-8 flex flex-col gap-4"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3 }}
            >
                {/* Çarpı butonu */}
                <button
                    className="absolute top-4 right-4 text-neutral-400 hover:text-red-500 transition-colors"
                    onClick={onClose}
                    aria-label="Kapat"
                >
                    <Icon icon="hugeicons:cancel-01" className="text-2xl" />
                </button>
                {/* Başlık */}
                <h2 className="text-2xl font-semibold text-center text-white mb-1">Hemen Üye Ol <span className="inline-block">✨</span></h2>
                <p className="text-center text-neutral-400 text-sm mb-4">Aramıza Katılmana Sevindim!</p>
                {/* Adım adım içerik */}
                <AnimatePresence mode="wait">
                    {step === 1 && (
                        <motion.form
                            key="step1"
                            className="flex flex-col gap-4"
                            variants={stepVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            onSubmit={e => { e.preventDefault(); setStep(2); }}
                        >
                            <div className="flex flex-col gap-1">
                                <label htmlFor="name" className="text-white text-sm">İsim Soyisim</label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Adınız Soyadınız"
                                    className="bg-transparent border border-neutral-700 rounded-full px-4 py-2 text-white focus:outline-none focus:border-primary placeholder:text-neutral-400"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="department" className="text-white text-sm">Bölüm</label>
                                <input
                                    id="department"
                                    name="department"
                                    type="text"
                                    placeholder="Bölümünüz"
                                    className="bg-transparent border border-neutral-700 rounded-full px-4 py-2 text-white focus:outline-none focus:border-primary placeholder:text-neutral-400"
                                    value={form.department}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="grade" className="text-white text-sm">Sınıf</label>
                                <input
                                    id="grade"
                                    name="grade"
                                    type="text"
                                    placeholder="Sınıfınız"
                                    className="bg-transparent border border-neutral-700 rounded-full px-4 py-2 text-white focus:outline-none focus:border-primary placeholder:text-neutral-400"
                                    value={form.grade}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <button type="submit" className="bg-primary text-white rounded-full py-2 mt-2 font-semibold text-base w-full transition-all hover:bg-primary/80">Devam Et</button>
                        </motion.form>
                    )}
                    {step === 2 && (
                        <motion.div
                            key="step2"
                            className="flex flex-col gap-4 items-center justify-center"
                            variants={stepVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                        >
                            <img src="/avatars/defaultAvatar.png" alt="Avatar" className="w-32 h-32 rounded-full object-cover mx-auto mb-2" />
                            <p className="text-white text-lg font-semibold text-center">Hoşgeldin, {form.name || 'Üye'}!</p>
                            <p className="text-neutral-400 text-center text-sm mb-2">Bilgilerin başarıyla kaydedildi. Şimdi e-posta ve şifre belirle!</p>
                            <form className="flex flex-col gap-4 w-full" onSubmit={e => { e.preventDefault(); setStep(3); }}>
                                <div className="flex flex-col gap-1">
                                    <label htmlFor="email" className="text-white text-sm">E-posta</label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="ornek@ostimteknik.edu.tr"
                                        className="bg-transparent border border-neutral-700 rounded-full px-4 py-2 text-white focus:outline-none focus:border-primary placeholder:text-neutral-400"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="flex flex-col gap-1 relative">
                                    <label htmlFor="password" className="text-white text-sm">Şifre</label>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        className="bg-transparent border border-neutral-700 rounded-full px-4 py-2 text-white focus:outline-none focus:border-primary pr-10"
                                        value={form.password}
                                        onChange={handleChange}
                                        required
                                    />
                                    <span className="absolute right-4 top-8 text-neutral-400 cursor-pointer">
                                        <Icon icon="hugeicons:eye-off-01" className="text-lg" />
                                    </span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label htmlFor="password2" className="text-white text-sm">Yeniden Şifre</label>
                                    <input
                                        id="password2"
                                        name="password2"
                                        type="password"
                                        className="bg-transparent border border-neutral-700 rounded-full px-4 py-2 text-white focus:outline-none focus:border-primary"
                                        value={form.password2}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <button type="submit" className="bg-primary text-white rounded-full py-2 mt-2 font-semibold text-base w-full transition-all hover:bg-primary/80">Kayıt Ol</button>
                            </form>
                        </motion.div>
                    )}
                    {step === 3 && (
                        <motion.div
                            key="step3"
                            className="flex flex-col gap-6 items-center justify-center"
                            variants={stepVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                        >
                            <p className="text-white text-lg font-semibold text-center">Mail adresinize gelen kodu giriniz</p>
                            <form className="flex flex-col gap-4 w-full items-center" onSubmit={e => { e.preventDefault(); /* kod doğrulama işlemi */ }}>
                                <div className="flex gap-2 justify-center">
                                    {code.map((c, idx) => (
                                        <input
                                            key={idx}
                                            id={`code-input-${idx}`}
                                            type="text"
                                            inputMode="numeric"
                                            maxLength={1}
                                            className="w-10 h-12 text-2xl text-center bg-transparent border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-primary"
                                            value={c}
                                            onChange={e => handleCodeChange(e, idx)}
                                        />
                                    ))}
                                </div>
                                <button type="submit" className="bg-primary text-white rounded-full py-2 font-semibold text-base w-full transition-all hover:bg-primary/80 mt-2">Onayla</button>
                            </form>
                        </motion.div>
                    )}
                </AnimatePresence>
                <div className="flex flex-col items-center gap-1 mt-2">
                    <span className="text-neutral-300 text-sm">Zaten Kayıt Oldun mu? <a href="#" className="text-sky-400 hover:underline">Hemen Giriş Yap!</a></span>
                </div>
            </motion.div>
        </div>
    );
};

export default RegisterModal;
