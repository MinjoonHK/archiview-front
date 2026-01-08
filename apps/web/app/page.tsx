import { Button } from '@/shared/components/button';
import Image from 'next/image';

export default function Home(): React.ReactNode {
  return (
    <div>
      <div className="flex justify-center items-center h-screen flex-col">
        <div className="flex items-center justify-center gap-4">
          <Button variant="contained">Contained</Button>
          <Button variant="contained" disabled>
            disabled
          </Button>
        </div>
        <Button variant="outlined" fullwidth>
          Outlined Fullwidth
        </Button>
        <div className="w-full px-8">
          <Button
            variant="login"
            fullwidth
            startIcon={
              <Image src="/icons/Kakao_Icon.svg" alt="Kakao_Icon" width={24} height={24} />
            }
            className="bg-[#FEE500]"
          >
            카카오톡으로 로그인
          </Button>
          <Button
            variant="login"
            startIcon={
              <Image src="/icons/Google_Icon.svg" alt="Kakao_Icon" width={24} height={24} />
            }
            fullwidth
            className="bg-[#EAEBEC]"
          >
            구글로 로그인
          </Button>
        </div>
      </div>
    </div>
  );
}
