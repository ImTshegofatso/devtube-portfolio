import { Link } from 'react-router-dom';

export default function VideoGrid({ videos }) {
    return (
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">

            {videos.map((video) => (

                <div key={video.id} className="group cursor-pointer">

                    {/* THUMBNAIL */}
                    <div className="relative aspect-video rounded-xl overflow-hidden mb-3 bg-gray-200 dark:bg-yt-gray">

                        <Link to={`/video/${video.id}`}>
                            <img
                                src={video.thumbnail}
                                alt={video.title}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        </Link>

                        {/* PLAY OVERLAY */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <i className="fas fa-play text-white text-4xl opacity-90"></i>
                        </div>

                        {/* ACTION ICONS (hover only) */}
                        <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition">

                            <a
                                href={video.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="bg-black/70 hover:bg-black text-white p-2 rounded-full backdrop-blur"
                                title="Open Live"
                            >
                                <i className="fas fa-external-link-alt text-xs"></i>
                            </a>

                            <a
                                href={video.repoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="bg-black/70 hover:bg-black text-white p-2 rounded-full backdrop-blur"
                                title="View Code"
                            >
                                <i className="fab fa-github text-xs"></i>
                            </a>

                        </div>

                    </div>

                    {/* INFO */}
                    <div className="flex gap-3">

                        <div className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0">
                            <img
                                src={video.avatar}
                                alt={video.channel}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-sm leading-tight mb-1 line-clamp-2">
                                {video.title}
                            </h3>

                            <div className="text-xs text-gray-600 dark:text-yt-textSecondary">
                                <div>{video.channel}</div>
                                <div>{video.views} • {video.time}</div>
                            </div>
                        </div>

                    </div>

                </div>

            ))}
        </div>
    );
}