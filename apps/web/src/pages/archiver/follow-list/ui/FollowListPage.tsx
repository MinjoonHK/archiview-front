import { HamburgerIcon } from '@/shared/ui/icon/HamburgerIcon';

import { EditorProfileItem } from './EditorProfileItem';

export const FollowListPage = () => {
  return (
    <div>
      <div className="flex flex-row justify-between p-5">
        <span className="heading-20-bold">
          에디터 <span className="text-primary-40">editorNumber</span>
        </span>
        <HamburgerIcon />
      </div>

      <EditorProfileItem />
    </div>
  );
};
