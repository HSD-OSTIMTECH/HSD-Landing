
import React, { useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import Button from '@/components/ui/button';

const defaultBanner = '/images/defaultBanner.jpg';
const defaultAvatar = '/avatars/defaultAvatar.png';

const Settings = () => {
  const [banner, setBanner] = useState<string>(defaultBanner);
  const [avatar, setAvatar] = useState<string>(defaultAvatar);
  const [name, setName] = useState<string>('Poyraz Yılmaz');
  const [bio, setBio] = useState<string>('Kısa bir biyografi...');

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
    <div className="flex flex-col gap-8">
      {/* Banner */}
      <div className="relative w-full h-40 rounded-2xl overflow-hidden bg-neutral-800">
        <img
          src={banner}
          alt="Banner"
          className="w-full h-full object-cover"
        />
        <button
          className="absolute top-2 right-2 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 transition"
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
      </div>

      {/* Profile Photo & Info */}
      <div className="flex flex-col sm:flex-row items-center gap-6">
        <div className="relative">
          <img
            src={avatar}
            alt="Avatar"
            className="w-28 h-28 rounded-full object-cover border-4 border-primary shadow-lg"
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
        <div className="flex-1 w-full max-w-md flex flex-col gap-4">
          <div>
            <label className="block text-sm text-neutral-400 mb-1">İsim Soyisim</label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-neutral-800 text-white border border-neutral-700 focus:outline-none focus:border-primary transition"
            />
          </div>
          <div>
            <label className="block text-sm text-neutral-400 mb-1">Biyografi</label>
            <textarea
              value={bio}
              onChange={e => setBio(e.target.value)}
              rows={3}
              className="w-full px-4 py-2 rounded-lg bg-neutral-800 text-white border border-neutral-700 focus:outline-none focus:border-primary transition resize-none"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <Button>Kaydet</Button>
      </div>
    </div>
  );
};

export default Settings;