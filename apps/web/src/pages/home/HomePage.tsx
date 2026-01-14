'use client';

import { Badge } from '@/shared/ui/Badge';
import { Header } from '@/shared/ui/common/Header';
import { NavigationFooter } from '@/shared/ui/common/NavigationFooter';
import { SearchBar } from '@/shared/ui/SearchBar';
import { use, useState } from 'react';
import { CategorySection } from '@/pages/home/components/CategorySection';
import { HotPlaceSection } from '@/pages/home/components/HotPlaceSection';
import { BelievedEditorSeciton } from '@/pages/home/components/BelievedEditorSeciton';
import { BottomSheet } from '@/shared/ui/common/BottomSheet/BottomSheet';

export const HomePage = (): React.ReactElement => {
  const [searchedText, setSearchedText] = useState<string>('');
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 overflow-y-auto scroll-none">
        <div className="relative">
          <div className="bg-[#84C6FF] h-[179px] w-full rounded-b-[32px] px-[20px] pt-[32px] pb-[52px] ">
            <div className="mb-[12px]">
              <Badge variant="contained" label="아카이버" color="primary-60" />
            </div>
            <div className="heading-24-bold">닉네임 닉네임님 </div>
            <div className="body-14-regular text-primary-50">소중한 정보를 검색해보세요!</div>
          </div>
          {/* <Image
            className="absolute top-[14px] right-0"
            src="/images/MainFolderImage.png"
            alt="MainFolderImage"
            width={243}
            height={162}
          /> */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-[-20px] bg-transparent rounded-full shadow-[0_0_11px_0_rgba(144,144,144,0.40)] flex items-center">
            <SearchBar
              value={searchedText}
              onChange={(e) => setSearchedText(e)}
              onSubmit={() => {}}
            />
          </div>
        </div>
        <div className="p-[20px]">
          <CategorySection />
          <HotPlaceSection />
          <BelievedEditorSeciton />
        </div>
      </div>
      <BottomSheet isOpen={open} onOpenChange={setOpen} height={500} peekHeight={72}>
        <div>
          {/* drag handle */}
          <div className="flex justify-center py-3">
            <div className="h-1 w-10 rounded-full bg-neutral-300" />
          </div>

          {/* content */}
          <div className="px-5 pb-6">
            <h2 className="text-lg font-semibold">업로드한 장소 1</h2>
            <h2 className="text-lg font-semibold">업로드한 장소 1</h2>
            <h2 className="text-lg font-semibold">업로드한 장소 1</h2>
            <h2 className="text-lg font-semibold">업로드한 장소 1</h2>
            <h2 className="text-lg font-semibold">업로드한 장소 1</h2>
            <h2 className="text-lg font-semibold">업로드한 장소 1</h2>
            <h2 className="text-lg font-semibold">업로드한 장소 1</h2>
            <h2 className="text-lg font-semibold">업로드한 장소 1</h2>
            <h2 className="text-lg font-semibold">업로드한 장소 1</h2>
            <h2 className="text-lg font-semibold">업로드한 장소 1</h2>
            <h2 className="text-lg font-semibold">업로드한 장소 1</h2>
            <h2 className="text-lg font-semibold">업로드한 장소 1</h2>
            <h2 className="text-lg font-semibold">업로드한 장소 1</h2>
            <h2 className="text-lg font-semibold">업로드한 장소 1</h2>
            <h2 className="text-lg font-semibold">업로드한 장소 1</h2>
            <h2 className="text-lg font-semibold">업로드한 장소 1</h2>
            <h2 className="text-lg font-semibold">업로드한 장소 1</h2>
            <h2 className="text-lg font-semibold">업로드한 장소 1</h2>
            <h2 className="text-lg font-semibold">업로드한 장소 1</h2>
            <h2 className="text-lg font-semibold">업로드한 장소 1</h2>
          </div>
        </div>
      </BottomSheet>
      <NavigationFooter />
    </div>
  );
};
