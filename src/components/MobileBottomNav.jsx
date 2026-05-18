export default function MobileBottomNav() {
    return (
        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-yt-black border-t border-gray-200 dark:border-yt-gray flex justify-around items-center h-14 z-50">
            <a href="#home" className="flex flex-col items-center gap-1 p-2 text-yt-red">
                <i className="fas fa-home text-lg"></i>
                <span className="text-[10px]">Home</span>
            </a>
            <a href="#shorts" className="flex flex-col items-center gap-1 p-2 text-gray-600 dark:text-gray-400">
                <i className="fas fa-compass text-lg"></i>
                <span className="text-[10px]">Shorts</span>
            </a>
            <button className="flex items-center justify-center w-10 h-10 bg-gray-100 dark:bg-yt-gray rounded-full">
                <i className="fas fa-plus text-lg"></i>
            </button>
            <a href="#videos" className="flex flex-col items-center gap-1 p-2 text-gray-600 dark:text-gray-400">
                <i className="fas fa-photo-video text-lg"></i>
                <span className="text-[10px]">Subscriptions</span>
            </a>
            <a href="#about" className="flex flex-col items-center gap-1 p-2 text-gray-600 dark:text-gray-400">
                <i className="fas fa-user text-lg"></i>
                <span className="text-[10px]">You</span>
            </a>
        </nav>
    );
}