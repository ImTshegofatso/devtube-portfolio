import myPhoto from '../assets/my-photo.jpg';

export const subscriptions = [
    { name: 'React Mastery', avatar: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=100&h=100&fit=crop' },
    { name: 'TypeScript Pro', avatar: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=100&h=100&fit=crop' },
    { name: 'CSS Tricks', avatar: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=100&h=100&fit=crop' },
    { name: 'DevOps Daily', avatar: 'https://images.unsplash.com/photo-1667372393119-c8f473882e8e?w=100&h=100&fit=crop' },
    { name: 'Python Hub', avatar: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=100&h=100&fit=crop' }
];

export const videos = [
    {
        id: 1,
        thumbnail: '/projects/vin.png',
        title: 'VIN Checker Pro',
        channel: 'Tshegofatso Nkosi',
        views: 'Production App',
        time: 'React • API',
        avatar: myPhoto,
        category: 'JavaScript',
        demoUrl: 'https://vin-checker-pro.netlify.app/',
        repoUrl: 'https://github.com/ImTshegofatso/vin-checker'
    },
    {
        id: 2,
        thumbnail: '/projects/y2.png',
        title: 'YouTube Downloader',
        channel: 'Tshegofatso Nkosi',
        views: 'Utility Tool',
        time: 'TypeScript',
        avatar: myPhoto,
        category: 'TypeScript',
        demoUrl: 'https://y2download.netlify.app/',
        repoUrl: 'https://github.com/ImTshegofatso/youtube-downloader'
    },
    {
        id: 3,
        thumbnail: '/projects/superbalist.png',
        title: 'Superbalist Clone',
        channel: 'Tshegofatso Nkosi',
        views: 'Frontend Clone',
        time: 'React',
        avatar: myPhoto,
        category: 'React',
        demoUrl: 'https://superbalistclone.netlify.app/',
        repoUrl: 'https://github.com/ImTshegofatso/superbalist-clone'
    },
    {
        id: 4,
        thumbnail: '/projects/ai.png',
        title: 'AI Music Detector',
        channel: 'Tshegofatso Nkosi',
        views: 'AI Tool',
        time: 'AI • JavaScript',
        avatar: myPhoto,
        category: 'AI/ML',
        demoUrl: 'https://aimusicdetector.netlify.app/',
        repoUrl: 'https://github.com/ImTshegofatso/ai-music-detector'
    },
    {
        id: 5,
        thumbnail: '/projects/saa.png',
        title: 'SAA Airlines UI',
        channel: 'Tshegofatso Nkosi',
        views: 'UI Project',
        time: 'React • UI/UX',
        avatar: myPhoto,
        category: 'UI/UX',
        demoUrl: 'https://saa-airlines.vercel.app/',
        repoUrl: 'https://github.com/ImTshegofatso/saa-airlines'
    },
    {
        id: 6,
        thumbnail: '/projects/gaula.png',
        title: 'Gaula Korner',
        channel: 'Tshegofatso Nkosi',
        views: 'Business Website',
        time: 'Full Stack',
        avatar: myPhoto,
        category: 'Node.js',
        demoUrl: 'https://gaula-korner.vercel.app/',
        repoUrl: 'https://github.com/ImTshegofatso/gaula-korner'
    }
];


export const shorts = [
  {
    id: 1,
    title: 'VIN Checker Demo',
    video: '/shorts/vin.mp4',
    views: '120K views'
  },
  {
    id: 2,
    title: 'YouTube Downloader Demo',
    video: '/shorts/y2.mp4',
    views: '89K views'
  },
  {
    id: 3,
    title: 'Superbalist UI Walkthrough',
    video: '/shorts/superbalist.mp4',
    views: '210K views'
  },
  {
    id: 4,
    title: 'AI Music Detection',
    video: '/shorts/ai.mp4',
    views: '75K views'
  }
];

export const categories = [
    'All', 'React', 'JavaScript', 'TypeScript', 'Node.js', 'Python', 
    'AI/ML', 'DevOps', 'Mobile', 'UI/UX', 'Live', 'Recently uploaded', 
    'Watched', 'New to you'
];

export const profile = {
    name: 'Tshegofatso Nkosi',
    title: 'Full-Stack Developer',
    avatar: myPhoto,
    banner: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=400&fit=crop',
    bio: 'I’m a full‑stack developer with 2 years of experience building scalable web applications using React, Node.js, and cloud technologies. I completed my full‑stack development training through HyperionDev in partnership with Stellenbosch University, gaining a solid foundation in modern web development and problem‑solving. With additional cybersecurity training—SANCS26, Cisco’s Junior Cybersecurity course, near‑completion of KCNA, and ongoing Ethical Hacking studies—I bring a security‑aware mindset into my development process, aiming to build applications that are reliable, maintainable, and secure by design.',
    location: 'Johannesburg, South Africa',
    email: 'TR.Nkosi@outlook.com',
    github: 'https://github.com/ImTshegofatso',
    linkedin: 'http://www.linkedin.com/in/tshegofatso-nkosi',
    formspreeEndpoint: 'https://formspree.io/f/mlgaprnb',
    stats: {
        subscribers: '12.5K',
        videos: '48',
        views: '1.2M'
    },
    skills: ['React', 'Node.js', 'JavaScript', 'TypeScript', 'Python', 'AWS', 'Docker', 'Kubernetes', 'MongoDB']
};