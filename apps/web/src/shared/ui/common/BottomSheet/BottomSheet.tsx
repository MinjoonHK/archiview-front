import { cn } from '@/shared/lib/cn';
import { useRef, useState } from 'react';

interface IBottomSheetProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;

  height: number;
  peekHeight: number;

  children: React.ReactNode;

  /**
   * 드래그로 닫을 수 있는지
   */
  draggable?: boolean;
}

export const BottomSheet = ({
  isOpen,
  onOpenChange,
  height,
  peekHeight,
  children,
  draggable = true,
}: IBottomSheetProps) => {
  const sheetRef = useRef<HTMLDivElement | null>(null);
  const startYRef = useRef<number | null>(null);
  const [dragOffset, setDragOffset] = useState(0);

  const closedOffset = height - peekHeight;

  const handlePointerDown = (e: React.PointerEvent) => {
    if (!draggable) return;
    startYRef.current = e.clientY;

    sheetRef.current?.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (startYRef.current === null) return;

    const diff = e.clientY - startYRef.current;

    if (isOpen && diff < 0) return;

    if (!isOpen && diff > 0) return;

    setDragOffset(diff);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (startYRef.current === null) return;

    const threshold = height * 0.15;

    if (isOpen && dragOffset > threshold) {
      onOpenChange(false);
    } else if (!isOpen && dragOffset < -threshold) {
      onOpenChange(true);
    }

    sheetRef.current?.releasePointerCapture(e.pointerId);
    startYRef.current = null;
    setDragOffset(0);
  };

  const baseTranslateY = isOpen ? 0 : closedOffset;

  return (
    <div
      ref={sheetRef}
      className={cn(
        'fixed flex flex-col w-full max-w-125 bottom-0 left-1/2 z-40 h-full rounded-t-[20px] bg-white touch-none',
        'transition-transform duration-250 ease-out',
      )}
      style={{
        height,
        transform: `translateX(-50%) translateY(${baseTranslateY + dragOffset}px)`,
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      {children}
    </div>
  );
};
