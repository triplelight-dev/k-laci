'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  const logoSrc = '/klaci_logo_white.png';

  // 현재 페이지 확인 함수
  const isActivePage = (path: string) => {
    return pathname === path;
  };

  // Navigation 메뉴 데이터
  const navigationItems = [
    {
      href: '/about',
      label: '지역자산역량지수 소개',
    },
    {
      href: '/summary',
      label: '주요 분석 결과',
    },
    {
      href: '/results',
      label: '지자체별 리포트 조회',
    },
  ];

  const loginButtonName = '로그인';

  return (
    <header
      style={{
        width: '100%',
        backgroundColor: '#1C3FD3',
      }}
    >
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
            color: 'white',
          }}
        >
          <Link href="/">
            <img
              src={logoSrc}
              alt="K-LACI Logo"
              style={{ height: '30px', width: 'auto', marginRight: '15px' }}
            />
          </Link>
        </div>

        <div
          style={{
            display: 'flex',
            gap: '50px',
            color: 'white',
          }}
        >
          {/* Navigation  */}
          <nav className="flex items-center">
            {/* Menu Links Container */}
            <div className="flex items-center gap-[50px]">
              {navigationItems.map((item) => {
                const isActive = isActivePage(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="font-poppins text-[0.9375rem] leading-[110%] tracking-[-0.45px]"
                    style={{
                      color: isActive ? 'white' : '#BED3FF',
                      fontWeight: isActive ? 800 : 400,
                      textDecoration: 'none',
                    }}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Login Button */}
          <button
            style={{
              border: '1px solid white',
              borderRadius: '8px',
              color: 'white',
              backgroundColor: 'transparent',
              cursor: 'pointer',
              padding: '10px 25px',
            }}
          >
            {loginButtonName}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
