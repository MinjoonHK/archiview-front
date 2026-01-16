'use client';

import { KakaoMap } from '@/shared/ui/KakaoMap';

export const MyArchiverPage = () => {
  return (
    <div>
      <h1>Kakao Map Test</h1>
      <div className="h-100">
        <KakaoMap lat={37.5665} lng={126.978} level={3} />
      </div>
    </div>
  );
};
