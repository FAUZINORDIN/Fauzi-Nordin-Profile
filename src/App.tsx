import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { JourneyBiodataSection } from './components/JourneyBiodataSection';
import { TrainingGallerySection } from './components/TrainingGallerySection';
import { ProgramsExperienceSection } from './components/ProgramsExperienceSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ArticlesSection } from './components/ArticlesSection';
import { ContactFooterSection } from './components/ContactFooterSection';
import { LightboxModal, LightboxSlide } from './components/LightboxModal';

export default function App() {
  const [lightboxState, setLightboxState] = useState<{
    slides: LightboxSlide[];
    index: number;
  } | null>(null);

  const openLightbox = (slides: LightboxSlide[], index: number) => {
    setLightboxState({ slides, index });
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#111827]">
      <Navbar />
      <main>
        <HeroSection onOpenLightbox={openLightbox} />
        <JourneyBiodataSection onOpenLightbox={openLightbox} />
        <TrainingGallerySection onOpenLightbox={openLightbox} />
        <ProgramsExperienceSection />
        <CertificationsSection onOpenLightbox={openLightbox} />
        <ArticlesSection />
        <ContactFooterSection />
      </main>

      {lightboxState && (
        <LightboxModal
          slides={lightboxState.slides}
          initialIndex={lightboxState.index}
          onClose={() => setLightboxState(null)}
        />
      )}
    </div>
  );
}
