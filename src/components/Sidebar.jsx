import { useEffect, useRef } from 'react';
import { subscriptions } from '../data/data.js';

export default function Sidebar({ isOpen, onClose }) {
    const sidebarRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                window.innerWidth < 768 &&
                isOpen &&
                sidebarRef.current &&
                !sidebarRef.current.contains(e.target) &&
                !e.target.closest('button')
            ) {
                onClose();
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [isOpen, onClose]);

    const handleNavClick = () => {
        if (window.innerWidth < 768) {
            onClose();
        }
    };

    return (
        <aside 
            ref={sidebarRef}
            className={`fixed left-0 top-14 bottom-0 w-64 bg-white dark:bg-yt-black overflow-y-auto transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 z-40 border-r border-gray-200 dark:border-yt-gray`}
        >
            <div className="py-3">
                {/* Main Section */}
                <div className="px-3 mb-4">
                    <a href="#home" onClick={handleNavClick} className="sidebar-item flex items-center gap-5 px-3 py-2 rounded-lg transition-colors bg-gray-100 dark:bg-yt-hover">
                        <i className="fas fa-home text-xl w-6 text-center"></i>
                        <span className="text-sm font-medium">Home</span>
                    </a>
                    <a href="#shorts" onClick={handleNavClick} className="sidebar-item flex items-center gap-5 px-3 py-2 rounded-lg transition-colors">
                        <i className="fas fa-bolt text-xl w-6 text-center"></i>
                        <span className="text-sm font-medium">Shorts</span>
                    </a>
                    <a href="#subscriptions" onClick={handleNavClick} className="sidebar-item flex items-center gap-5 px-3 py-2 rounded-lg transition-colors">
                        <i className="fas fa-photo-video text-xl w-6 text-center"></i>
                        <span className="text-sm font-medium">Subscriptions</span>
                    </a>
                </div>

                <hr className="border-gray-200 dark:border-yt-gray my-2" />

                {/* You Section */}
                <div className="px-3 mb-4">
                    <h3 className="px-3 py-2 text-sm font-bold flex items-center gap-2">
                        You <i className="fas fa-chevron-right text-xs"></i>
                    </h3>
                    <a href="#about" onClick={handleNavClick} className="sidebar-item flex items-center gap-5 px-3 py-2 rounded-lg transition-colors">
                        <i className="fas fa-user-circle text-xl w-6 text-center"></i>
                        <span className="text-sm font-medium">Your channel</span>
                    </a>
                    <a href="#home" onClick={handleNavClick} className="sidebar-item flex items-center gap-5 px-3 py-2 rounded-lg transition-colors">
                        <i className="fas fa-history text-xl w-6 text-center"></i>
                        <span className="text-sm font-medium">History</span>
                    </a>
                    <a href="#videos" onClick={handleNavClick} className="sidebar-item flex items-center gap-5 px-3 py-2 rounded-lg transition-colors">
                        <i className="fas fa-play-circle text-xl w-6 text-center"></i>
                        <span className="text-sm font-medium">Your videos</span>
                    </a>
                    <a href="#home" onClick={handleNavClick} className="sidebar-item flex items-center gap-5 px-3 py-2 rounded-lg transition-colors">
                        <i className="fas fa-clock text-xl w-6 text-center"></i>
                        <span className="text-sm font-medium">Watch later</span>
                    </a>
                    <a href="#home" onClick={handleNavClick} className="sidebar-item flex items-center gap-5 px-3 py-2 rounded-lg transition-colors">
                        <i className="fas fa-thumbs-up text-xl w-6 text-center"></i>
                        <span className="text-sm font-medium">Liked videos</span>
                    </a>
                </div>

                <hr className="border-gray-200 dark:border-yt-gray my-2" />

                {/* Subscriptions */}
                <div className="px-3 mb-4">
                    <h3 className="px-3 py-2 text-sm font-bold">Subscriptions</h3>
                    <div className="space-y-1">
                        {subscriptions.map((sub, index) => (
                            <a 
                                key={index} 
                                href="#videos" 
                                onClick={handleNavClick}
                                className="sidebar-item flex items-center gap-5 px-3 py-2 rounded-lg transition-colors"
                            >
                                <img src={sub.avatar} alt={sub.name} className="w-6 h-6 rounded-full object-cover" />
                                <span className="text-sm font-medium truncate">{sub.name}</span>
                            </a>
                        ))}
                    </div>
                </div>

                <hr className="border-gray-200 dark:border-yt-gray my-2" />

                {/* Explore */}
                <div className="px-3 mb-4">
                    <h3 className="px-3 py-2 text-sm font-bold">Explore</h3>
                    <a href="#home" onClick={handleNavClick} className="sidebar-item flex items-center gap-5 px-3 py-2 rounded-lg transition-colors">
                        <i className="fas fa-fire text-xl w-6 text-center"></i>
                        <span className="text-sm font-medium">Trending</span>
                    </a>
                    <a href="#home" onClick={handleNavClick} className="sidebar-item flex items-center gap-5 px-3 py-2 rounded-lg transition-colors">
                        <i className="fas fa-shopping-bag text-xl w-6 text-center"></i>
                        <span className="text-sm font-medium">Shopping</span>
                    </a>
                    <a href="#home" onClick={handleNavClick} className="sidebar-item flex items-center gap-5 px-3 py-2 rounded-lg transition-colors">
                        <i className="fas fa-music text-xl w-6 text-center"></i>
                        <span className="text-sm font-medium">Music</span>
                    </a>
                    <a href="#home" onClick={handleNavClick} className="sidebar-item flex items-center gap-5 px-3 py-2 rounded-lg transition-colors">
                        <i className="fas fa-film text-xl w-6 text-center"></i>
                        <span className="text-sm font-medium">Movies</span>
                    </a>
                    <a href="#live" onClick={handleNavClick} className="sidebar-item flex items-center gap-5 px-3 py-2 rounded-lg transition-colors">
                        <i className="fas fa-broadcast-tower text-xl w-6 text-center"></i>
                        <span className="text-sm font-medium">Live</span>
                    </a>
                    <a href="#home" onClick={handleNavClick} className="sidebar-item flex items-center gap-5 px-3 py-2 rounded-lg transition-colors">
                        <i className="fas fa-gamepad text-xl w-6 text-center"></i>
                        <span className="text-sm font-medium">Gaming</span>
                    </a>
                    <a href="#home" onClick={handleNavClick} className="sidebar-item flex items-center gap-5 px-3 py-2 rounded-lg transition-colors">
                        <i className="fas fa-newspaper text-xl w-6 text-center"></i>
                        <span className="text-sm font-medium">News</span>
                    </a>
                    <a href="#home" onClick={handleNavClick} className="sidebar-item flex items-center gap-5 px-3 py-2 rounded-lg transition-colors">
                        <i className="fas fa-trophy text-xl w-6 text-center"></i>
                        <span className="text-sm font-medium">Sports</span>
                    </a>
                    <a href="#home" onClick={handleNavClick} className="sidebar-item flex items-center gap-5 px-3 py-2 rounded-lg transition-colors">
                        <i className="fas fa-lightbulb text-xl w-6 text-center"></i>
                        <span className="text-sm font-medium">Learning</span>
                    </a>
                    <a href="#home" onClick={handleNavClick} className="sidebar-item flex items-center gap-5 px-3 py-2 rounded-lg transition-colors">
                        <i className="fas fa-tshirt text-xl w-6 text-center"></i>
                        <span className="text-sm font-medium">Fashion & Beauty</span>
                    </a>
                    <a href="#home" onClick={handleNavClick} className="sidebar-item flex items-center gap-5 px-3 py-2 rounded-lg transition-colors">
                        <i className="fas fa-podcast text-xl w-6 text-center"></i>
                        <span className="text-sm font-medium">Podcasts</span>
                    </a>
                </div>

                <hr className="border-gray-200 dark:border-yt-gray my-2" />

                {/* More from YouTube */}
                <div className="px-3 mb-4">
                    <h3 className="px-3 py-2 text-sm font-bold">More from DevTube</h3>
                    <a href="#home" onClick={handleNavClick} className="sidebar-item flex items-center gap-5 px-3 py-2 rounded-lg transition-colors">
                        <i className="fab fa-youtube text-xl w-6 text-center text-yt-red"></i>
                        <span className="text-sm font-medium">DevTube Premium</span>
                    </a>
                    <a href="#home" onClick={handleNavClick} className="sidebar-item flex items-center gap-5 px-3 py-2 rounded-lg transition-colors">
                        <i className="fas fa-music text-xl w-6 text-center"></i>
                        <span className="text-sm font-medium">DevTube Music</span>
                    </a>
                    <a href="#home" onClick={handleNavClick} className="sidebar-item flex items-center gap-5 px-3 py-2 rounded-lg transition-colors">
                        <i className="fas fa-child text-xl w-6 text-center"></i>
                        <span className="text-sm font-medium">DevTube Kids</span>
                    </a>
                </div>

                <hr className="border-gray-200 dark:border-yt-gray my-2" />

                {/* Footer */}
                <div className="px-6 py-4 text-xs text-gray-500 dark:text-gray-400">
                    <p className="mb-2">About Press Copyright Contact us Creators Advertise Developers</p>
                    <p className="mb-2">Terms Privacy Policy & Safety How YouTube works Test new features</p>
                    <p className="mt-4 text-gray-400">© 2024 DevTube Portfolio</p>
                </div>
            </div>
        </aside>
    );
}
