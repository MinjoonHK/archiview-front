import React from 'react';

import { cn } from '@/shared/lib/cn';

interface IItemProps {
  thumbnail: React.ReactNode;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const Item = ({ thumbnail, children, onClick, className }: IItemProps) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        'flex w-full cursor-pointer bg-white items-center p-5',
        'active:border-t active:border-b active:border-primary-40',
        className,
      )}
    >
      {/* 이미지 */}
      <div className="shrink-0">{thumbnail}</div>

      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
};
