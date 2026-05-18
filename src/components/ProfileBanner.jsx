import { profile } from '../data/data.js';

export default function ProfileBanner({ onContactClick }) {
    return (
        <div className="w-full">
            {/* Banner */}
            <div className="w-full h-32 sm:h-48 md:h-56 relative">
                <img 
                    src={profile.banner} 
                    alt="Banner" 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            
            {/* Profile Info */}
            <div className="px-4 sm:px-6 pb-4 -mt-12 sm:-mt-16 relative">
                <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-white dark:border-yt-black overflow-hidden shadow-lg flex-shrink-0">
                        <img 
                            src={profile.avatar} 
                            alt={profile.name}
                            className="w-full h-full object-cover scale-125 object-[center_25%]"
                        />
                    </div>
                    <div className="flex-1 min-w-0 pb-1">
                        <h1 className="text-xl sm:text-2xl font-bold truncate">{profile.name}</h1>
                        <p className="text-sm text-gray-600 dark:text-yt-textSecondary mt-0.5">
                            @{profile.name.toLowerCase().replace(/\s/g, '')} • {profile.stats.subscribers} subscribers • {profile.stats.videos} videos
                        </p>
                    </div>
                    <div className="flex gap-2 mt-2 sm:mt-0 sm:mb-1">
                        <button 
                            onClick={onContactClick}
                            className="px-4 py-2 bg-yt-red text-white text-sm font-medium rounded-full hover:bg-red-700 transition-colors"
                        >
                            Contact Me
                        </button>
                        <button className="px-4 py-2 bg-gray-100 dark:bg-yt-gray text-sm font-medium rounded-full hover:bg-gray-200 dark:hover:bg-yt-hover transition-colors">
                            <i className="fas fa-bell mr-1"></i> Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}