import React, { useState } from 'react';
import { Icon } from '@iconify/react';

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [sent, setSent] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // API isteği burada olacak (şimdilik sadece state değişiyor)
        setSent(true);
    };

    return (
        <section className="max-w-7xl container mx-auto py-20 px-4 flex flex-col gap-4">
            <h1 className="text-3xl sm:text-4xl font-advent-pro font-bold text-center mb-2">İletişime Geç</h1>
            <p className="text-center text-neutral-400 text-base mb-6 max-w-2xl mx-auto">
                Her türlü soru, öneri veya iş birliği için bize ulaşabilirsiniz. Formu doldurun ya da aşağıdaki iletişim bilgilerinden bize ulaşın.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Form */}
                <div className="bg-neutral-900 rounded-xl shadow-xl p-8 flex flex-col gap-6 border border-neutral-800">
                    <h2 className="text-xl font-semibold text-white mb-2">Bize Yazın</h2>
                    {sent ? (
                        <div className="text-green-400 text-base font-medium text-center py-8">Mesajınız başarıyla gönderildi. En kısa sürede dönüş yapacağız.</div>
                    ) : (
                        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="name" className="text-white text-sm">Ad Soyad</label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    className="bg-transparent border border-neutral-700 rounded-full px-4 py-2 text-white focus:outline-none focus:border-primary placeholder:text-neutral-400"
                                    placeholder="Adınız Soyadınız"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="email" className="text-white text-sm">E-posta</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    className="bg-transparent border border-neutral-700 rounded-full px-4 py-2 text-white focus:outline-none focus:border-primary placeholder:text-neutral-400"
                                    placeholder="ornek@ostimteknik.edu.tr"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="message" className="text-white text-sm">Mesajınız</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    className="bg-transparent border border-neutral-700 rounded-2xl px-4 py-2 text-white focus:outline-none focus:border-primary placeholder:text-neutral-400 resize-none"
                                    placeholder="Mesajınızı buraya yazın..."
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <button type="submit" className="bg-primary text-white rounded-full py-2 mt-2 font-semibold text-base w-full transition-all hover:bg-primary/80">Gönder</button>
                        </form>
                    )}
                </div>
                {/* İletişim Bilgileri */}
                <div className="bg-neutral-900 rounded-xl shadow-xl p-8 flex flex-col gap-8 border border-neutral-800 h-full justify-start min-h-[350px]">
                    <h2 className="text-xl font-semibold text-white mb-2">İletişim Bilgileri</h2>
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-4">
                            <span className="bg-primary/20 p-3 rounded-full">
                                <Icon icon="hugeicons:mail-01" className="text-primary text-2xl" />
                            </span>
                            <div>
                                <div className="text-white font-semibold">E-posta</div>
                                <a href="mailto:info@ostimteknik.edu.tr" className="text-neutral-300 hover:underline">info@ostimteknik.edu.tr</a>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="bg-primary/20 p-3 rounded-full">
                                <Icon icon="hugeicons:location-01" className="text-primary text-2xl" />
                            </span>
                            <div>
                                <div className="text-white font-semibold">Adres</div>
                                <span className="text-neutral-300">OSTİM Teknik Üniversitesi, Ankara</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="bg-primary/20 p-3 rounded-full">
                                <Icon icon="hugeicons:instagram" className="text-primary text-2xl" />
                            </span>
                            <div>
                                <div className="text-white font-semibold">Instagram</div>
                                <a href="https://instagram.com/hsdostimtech" target='_blank' rel="noopener noreferrer" className="text-neutral-300 hover:underline">@hsdostimtech</a>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="bg-primary/20 p-3 rounded-full">
                                <Icon icon="hugeicons:linkedin-01" className="text-primary text-2xl" />
                            </span>
                            <div>
                                <div className="text-white font-semibold">LinkedIn</div>
                                <a href="https://linkedin.com/company/hsdostimtech" target='_blank' rel="noopener noreferrer" className="text-neutral-300 hover:underline">HSD OSTIMTECH</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;