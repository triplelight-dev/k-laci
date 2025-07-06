'use client';

import { AuthService } from '@/api/services/auth.service';
import { HeaderAuthButton } from '@/components/atoms/buttons/HeaderAuthButton';
import { ROUTES } from '@/constants/data';
import { useIsLoggedIn, useLogout, useUser } from '@/store';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  const isLoggedIn = useIsLoggedIn();
  const user = useUser();
  const logout = useLogout();

  // 테마 분기를 위한 변수 관리
  const isBlackTheme = pathname === '/' || pathname === '/about';
  
  // 테마별 설정
  const theme = {
    backgroundColor: isBlackTheme ? '#14161D' : '#F4F4F4',
    textColor: isBlackTheme ? '#FFFFFF' : '#1B1C2D',
    logo: isBlackTheme ? '/klaci_logo_white.png' : '/klaci_logo_black.png',
    navigationActiveColor: isBlackTheme ? '#FFFFFF' : '#FFFFFF',
    navigationInactiveColor: isBlackTheme ? '#BED3FF' : '#BED3FF',
  };

  // 현재 페이지 확인 함수
  const isActivePage = (path: string) => {
    return pathname === path;
  };

  // Navigation 메뉴 데이터
  const navigationItems = [
    // {
    //   href: ROUTES.ABOUT,
    //   label: '소개',
    // },
    // {
    //   href: ROUTES.SUMMARY,
    //   label: '주요 결과',
    // },
    {
      href: ROUTES.RESULT,
      label: '지자체 조회',
    },
  ];

  const handleLogout = async () => {
    try {
      // 서버에 로그아웃 요청
      await AuthService.signOut();
    } catch (error) {
      console.warn(
        'Signout API failed, but continuing with local logout:',
        error,
      );
    } finally {
      // 항상 로컬 상태는 초기화
      logout();
    }
  };

  return (
    <header
      style={{
        width: '100%',
        backgroundColor: theme.backgroundColor,
        color: theme.textColor,
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '80%',
          margin: '0 auto',
          padding: '40px 0',
          paddingBottom: '70px',
        }}
      >
        {/* 1. 좌측: 로고 */}
        <div
          style={{
            flex: '0 0 auto',
            display: 'flex',
            justifyContent: 'flex-start',
            minWidth: '200px',
          }}
        >
          <div
            className="font-poppins text-[2.1875rem] leading-[110%] font-bold tracking-[-1.05px]"
            style={{
              display: 'flex',
              gap: '35px',
              color: theme.textColor,
            }}
          >
            <Link href="/">
              <Image
                src={theme.logo}
                alt="K-LACI Logo"
                width={120}
                height={30}
                style={{ height: '30px', width: 'auto', marginRight: '15px' }}
              />
            </Link>
          </div>
        </div>

        {/* 2. 가운데: 페이지 이동 버튼들 */}
        <div
          style={{
            flex: '1',
            display: 'flex',
            justifyContent: 'center',
            padding: '0 20px',
          }}
        >
          <nav className="flex items-center">
            <div className="flex items-center gap-[50px]">
              {navigationItems.map((item) => {
                const isActive = isActivePage(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="font-poppins text-[0.9375rem] leading-[110%] tracking-[-0.45px]"
                    style={{
                      fontSize: '16px',
                      color: isActive ? theme.navigationActiveColor : theme.navigationInactiveColor,
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
        </div>

        {/* 3. 우측: 회원가입/로그인 버튼 그룹 */}
        <div
          style={{
            flex: '0 0 auto',
            display: 'flex',
            justifyContent: 'flex-end',
            minWidth: '200px',
          }}
        >
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            {isLoggedIn ? (
              <>
                {/* 사용자 정보 표시 */}
                <span
                  style={{
                    fontSize: '14px',
                    color: theme.textColor,
                    marginRight: '10px',
                  }}
                >
                  {user?.profile.name}님
                </span>

                {/* 로그아웃 버튼 */}
                <HeaderAuthButton 
                  variant="logout" 
                  onClick={handleLogout}
                  theme={isBlackTheme ? 'dark' : 'light'}
                >
                  로그아웃
                </HeaderAuthButton>
              </>
            ) : (
              <>
                {/* Login Button */}
                <HeaderAuthButton 
                  variant="login" 
                  href="/auth/login"
                  theme={isBlackTheme ? 'dark' : 'light'}
                >
                  로그인
                </HeaderAuthButton>

                {/* Signup Button */}
                <HeaderAuthButton 
                  variant="signup" 
                  href="/auth/signup"
                  theme={isBlackTheme ? 'dark' : 'light'}
                >
                  회원가입
                </HeaderAuthButton>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
