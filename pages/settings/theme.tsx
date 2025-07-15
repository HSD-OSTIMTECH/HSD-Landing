import React, { useState } from 'react';
import { Icon } from '@iconify/react';

const themes = [
  {
    label: 'Karanlık',
    value: 'dark',
    icon: 'hugeicons:moon-01',
  },
  {
    label: 'Aydınlık',
    value: 'light',
    icon: 'hugeicons:sun-01',
  },
  {
    label: 'Sistem',
    value: 'system',
    icon: 'hugeicons:solar-system',
  },
];

const Theme = () => {
  const [selected, setSelected] = useState('system');

  return (
    <div className="w-full max-w-lg bg-neutral-900 rounded-2xl shadow-xl border border-neutral-800 p-8 flex flex-col gap-8">
      <h2 className="text-xl font-semibold text-white mb-4">Tema Ayarları</h2>
      <div className="flex flex-col gap-4">
        {themes.map((theme) => (
          <button
            key={theme.value}
            onClick={() => setSelected(theme.value)}
            className={`flex items-center gap-4 px-5 py-3 rounded-lg border transition-colors text-white text-base font-medium focus:outline-none
              ${selected === theme.value ? 'bg-primary/20 border-primary' : 'bg-neutral-800 border-neutral-700 hover:border-primary'}`}
            type="button"
          >
            <Icon icon={theme.icon} className="text-2xl text-primary" />
            <span>{theme.label}</span>
            {selected === theme.value && (
              <span className="ml-auto text-primary font-bold">Seçili</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Theme;