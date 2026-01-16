import React from 'react';

import { BackButtonHeader } from '@/widgets/header/BackButtonHeader';

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <>
      <BackButtonHeader title="나의 아카이브" />
      {children}
    </>
  );
}
