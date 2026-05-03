'use client';
import { useEffect } from 'react';

export default function Modal({ isOpen, onClose, title, children }) {
  // Close modal on Escape key
  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      {/* Modal box */}
      <div className="relative bg-white rounded-xl shadow-xl w-full max-w-md mx-4 p-6 z-10">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl font-bold"
        >
          ✕
        </button>
        {title && <h2 className="text-xl font-bold mb-4 text-center">{title}</h2>}
        {children}
      </div>
    </div>
  );
}