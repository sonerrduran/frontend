import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'glass' | 'solid';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'default',
  padding = 'md',
}) => {
  const variantClasses = {
    default: 'bg-slate-800/80 backdrop-blur-xl border border-slate-700',
    glass: 'bg-white/10 backdrop-blur-xl border border-white/20',
    solid: 'bg-slate-800 border border-slate-700',
  };

  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div className={`rounded-3xl ${variantClasses[variant]} ${paddingClasses[padding]} ${className}`}>
      {children}
    </div>
  );
};
