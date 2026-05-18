import { profile } from '../data/data.js';

export default function AboutSection() {

  // ✅ Silent CV tracking
  const handleDownload = async () => {
    try {
      await fetch(profile?.formspreeEndpoint || '', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: "CV downloaded",
          time: new Date().toISOString(),
          page: window.location.href,
          device: navigator.userAgent
        })
      });
    } catch (error) {
      console.error("Tracking failed:", error);
    }
  };

  return (
    <div className="px-4 py-8 border-t border-gray-200 dark:border-yt-gray">

      {/* ✅ HEADER */}
      <div className="flex items-start gap-4 mb-6">

        <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
          {profile?.avatar ? (
            <img
              src={profile.avatar}
              alt={profile?.name || "profile"}
              className="w-full h-full object-cover scale-110"
            />
          ) : (
            <div className="w-full h-full bg-gray-300" />
          )}
        </div>

        <div className="flex-1 min-w-0 pt-1">
          <h2 className="text-lg font-semibold">
            {profile?.name || "Your Name"}
          </h2>

          <p className="text-sm text-gray-600 dark:text-yt-textSecondary">
            {profile?.title || "Tech Professional"}
          </p>

          <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
            {profile?.stats?.subscribers || "0"} subscribers • {profile?.stats?.views || "0"} views
          </p>
        </div>

      </div>

      {/* ✅ CV BUTTON */}
      <div className="mb-6">
        <a
          href="/cv/Tshegofatso-Nkosi-CV.pdf"
          download
          onClick={handleDownload}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg 
          bg-gray-900 text-white dark:bg-white dark:text-black 
          hover:opacity-90 transition"
        >
          <i className="fas fa-download text-xs"></i>
          Download CV
        </a>
      </div>

      {/* ✅ BIO */}
      <p className="text-sm text-gray-700 dark:text-yt-textSecondary mb-6 max-w-3xl">
        {profile?.bio || "No bio available"}
      </p>

      {/* ✅ SKILLS */}
      <div className="flex flex-wrap gap-2 mb-6">
        {profile?.skills?.length ? (
          profile.skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 dark:bg-yt-gray text-xs rounded-full"
            >
              {skill}
            </span>
          ))
        ) : (
          <span className="text-sm text-gray-400">No skills listed</span>
        )}
      </div>

      {/* ✅ CONTACT */}
      <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-yt-textSecondary">

        {profile?.email && (
          <a href={`mailto:${profile.email}`} className="flex items-center gap-1.5">
            <i className="fas fa-envelope text-xs"></i>
            <span>{profile.email}</span>
          </a>
        )}

        {profile?.website && (
          <a href={profile.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5">
            <i className="fas fa-globe text-xs"></i>
            <span>
              {profile.website.replace(/^https?:\/\//, '')}
            </span>
          </a>
        )}

        {profile?.location && (
          <span className="flex items-center gap-1.5">
            <i className="fas fa-map-marker-alt text-xs"></i>
            <span>{profile.location}</span>
          </span>
        )}

      </div>

      {/* ✅ SOCIALS */}
      <div className="flex items-center gap-3 mt-5 pt-5 border-t border-gray-200 dark:border-yt-gray">

        {profile?.github && (
          <a href={profile.github} target="_blank" rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 dark:bg-yt-gray hover:bg-gray-200">
            <i className="fab fa-github text-sm"></i>
          </a>
        )}

        {profile?.linkedin && (
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 dark:bg-yt-gray hover:bg-gray-200">
            <i className="fab fa-linkedin text-sm"></i>
          </a>
        )}

      </div>

    </div>
  );
}