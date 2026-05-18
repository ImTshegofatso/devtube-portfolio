import { categories } from '../data/data.js';

export default function CategoryPills({ activeCategory, onCategoryChange }) {
    return (
        <div className="sticky top-14 z-30 bg-white/95 dark:bg-yt-black/95 backdrop-blur border-b border-gray-200 dark:border-yt-gray">

            <div className="flex gap-3 px-4 py-3 overflow-x-auto md:overflow-visible md:flex-wrap">

                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => onCategoryChange(category)}
                        className={`px-4 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors flex-shrink-0 ${
                            activeCategory === category
                                ? 'bg-black dark:bg-white text-white dark:text-black'
                                : 'bg-gray-100 dark:bg-yt-gray hover:bg-gray-200 dark:hover:bg-yt-hover'
                        }`}
                    >
                        {category}
                    </button>
                ))}

            </div>

        </div>
    );
}