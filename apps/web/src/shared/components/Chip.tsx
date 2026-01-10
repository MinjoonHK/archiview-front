import React, { ButtonHTMLAttributes, ReactElement } from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

interface IChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'contained' | 'outlined';
  chipType?: 'category' | 'keyword';
  hashTag?: boolean;
  color?: 'primary' | 'secondary' | 'default';
  label: string;
  endIcon?: React.ReactNode;
  className?: string;
}

/**
 * Chip Component Props
 * @param variant 칩의 variant (contained, outlined)
 * @param chipType 칩의 타입 (category, keyword)
 * @param color 칩의 색상 테마 (primary, secondary, default)
 * @param hashTag label 앞에 # 표시 여부 (default false)
 * @param label 칩에 표시될 텍스트
 * @param endIcon 칩 우측에 표시될 아이콘
 * @param disabled default false
 * @param className 외부에서 전달받는 className (오버라이드 용도)
 * @param props 기본 button attribute
 */
export const Chip = ({
  variant = 'outlined',
  chipType = 'category',
  color = 'primary',
  hashTag = false,
  label,
  endIcon,
  className,
  disabled,
  ...props
}: IChipProps): ReactElement => {
  // 공통 스타일
  const baseStyles = `
    inline-flex
    items-center
    gap-[8px]
    p-[12px]
		font-[14px]
    font-semibold
    rounded-[999px]
    cursor-pointer
    focus:outline-none
    disabled:opacity-50
    disabled:cursor-not-allowed
  `;

  // chipType 스타일
  const chipTypeStyle = chipType === 'keyword' ? 'h-[36px]' : 'h-[26px]';

  const colorToken =
    color === 'primary' ? 'primary-40' : color === 'secondary' ? 'secondary-40' : 'default-40';

  const variantStyle =
    variant === 'contained'
      ? `bg-${colorToken} text-neutral-10`
      : `border border-${colorToken} text-${colorToken}`;

  return (
    <button
      type="button"
      disabled={disabled}
      className={twMerge(clsx(baseStyles, chipTypeStyle, variantStyle, className))}
      {...props}
    >
      {hashTag && <span className="inline-flex">#</span>}
      {label}
      {endIcon && <span className="inline-flex">{endIcon}</span>}
    </button>
  );
};
