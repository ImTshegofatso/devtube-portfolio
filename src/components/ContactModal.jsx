import { useState } from 'react';
import { profile } from '../data/data.js';

export default function ContactModal({ isOpen, onClose }) {
    const [isSending, setIsSending] = useState(false);
    const [isSent, setIsSent] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSending(true);

        const formData = new FormData(e.target);
        
        try {
            const response = await fetch(profile.formspreeEndpoint, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setIsSending(false);
                setIsSent(true);
                e.target.reset();
                setTimeout(() => {
                    setIsSent(false);
                    onClose();
                }, 3000);
            } else {
                throw new Error('Failed to send');
            }
        } catch (error) {
            console.error('Form error:', error);
            setIsSending(false);
            alert('Failed to send message. Please email directly at ' + profile.email);
        }
    };

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
            <div className="relative bg-white dark:bg-yt-dark rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-yt-gray">
                    <h2 className="text-lg font-bold">Contact Me</h2>
                    <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-yt-hover rounded-full transition-colors">
                        <i className="fas fa-times"></i>
                    </button>
                </div>
                
                {isSent ? (
                    <div className="p-8 text-center">
                        <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i className="fas fa-check text-green-600 dark:text-green-400 text-2xl"></i>
                        </div>
                        <h3 className="text-lg font-bold mb-2">Message Sent!</h3>
                        <p className="text-sm text-gray-600 dark:text-yt-textSecondary">Thanks for reaching out. I'll get back to you soon.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="p-4 space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Name</label>
                            <input
                                type="text"
                                name="name"
                                required
                                className="w-full px-3 py-2 bg-gray-100 dark:bg-yt-gray border border-gray-300 dark:border-yt-gray rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-sm"
                                placeholder="Your name"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                required
                                className="w-full px-3 py-2 bg-gray-100 dark:bg-yt-gray border border-gray-300 dark:border-yt-gray rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-sm"
                                placeholder="your@email.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Message</label>
                            <textarea
                                name="message"
                                required
                                rows={4}
                                className="w-full px-3 py-2 bg-gray-100 dark:bg-yt-gray border border-gray-300 dark:border-yt-gray rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-sm resize-none"
                                placeholder="Tell me about your project..."
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={isSending}
                            className={`w-full py-2.5 font-medium rounded-full transition-colors ${
                                isSending 
                                    ? 'bg-gray-400 cursor-not-allowed' 
                                    : 'bg-yt-red hover:bg-red-700 text-white'
                            }`}
                        >
                            {isSending ? (
                                <span className="flex items-center justify-center gap-2">
                                    <i className="fas fa-spinner fa-spin"></i>
                                    Sending...
                                </span>
                            ) : (
                                'Send Message'
                            )}
                        </button>
                        
                        <div className="text-center pt-2">
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                Or email directly at{' '}
                                <a href={`mailto:${profile.email}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                                    {profile.email}
                                </a>
                            </p>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}