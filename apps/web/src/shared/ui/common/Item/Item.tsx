import React from 'react';

import { Card } from '@/shared/ui/common/Card';
import { cn } from '@/shared/lib/cn';

interface IItemProps {
  thumbnail: React.ReactNode;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const Item = ({ thumbnail, children, onClick, className }: IItemProps) => {
  return (
    <Card onClick={onClick} className={cn('flex items-center p-5', className)}>
      {/* 이미지 */}
      <div className="shrink-0">{thumbnail}</div>

      <div className="min-w-0 flex-1">{children}</div>
    </Card>
  );
};
