import Image from 'next/image';
import Link from 'next/link';

const Logo = ({ withText }: { withText?: boolean }) => {
    
  return (
    <div className="flex items-center justify-between py-5 md:block">
      <Link href="/" className="flex justify-start gap-1">
        <Image
          src="/images/logo_light.svg"
          width={40}
          height={40}
          className="size-6 hidden dark:block"
          alt="Starter logo"
        />
        <Image
          src="/images/logo_dark.svg"
          width={40}
          height={40}
          className="size-6 block dark:hidden"
          alt="Starter logo"
        />
        {withText && (
          <p className="text-black dark:text-white font-semibold">tarter</p>
        )}
      </Link>
    </div>
  );
};

export default Logo;
