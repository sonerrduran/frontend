import React from 'react';
import { getCardClass } from '../../theme';

interface CardProps {
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error';
  hoverable?: boolean;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  variant = 'default',
  hoverable = true,
  className = '',
  children,
  onClick,
}) => {
  return (
    <div
      className={`${getCardClass(variant, hoverable)} ${className} ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
