import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { zenKurenaido } from '@/config/fonts';

export default function AcmeLogo() {
  return (
    <div
      // className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
      // className={`${delaGothicOne.className} flex flex-row items-center leading-none text-white`}
      className={`flex flex-row items-center leading-none text-white`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className={`text-[24px] ${zenKurenaido.className} antialiased`}>北半球</p>
    </div>
  );
}
