import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/config/fonts';

export default function AcmeLogo() {
  return (
    <div className={`${lusitana.className} flex flex-row items-center leading-none text-white`} >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      {/* <p className="text-[44px]">北半球</p> */}
      <strong className="text-[32px]">北半球</strong>
    </div>
  );
}
