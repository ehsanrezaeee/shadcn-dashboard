import React, { ReactNode } from 'react';
import { Text } from '../text';

interface BadgeProps {
  children: ReactNode;
  type?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';
}

const Badge: React.FC<BadgeProps> = ({ children, type }) => {
  const TYPES = {
    primary: 'bg-PRIMARY-Glass-12 text-PRIMARY-Dark',
    secondary: 'bg-SECONDARY-Glass-16 text-SECONDARY-Dark',
    success: 'bg-SUCCESS-Glass-8 text-SUCCESS-Dark',
    error: 'bg-ERROR-Glass-16 text-ERROR-Dark',
    warning: 'bg-WARNING-Glass-16 text-WARNING-Dark',
    info: 'bg-INFO-Glass-12 text-INFO-Dark'
  };

  return (
    <div className={`flex items-center justify-center px-2 py-[2px] min-w-6 h-6 rounded-[6px] ${type ? TYPES[type].split(" ")[0] : ""}`}>
      {/* @ts-ignore */}
      <Text variant='Label-Text' color={type ? TYPES[type].split(" ")[1] : "text-Text-Light-Secondary"}>{children}</Text>
    </div>
  );
};

export default Badge
