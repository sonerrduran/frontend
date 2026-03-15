import React from 'react';

export interface InputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: 'text' | 'email' | 'password' | 'number';
  disabled?: boolean;
  error?: string;
  label?: string;
  className?: string;
}

export const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder,
  type = 'text',
  disabled = false,
  error,
  label,
  className = '',
}) => {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="block text-white font-bold mb-2">
          {label}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        className={`w-full px-4 py-3 bg-slate-700/50 border ${
          error ? 'border-red-500' : 'border-slate-600'
        } rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 ${
          error ? 'focus:ring-red-500' : 'focus:ring-blue-500'
        } disabled:opacity-50 disabled:cursor-not-allowed transition-all`}
      />
      {error && (
        <p className="text-red-400 text-sm mt-1">{error}</p>
      )}
    </div>
  );
};
