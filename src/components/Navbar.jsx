import { useState, useEffect } from 'react';
import { profile } from '../data/data.js';

export default function Navbar({ onSidebarToggle }) {
    const [isDark, setIsDark] = useState(() => {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return true;
        }
        return false;
    });

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDark]);

    const toggleTheme = () => {
        setIsDark(!isDark);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 h-14 bg-white dark:bg-yt-black border-b border-gray-200 dark:border-yt-gray flex items-center justify-between px-4 z-50">
            {/* Left: Menu & Logo */}
            <div className="flex items-center gap-4">
                <button 
                    onClick={onSidebarToggle}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-yt-hover rounded-full transition-colors"
                >
                    <i className="fas fa-bars text-lg"></i>
                </button>
                <a href="#home" className="flex items-center gap-1 text-yt-red">
                    <i className="fab fa-youtube text-3xl"></i>
                    <span className="text-xl font-bold tracking-tight dark:text-white">DevTube</span>
                    <sup className="text-xs text-gray-500 dark:text-gray-400 ml-1">Portfolio</sup>
                </a>
            </div>

            {/* Center: Search */}
            <div className="hidden md:flex items-center flex-1 max-w-2xl mx-8">
                <div className="flex w-full">
                    <input 
                        type="text" 
                        placeholder="Search projects..." 
                        className="w-full px-4 py-2 bg-gray-100 dark:bg-yt-black border border-gray-300 dark:border-yt-gray rounded-l-full focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 transition-colors"
                    />
                    <button className="px-6 py-2 bg-gray-100 dark:bg-yt-gray border border-l-0 border-gray-300 dark:border-yt-gray rounded-r-full hover:bg-gray-200 dark:hover:bg-yt-hover transition-colors">
                        <i className="fas fa-search text-gray-600 dark:text-gray-300"></i>
                    </button>
                </div>
                <button className="ml-4 p-2 bg-gray-100 dark:bg-yt-black hover:bg-gray-200 dark:hover:bg-yt-hover rounded-full transition-colors">
                    <i className="fas fa-microphone"></i>
                </button>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-2">
                <button 
                    onClick={toggleTheme}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-yt-hover rounded-full transition-colors"
                >
                    <i className={`fas fa-moon ${isDark ? 'hidden' : ''}`}></i>
                    <i className={`fas fa-sun hidden ${isDark ? '!block text-yellow-400' : ''}`}></i>
                </button>
                <button className="p-2 hover:bg-gray-100 dark:hover:bg-yt-hover rounded-full transition-colors relative">
                    <i className="fas fa-bell"></i>
                    <span className="absolute top-1 right-1 bg-yt-red text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
                </button>
                <div className="w-8 h-8 rounded-full overflow-hidden ml-2 cursor-pointer">
                    <img 
                        src={profile.avatar} 
                        alt="Profile" 
                        className="w-full h-full object-cover scale-150 object-[center_20%]"
                    />
                </div>
            </div>
        </nav>
    );
}