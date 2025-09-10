import React, { useRef } from "react";
import Button from "@/components/ui/button";

const ProjectAdd = () => {
  const fileInputRef = useRef(null);

  return (
    <div className="flex items-center">
      <form className="w-full">
        {/* Image Upload */}
        <div className="mb-6">
          <label
            htmlFor="projectImage"
            className="w-full h-48 bg-[#2a1317] border border-red-900 border-dashed rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-[#2a1317]/80 transition-colors relative"
          >
            <input
              id="projectImage"
              type="file"
              accept="image/png, image/jpeg, image/jpg"
              className="hidden"
              ref={fileInputRef}
            />
            <span className="flex flex-col items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12 text-white mb-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5V6.75A2.25 2.25 0 015.25 4.5h13.5A2.25 2.25 0 0121 6.75v10.5A2.25 2.25 0 0118.75 19.5H5.25A2.25 2.25 0 013 16.5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5l4.72-4.72a2.25 2.25 0 013.18 0l4.72 4.72"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.25 10.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                />
              </svg>
              <span className="text-white text-lg font-medium">
                Proje Resmi Yükle
              </span>
              <span className="text-xs text-neutral-400 mt-2">
                Maks 2MB
                <br />
                png, jpg, jpeg
              </span>
            </span>
          </label>
        </div>

        {/* Form Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8 mb-4">

          <div>
            <label className="block text-sm text-neutral-300 mb-1">
              Proje Adı
            </label>
            <input
              type="text"
              placeholder="Lütfen bu alana projeyi giriniz."
              className="w-full border border-neutral-700 rounded-full px-4 py-2 text-white placeholder:text-neutral-500 focus:outline-none focus:border-primary"
            />
          </div>

          <div>
            <label className="block text-sm text-neutral-300 mb-1">
              Kategori
            </label>
            <select className="w-full border border-neutral-700 rounded-full px-4 py-2 text-white focus:outline-none focus:border-primary">
              <option value="">Kategori Seçiniz</option>
              <option value="web">Web</option>
              <option value="mobil">Mobil</option>
              <option value="diğer">Diğer</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-neutral-300 mb-1">
              Github Linki (Opsiyonel)
            </label>
            <input
              type="url"
              placeholder="https://github.com/HSD-OSTIMTECH/"
              className="w-full border border-neutral-700 rounded-full px-4 py-2 text-white placeholder:text-neutral-500 focus:outline-none focus:border-primary"
            />
          </div>

          <div>
            <label className="block text-sm text-neutral-300 mb-1">
              Canlı Link (Opsiyonel)
            </label>
            <input
              type="url"
              placeholder="https://www."
              className="w-full border border-neutral-700 rounded-full px-4 py-2 text-white placeholder:text-neutral-500 focus:outline-none focus:border-primary"
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm text-neutral-300 mb-1">
            Proje Açıklaması
          </label>
          <textarea
            rows={3}
            placeholder="Lütfen bu alana proje açıklamasını giriniz."
            className="w-full border border-neutral-700 rounded-lg px-4 py-2 text-white placeholder:text-neutral-500 focus:outline-none focus:border-primary resize-none"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <Button>Kaydet</Button>
          <Button variant="outline">
            Vazgeç
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ProjectAdd;
