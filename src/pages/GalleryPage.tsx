import React, { useState } from 'react';
import { Eye, LayoutGrid, Rows3, Grid3X3 } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/siteData';
import { GalleryLightbox } from '../components/GalleryLightbox';

interface GalleryPageProps {
  layout: 'grid' | 'masonry' | 'cobbles';
  setLayout: (layout: 'grid' | 'masonry' | 'cobbles') => void;
  setCurrentPage: (page: string) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({
  layout,
  setLayout,
  setCurrentPage,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Images' },
    { id: 'mindfulness', label: 'Mindfulness & Peace' },
    { id: 'healing-spaces', label: 'Healing Spaces' },
    { id: 'self-care', label: 'Self-Care Moments' },
    { id: 'reflection', label: 'Reflective Growth' },
  ];

  const filteredItems =
    activeFilter === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  const handleOpenLightbox = (item: GalleryItem) => {
    const idx = filteredItems.findIndex((i) => i.id === item.id);
    if (idx !== -1) setLightboxIndex(idx);
  };

  return (
    <div className="w-full">
      {/* Title Banner */}
      <section className="bg-[#2f1b30] text-white py-16 px-4 border-b border-[#7F4B7C]/40 text-center">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-200">
            Visual Sanctuary
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold mt-2 mb-3">
            Mindcare Gallery
          </h1>
          <div className="flex items-center justify-center gap-2 text-xs text-purple-200">
            <button
              onClick={() => setCurrentPage('home1')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Home
            </button>
            <span>/</span>
            <span className="text-white font-medium">Gallery ({layout})</span>
          </div>
        </div>
      </section>

      {/* Gallery Controls (Category Filter & Layout Variation Switcher) */}
      <section className="py-10 bg-white border-b border-[#E8DCE8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Category Filter Tabs (Rounded-full theme) */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  activeFilter === cat.id
                    ? 'bg-[#7F4B7C] text-white shadow-md'
                    : 'bg-[#FAF6EE] text-gray-600 hover:bg-[#F1E8F1] hover:text-[#7F4B7C] border border-[#E8DCE8]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Layout Switcher (Grid, Masonry, Cobbles - Rounded-xl theme) */}
          <div className="flex items-center gap-1.5 bg-[#FAF6EE] p-1.5 border border-[#E8DCE8] rounded-xl">
            <button
              onClick={() => setLayout('grid')}
              className={`px-3 py-1.5 rounded-lg text-xs flex items-center gap-1.5 transition-colors cursor-pointer ${
                layout === 'grid'
                  ? 'bg-white text-[#7F4B7C] shadow-xs font-semibold'
                  : 'text-gray-500 hover:text-[#7F4B7C]'
              }`}
              title="Grid View"
            >
              <Grid3X3 className="w-4 h-4" />
              <span className="hidden sm:inline">Grid</span>
            </button>
            <button
              onClick={() => setLayout('masonry')}
              className={`px-3 py-1.5 rounded-lg text-xs flex items-center gap-1.5 transition-colors cursor-pointer ${
                layout === 'masonry'
                  ? 'bg-white text-[#7F4B7C] shadow-xs font-semibold'
                  : 'text-gray-500 hover:text-[#7F4B7C]'
              }`}
              title="Masonry View"
            >
              <LayoutGrid className="w-4 h-4" />
              <span className="hidden sm:inline">Masonry</span>
            </button>
            <button
              onClick={() => setLayout('cobbles')}
              className={`px-3 py-1.5 rounded-lg text-xs flex items-center gap-1.5 transition-colors cursor-pointer ${
                layout === 'cobbles'
                  ? 'bg-white text-[#7F4B7C] shadow-xs font-semibold'
                  : 'text-gray-500 hover:text-[#7F4B7C]'
              }`}
              title="Cobbles View"
            >
              <Rows3 className="w-4 h-4" />
              <span className="hidden sm:inline">Cobbles</span>
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Container */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredItems.length === 0 ? (
          <div className="text-center py-12 text-gray-500 text-sm">
            No gallery items found in this category.
          </div>
        ) : layout === 'masonry' ? (
          /* MASONRY VARIATION */
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => handleOpenLightbox(item)}
                className="break-inside-avoid bg-white border border-[#E8DCE8] overflow-hidden group relative cursor-pointer shadow-sm hover:shadow-xl transition-all"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#2f1b30]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center text-white">
                  <div className="w-10 h-10 rounded-full bg-[#7F4B7C] text-white flex items-center justify-center mb-2 shadow-lg">
                    <Eye className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-purple-200">
                    {item.category.replace('-', ' ')}
                  </span>
                  <h4 className="font-serif text-base font-bold text-white mt-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-purple-100/80 mt-1 line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : layout === 'cobbles' ? (
          /* COBBLES VARIATION */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[220px]">
            {filteredItems.map((item, idx) => {
              const isLarge = idx % 5 === 0 || idx % 5 === 3;
              return (
                <div
                  key={item.id}
                  onClick={() => handleOpenLightbox(item)}
                  className={`bg-white border border-[#E8DCE8] overflow-hidden group relative cursor-pointer shadow-sm hover:shadow-xl transition-all ${
                    isLarge ? 'sm:col-span-2 sm:row-span-2' : 'col-span-1 row-span-1'
                  }`}
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#2f1b30]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center text-white">
                    <div className="w-9 h-9 rounded-full bg-[#7F4B7C] text-white flex items-center justify-center mb-2 shadow-lg">
                      <Eye className="w-4 h-4" />
                    </div>
                    <h4 className="font-serif text-sm sm:text-base font-bold text-white">
                      {item.title}
                    </h4>
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-purple-200 mt-1">
                      {item.category.replace('-', ' ')}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* STANDARD GRID VARIATION (gallery-grid.html) */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => handleOpenLightbox(item)}
                className="bg-white border border-[#E8DCE8] overflow-hidden group relative cursor-pointer shadow-sm hover:shadow-xl transition-all h-[280px]"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#2f1b30]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center text-white">
                  <div className="w-10 h-10 rounded-full bg-[#7F4B7C] text-white flex items-center justify-center mb-2 shadow-lg">
                    <Eye className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-purple-200">
                    {item.category.replace('-', ' ')}
                  </span>
                  <h4 className="font-serif text-base font-bold text-white mt-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-purple-100/80 mt-1 line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Lightbox Modal */}
      <GalleryLightbox
        items={filteredItems}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNext={() => {
          if (lightboxIndex !== null) {
            setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
          }
        }}
        onPrev={() => {
          if (lightboxIndex !== null) {
            setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
          }
        }}
      />
    </div>
  );
};
