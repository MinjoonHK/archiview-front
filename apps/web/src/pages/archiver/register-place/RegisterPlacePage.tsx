import { InstagramUrlInput, HashTagInput } from './ui/RegisterPlaceInput';

export const RegisterPlacePage = () => {
  return (
    <div className="px-5">
      <InstagramUrlInput className="pt-2.5 pb-8" />
      <div className="-mx-5 border-b border-neutral-30" />
      <HashTagInput className="pt-4 pb-8" />
    </div>
  );
};
