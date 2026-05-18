import { useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import Sidebar from '../components/Sidebar.jsx';
import CategoryPills from '../components/CategoryPills.jsx';
import VideoGrid from '../components/VideoGrid.jsx';
import ShortsSection from '../components/ShortsSection.jsx';
import ProfileBanner from '../components/ProfileBanner.jsx';
import AboutSection from '../components/AboutSection.jsx';
import { videos } from '../data/data.js';

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredVideos =
    activeCategory === 'All'
      ? videos
      : videos.filter(v => v.category === activeCategory);

  return (
    <div className="bg-yt-light dark:bg-yt-black text-gray-900 dark:text-white min-h-screen">

      <Navbar onSidebarToggle={() => setSidebarOpen(!sidebarOpen)} />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className="md:ml-64 pt-14">

        <ProfileBanner />

        {/* HOME */}
        <div id="home" className="scroll-mt-28">
          <CategoryPills
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>

        {/* VIDEOS / PROJECTS */}
        <div id="videos" className="scroll-mt-28">
          <VideoGrid videos={filteredVideos} />
        </div>

        {/* SHORTS */}
        <div id="shorts" className="scroll-mt-28">
          <ShortsSection />
        </div>

        {/* ABOUT */}
        <div id="about" className="scroll-mt-28">
          <AboutSection />
        </div>

      </main>
    </div>
  );
}
