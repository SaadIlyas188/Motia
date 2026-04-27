'use client';

import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface VideoEmbedProps {
  url: string;
  isOpen: boolean;
  onClose: () => void;
}

export function VideoEmbed({ url, isOpen, onClose }: VideoEmbedProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: 'rgba(28, 23, 20, 0.95)' }}
          onClick={onClose}
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-motia-cream hover:text-motia-accent transition-colors duration-300"
            aria-label="Close video"
          >
            <X size={28} />
          </button>
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-4xl aspect-video mx-6"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={url}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Interview video"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}