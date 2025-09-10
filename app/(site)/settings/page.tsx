
import React, { useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import Button from '@/components/ui/button';

const defaultBanner = '/images/defaultImage.png';
const defaultAvatar = '/avatars/defaultAvatar.png';

const Settings = () => {
  const [banner, setBanner] = useState<string>(defaultBanner);
  const [avatar, setAvatar] = useState<string>(defaultAvatar);

  const [name, setName] = useState<string>('Poyraz Yılmaz');
  const [bio, setBio] = useState<string>('Kısa bir biyografi...');
  const [department, setDepartment] = useState<string>('Yazılım Mühendisliği');

  const departments = [
    'Yazılım Mühendisliği',
    'Bilgisayar Mühendisliği',
    'Yapay Zeka Mühendisliği',
    'Elektrik-Elektronik Mühendisliği',
    'Makine Mühendisliği',
    'Endüstri Mühendisliği',
    'İnşaat Mühendisliği',
    'Pazarlama',
    'İşletme',
    'Diğer',
  ];

  const bannerInputRef = useRef<HTMLInputElement>(null);
  const avatarInputRef = useRef<HTMLInputElement>(null);

  const handleBannerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const url = URL.createObjectURL(e.target.files[0]);
      setBanner(url);
    }
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const url = URL.createObjectURL(e.target.files[0]);
      setAvatar(url);
    }
  };

  return (
    <div className="flex flex-col items-start w-full min-h-[70vh] px-2 sm:px-4">
      <div className="w-full max-w-2xl bg-neutral-900 rounded-2xl shadow-xl border border-neutral-800 overflow-hidden flex flex-col mx-auto">
        {/* Banner */}
        <div className="relative w-full h-40 bg-neutral-800">
          <img
            src={banner}
            alt="Banner"
            className="w-full h-full object-cover"
          />
          <button
            className="absolute top-3 right-3 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 transition"
            onClick={() => bannerInputRef.current?.click()}
          >
            <Icon icon="hugeicons:edit-01" className="text-xl" />
          </button>
          <input
            type="file"
            accept="image/*"
            ref={bannerInputRef}
            className="hidden"
            onChange={handleBannerChange}
          />
          {/* Avatar overlaps banner */}
          <div className="absolute left-1/2 -bottom-12 -translate-x-1/2">
            <div className="relative">
              <img
                src={avatar}
                alt="Avatar"
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-4 border-primary shadow-lg bg-neutral-900"
              />
              <button
                className="absolute bottom-2 right-2 bg-black/70 hover:bg-black/90 text-white rounded-full p-2 transition"
                onClick={() => avatarInputRef.current?.click()}
              >
                <Icon icon="hugeicons:edit-01" className="text-lg" />
              </button>
              <input
                type="file"
                accept="image/*"
                ref={avatarInputRef}
                className="hidden"
                onChange={handleAvatarChange}
              />
            </div>
          </div>
        </div>

        {/* Form Card */}
        <div className="flex flex-col gap-6 px-6 pt-20 pb-8">
          <div className="flex flex-col gap-2 items-center">
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              className="text-xl sm:text-2xl font-semibold text-white text-center bg-transparent border-none outline-none focus:ring-0"
              placeholder="İsim Soyisim"
            />
            <div className="w-full max-w-xs mx-auto">
              <label className="block text-xs text-neutral-400 mb-1 text-left">Bölüm</label>
              <select
                value={department}
                onChange={e => setDepartment(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-neutral-800 text-white border border-neutral-700 focus:outline-none focus:border-primary transition"
              >
                {departments.map((dep) => (
                  <option key={dep} value={dep}>{dep}</option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label className="block text-xs text-neutral-400 mb-1">Biyografi</label>
            <textarea
              value={bio}
              onChange={e => setBio(e.target.value)}
              rows={3}
              className="w-full px-4 py-2 rounded-lg bg-neutral-800 text-white border border-neutral-700 focus:outline-none focus:border-primary transition resize-none"
              placeholder="Kendinizden kısaca bahsedin..."
            />
          </div>
          <div className="flex justify-end mt-2">
            <Button>Kaydet</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;