import Image from 'next/image';
import Link from 'next/link';

const Logo = ({ withText }: { withText?: boolean }) => {
    
  return (
      <Link title="Home link" href="/" className="flex justify-start gap-0.5 min-w-fit">
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
          <p className="flex items-center text-black dark:text-white font-semibold text-md">tarter</p>
        )}
      </Link>
  );
};

export default Logo;
