'use client';

import React from 'react';

import { Item } from '@/shared/ui/common/Item';
import { RightArrowIcon } from '@/shared/ui/icon';
import { ProfileIcon } from '@/shared/ui/icon/ProfileIcon';

export const EditorProfileItem = (): React.ReactElement => {
  return (
    <Item
      onClick={() => console.log('에디터 프로필 클릭')}
      thumbnail={<div className="h-18 w-18 rounded-2xl bg-neutral-30" />}
      className="gap-5"
    >
      <div className="flex items-center justify-between">
        {/* 텍스트 영역 */}
        <div className="min-w-0">
          <div className="body-18-semibold text-neutral-90">에디터 닉네임~</div>
          <div className="mt-1 body-14-regular text-neutral-50">에디터의 한줄소개</div>
        </div>

        {/* 우측 아이콘 영역 */}
        <div className="ml-4 flex items-center gap-4 text-neutral-90">
          <RightArrowIcon />
          <ProfileIcon />
        </div>
      </div>
    </Item>
  );
};
