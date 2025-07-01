'use client';

import { AuthService } from '@/api/services/auth.service';
import { useIsLoggedIn, useLogout, useUser } from '@/store';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  const logoSrc = '/klaci_logo_black.png';
  const isLoggedIn = useIsLoggedIn();
  const user = useUser();
  const logout = useLogout();

  // 현재 페이지 확인 함수
  const isActivePage = (path: string) => {
    return pathname === path;
  };

  // Navigation 메뉴 데이터
  const navigationItems = [
    // {
    //   href: '/about',
    //   label: '지역자산역량지수 소개',
    // },
    // {
    //   href: '/summary',
    //   label: '주요 분석 결과',
    // },
    {
      href: '/results',
      label: '지자체별 리포트 조회',
    },
  ];

  const handleLogout = async () => {
    try {
      // 서버에 로그아웃 요청
      await AuthService.signOut();
    } catch (error) {
      console.warn('Signout API failed, but continuing with local logout:', error);
    } finally {
      // 항상 로컬 상태는 초기화
      logout();
    }
  };

  return (
    <header
      style={{
        width: '100%',
        backgroundColor: '#F4F4F4',
        color: '#1B1C2D',
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
            // color: 'white',
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
            // color: 'white',
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

          {/* Auth Buttons */}
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            {isLoggedIn ? (
              <>
                {/* 사용자 정보 표시 */}
                <span
                  style={{
                    fontSize: '14px',
                    color: '#1B1C2D',
                    marginRight: '10px',
                  }}
                >
                  {user?.profile.name}님
                </span>
                
                {/* 로그아웃 버튼 */}
                <button
                  onClick={handleLogout}
                  style={{
                    border: '1px solid #1B1C2D',
                    borderRadius: '8px',
                    color: '#1B1C2D',
                    backgroundColor: 'transparent',
                    cursor: 'pointer',
                    padding: '10px 25px',
                    fontSize: '14px',
                    fontWeight: '500',
                  }}
                >
                  로그아웃
                </button>
              </>
            ) : (
              <>
                {/* Login Button */}
                <Link href="/auth/login">
                  <button
                    style={{
                      border: '1px solid #1B1C2D',
                      borderRadius: '8px',
                      color: '#1B1C2D',
                      backgroundColor: 'transparent',
                      cursor: 'pointer',
                      padding: '10px 25px',
                      fontSize: '14px',
                      fontWeight: '500',
                    }}
                  >
                    로그인
                  </button>
                </Link>

                {/* Signup Button */}
                <Link href="/auth/signup">
                  <button
                    style={{
                      border: '1px solid #1B1C2D',
                      borderRadius: '8px',
                      color: '#1B1C2D',
                      backgroundColor: 'transparent',
                      cursor: 'pointer',
                      padding: '10px 25px',
                      fontSize: '14px',
                      fontWeight: '500',
                    }}
                  >
                    회원가입
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
