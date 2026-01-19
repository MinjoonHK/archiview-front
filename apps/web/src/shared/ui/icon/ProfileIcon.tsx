import type { SVGProps } from 'react';

export const ProfileIcon = (props: SVGProps<SVGSVGElement>): React.ReactElement => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={19}
      viewBox="0 0 20 19"
      fill="none"
      {...props}
    >
      <path
        d="M12.75 5.75C12.75 2.98858 10.5114 0.75 7.75 0.75C4.98858 0.75 2.75 2.98858 2.75 5.75C2.75 8.51142 4.98858 10.75 7.75 10.75C10.5114 10.75 12.75 8.51142 12.75 5.75Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.75 16.25H18.75"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M0.75 17.75C0.75 13.884 3.88401 10.75 7.75 10.75C9.23725 10.75 10.6162 11.2138 11.75 12.0047"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
