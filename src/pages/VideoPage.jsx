import { useParams } from 'react-router-dom';
import { videos } from '../data/data';

export default function VideoPage() {
    const { id } = useParams();

    const video = videos.find(v => String(v.id) === String(id));

    if (!video) return <div>Not found</div>;

    return (
        <div className="bg-yt-light dark:bg-yt-black text-gray-900 dark:text-white min-h-screen p-6">

            {/* Live app */}
            <iframe 
                src={video.demoUrl}
                className="w-full h-[500px] rounded-xl mb-6"
            />

            <h1 className="text-2xl font-bold">{video.title}</h1>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
                {video.time}
            </p>

            <div className="flex gap-4">

                <a 
                    href={video.demoUrl}
                    target="_blank"
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                    Open Live
                </a>

                <a 
                    href={video.repoUrl}
                    target="_blank"
                    className="bg-gray-800 text-white px-4 py-2 rounded"
                >
                    View Code
                </a>

            </div>

        </div>
    );
}