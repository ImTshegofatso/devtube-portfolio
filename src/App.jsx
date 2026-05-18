import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import VideoPage from './pages/VideoPage.jsx';

export default function App() {
  return (
    <div className="bg-yt-light dark:bg-yt-black text-gray-900 dark:text-yt-text transition-colors duration-300 min-h-screen">
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video/:id" element={<VideoPage />} />
      </Routes>

    </div>
  );
}