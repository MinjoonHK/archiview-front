import { MyArchivePageInner } from './MyArchivePageInner';

export type CategoryTab =
  | 'ALL'
  | 'NEAR'
  | 'KOREAN'
  | 'WESTERN'
  | 'JAPANESE'
  | 'IZAKAYA'
  | 'CAFE'
  | 'DATE'
  | 'ETC';

interface IPlace {
  id: string;
  title: string;
  description: string;
  lat: number;
  lng: number;
  savedCount: number;
  viewCount: number;
  category: CategoryTab;
}

export const MyArchiverPage = () => {
  const initialPlaces: IPlace[] = [
    {
      id: '1',
      title: '장소1',
      lat: 37.5665,
      lng: 126.978,
      description:
        '가게설명가게설명가게설명가게설명가게설명가게설명가게설명가게설명가게설명가게설명가게설명',
      category: 'CAFE',
      savedCount: 12,
      viewCount: 345,
    },
    {
      id: '2',
      title: '장소1',
      lat: 37.5665,
      lng: 126.978,
      description:
        '가게설명가게설명가게설명가게설명가게설명가게설명가게설명가게설명가게설명가게설명가게설명',
      category: 'CAFE',
      savedCount: 12,
      viewCount: 345,
    },
    {
      id: '3',
      title: '장소1',
      lat: 37.5665,
      lng: 126.978,
      description:
        '가게설명가게설명가게설명가게설명가게설명가게설명가게설명가게설명가게설명가게설명가게설명',
      category: 'CAFE',
      savedCount: 12,
      viewCount: 345,
    },
    // ...
  ];
  return <MyArchivePageInner initialPlaces={initialPlaces} />;
  // const [open, setOpen] = useState(false);

  // return (
  //   <div className="flex h-full flex-col min-h-0">
  //     <CategoryOptionTabs />
  //     <div className="px-5 py-3"></div>
  //     <div className="flex-1 min-h-0">
  //       <KakaoMap lat={37.5665} lng={126.978} level={3} />
  //     </div>
  //     <BottomSheet isOpen={open} onOpenChange={setOpen} height={500} peekHeight={72}>
  //       <div className="px-5 pb-6">
  //         <div className="flex h-15 items-center bg-amber-200">업로드한 장소 1</div>
  //         <div className="flex h-15 items-center bg-amber-300">업로드한 장소 1</div>
  //         <div className="flex h-15 items-center bg-amber-400">업로드한 장소 1</div>
  //         <div className="flex h-15 items-center bg-amber-500">업로드한 장소 1</div>
  //         <div className="flex h-15 items-center bg-amber-600">업로드한 장소 1</div>
  //         <div className="flex h-15 items-center bg-amber-700">업로드한 장소 1</div>
  //         <div className="flex h-15 items-center bg-amber-800">업로드한 장소 1</div>
  //         <div className="flex h-15 items-center bg-amber-200">업로드한 장소 1</div>
  //         <div className="flex h-15 items-center bg-amber-300">업로드한 장소 1</div>
  //         <div className="flex h-15 items-center bg-amber-400">업로드한 장소 1</div>
  //       </div>
  //     </BottomSheet>
  //   </div>
  // );
};
