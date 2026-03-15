import React, { useEffect } from 'react';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  closeOnOverlayClick?: boolean;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  title,
  size = 'md',
  closeOnOverlayClick = true,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (closeOnOverlayClick && e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-slate-900/95 backdrop-blur-xl flex items-center justify-center z-50 p-4"
      onClick={handleOverlayClick}
    >
      <div className={`bg-slate-800/90 rounded-3xl border border-slate-700 p-6 w-full ${sizeClasses[size]} animate-in zoom-in-95 duration-200`}>
        {title && (
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-black text-white">{title}</h2>
            <button
              onClick={onClose}
              className="text-white/70 hover:text-white text-2xl font-bold transition-colors"
            >
              ×
            </button>
          </div>
        )}
        {children}
      </div>
    </div>
  );
};
