'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const logoSrc = isHome ? '/klaci_logo_white.png' : '/klaci_logo_blue.png';

  return (
    <header className="w-full bg-transparent">
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '1.5rem 6rem',
        }}
      >
        {/* Logo or Title */}
        <div
          className="font-poppins text-[2.1875rem] leading-[110%] font-bold tracking-[-1.05px] text-black"
          style={{
            display: 'flex',
            gap: '35px',
            color: isHome ? 'white' : '#264DBC',
          }}
        >
          <Link href="/">
            <img
              src={logoSrc}
              alt="K-LACI Logo"
              style={{ height: '30px', width: 'auto', marginRight: '15px' }}
            />
          </Link>
          {/* Navigation  */}
          <nav className="flex items-center">
            {/* Menu Links Container */}
            <div className="flex items-center gap-[35px]">
              <Link
                href="/about"
                className="font-poppins text-[0.9375rem] leading-[110%] font-semibold tracking-[-0.45px] text-black"
              >
                About
              </Link>
              <Link
                href="/summary"
                className="font-poppins text-[0.9375rem] leading-[110%] font-semibold tracking-[-0.45px] text-black"
              >
                Summary
              </Link>
              <Link
                href="/results"
                className="font-poppins text-[0.9375rem] leading-[110%] font-semibold tracking-[-0.45px] text-black"
              >
                Results
              </Link>
            </div>
          </nav>
        </div>

        {/* Login Button */}
        <button
          style={{
            border: 'none',
            color: isHome ? 'white' : '#264DBC',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            padding: '10px 20px',
          }}
        >
          로그인
        </button>
      </div>
    </header>
  );
};

export default Header;
