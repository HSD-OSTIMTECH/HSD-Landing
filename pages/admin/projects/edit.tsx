import React, { useState } from 'react';
import ProjectCard from '@/components/shared/projectCard';
import SelectBox from '@/components/ui/selectBox';
import Button from '@/components/ui/button';
import { Icon } from '@iconify/react';

type Project = {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
  githubUrl?: string;
  projectUrl?: string;
  category: string;
};

const dummyProjects: Project[] = [
  {
    id: 1,
    title: 'Deprem Bilinci',
    description: 'Deprem bilincinin artması için bir websitesi. Deprem bilincinin artması için bir websitesi',
    imageUrl: '/images/defaultImage.png',
    githubUrl: 'https://github.com/',
    projectUrl: 'https://example.com',
    category: 'web',
  },
  // ...daha fazla dummy veri eklenebilir
];

const categoryOptions = [
  { label: 'Tümü', value: '' },
  { label: 'Web', value: 'web' },
  { label: 'Mobil', value: 'mobil' },
  { label: 'Diğer', value: 'diğer' },
];


type EditData = {
  title: string;
  description: string;
  category: string;
  githubUrl: string;
  projectUrl: string;
};

const ProjectEdit = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [search, setSearch] = useState<string>('');
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = dummyProjects.filter(
    (p: Project) =>
      (selectedCategory === '' || p.category === selectedCategory) &&
      (search === '' || p.title.toLowerCase().includes(search.toLowerCase()))
  );

  // Modal içeriği için form state
  const [editData, setEditData] = useState<EditData>({
    title: '',
    description: '',
    category: '',
    githubUrl: '',
    projectUrl: '',
  });

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setEditData({
      title: project.title,
      description: project.description,
      category: project.category,
      githubUrl: project.githubUrl || '',
      projectUrl: project.projectUrl || '',
    });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  const handleEditChange = (field: keyof EditData, value: string) => {
    setEditData((prev) => ({ ...prev, [field]: value }));
  };

  const handleEditSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Güncelleme işlemi burada yapılır (API çağrısı vs.)
    closeModal();
  };

  const handleDelete = () => {
    // Silme işlemi burada yapılır (API çağrısı vs.)
    closeModal();
  };

  return (
    <div className="min-h-screen">
      <div className="flex flex-col md:flex-row gap-4 mb-8 items-center">
        <input
          type="text"
          placeholder="Proje Ara"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 bg-black border border-neutral-800 rounded-full px-6 py-2 text-white placeholder:text-neutral-500 focus:outline-none focus:border-primary max-w-lg"
        />
        <SelectBox
          options={categoryOptions}
          value={selectedCategory}
          onChange={setSelectedCategory}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div key={project.id} onClick={() => openModal(project)}>
            <ProjectCard {...project} />
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div
            className="bg-black rounded-xl p-8 w-full max-w-lg relative border border-neutral-800"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-primary transition cursor-pointer text-2xl"
            >
              <Icon icon="mdi:close" />
            </button>
            <h2 className="text-2xl font-bold text-white mb-6">
              Projeyi Düzenle
            </h2>
            <form onSubmit={handleEditSubmit}>
              <div className="mb-4">
                <label className="block text-sm text-neutral-300 mb-1">
                  Proje Adı
                </label>
                <input
                  type="text"
                  value={editData.title}
                  onChange={(e) => handleEditChange("title", e.target.value)}
                  className="w-full border border-neutral-700 rounded-full px-4 py-2 text-white placeholder:text-neutral-500 focus:outline-none focus:border-primary"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm text-neutral-300 mb-1">
                  Kategori
                </label>
                <select
                  value={editData.category}
                  onChange={e => handleEditChange("category", e.target.value)}
                  className="w-full border border-neutral-700 rounded-full px-4 py-2 text-white bg-black focus:outline-none focus:border-primary"
                >
                  {categoryOptions.slice(1).map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm text-neutral-300 mb-1">
                  Github Linki (Opsiyonel)
                </label>
                <input
                  type="url"
                  value={editData.githubUrl}
                  onChange={(e) =>
                    handleEditChange("githubUrl", e.target.value)
                  }
                  className="w-full border border-neutral-700 rounded-full px-4 py-2 text-white placeholder:text-neutral-500 focus:outline-none focus:border-primary"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm text-neutral-300 mb-1">
                  Canlı Link (Opsiyonel)
                </label>
                <input
                  type="url"
                  value={editData.projectUrl}
                  onChange={(e) =>
                    handleEditChange("projectUrl", e.target.value)
                  }
                  className="w-full border border-neutral-700 rounded-full px-4 py-2 text-white placeholder:text-neutral-500 focus:outline-none focus:border-primary"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm text-neutral-300 mb-1">
                  Proje Açıklaması
                </label>
                <textarea
                  rows={3}
                  value={editData.description}
                  onChange={(e) =>
                    handleEditChange("description", e.target.value)
                  }
                  className="w-full border border-neutral-700 rounded-lg px-4 py-2 text-white placeholder:text-neutral-500 focus:outline-none focus:border-primary resize-none"
                />
              </div>
              <div className="flex gap-4">
                <Button>Kaydet</Button>
                <Button variant="outline" onClick={handleDelete}>
                  Sil
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectEdit;