import React from 'react';
import HeroSection from './components/HeroSec';
import AboutSection from './components/AboutSec';
import ToolsSection from './components/ToolsSec';
import SelectedWorksSection from './components/SelectedWorksSec';
import DrawingsSection from './components/DrawingsSec';
import ImmersiveSection from './components/ImmersiveSec';
import VideoSection from './components/VideoSec';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-neutral-800 selection:text-neutral-100">
      <HeroSection />
      <AboutSection />
      <ToolsSection />
      <SelectedWorksSection />
      <DrawingsSection />
      <ImmersiveSection />
      <VideoSection />
      <Footer />
    </div>
  );
}