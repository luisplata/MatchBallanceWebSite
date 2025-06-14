import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn('container max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8', className)}>
      {children}
    </div>
  );
}
