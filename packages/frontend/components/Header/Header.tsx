'use client';

import { AuthService } from '@/api/services/auth.service';
import { HeaderAuthButton } from '@/components/atoms/buttons/HeaderAuthButton';
import { ROUTES } from '@/constants/data';
import { useIsLoggedIn, useLogout, useUser } from '@/store';
import { DARK_MODE_COLORS } from '@/utils/colors';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from '../atoms/buttons/Button';

const Header = () => {
  const pathname = usePathname();
  const isLoggedIn = useIsLoggedIn();
  const user = useUser();
  const logout = useLogout();

  // 테마 분기를 위한 변수 관리
  const isBlackTheme = pathname === '/' || pathname === '/about' || pathname === '/summary';

  // 테마별 설정
  const theme = {
    backgroundColor: isBlackTheme ? DARK_MODE_COLORS.background : '#F4F4F4',
    textColor: isBlackTheme ? '#FFFFFF' : '#1B1C2D',
    logo: isBlackTheme
      ? '/klaci_logo_white.png'
      : '/klaci_logo_black.png',
    navigationActiveColor: isBlackTheme ? '#FFFFFF' : '#000',
    navigationInactiveColor: isBlackTheme ? '#BED3FF' : '#000',
  };

  // 현재 페이지 확인 함수
  const isActivePage = (path: string) => {
    return pathname === path;
  };

  // Navigation 메뉴 데이터
  const navigationItems = [
    {
      href: ROUTES.ABOUT,
      label: '소개',
    },
    {
      href: ROUTES.SUMMARY,
      label: '주요 결과',
    },
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
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        backgroundColor: theme.backgroundColor,
        color: theme.textColor,
        height: '100px',
        maxWidth: '1400px',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
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
              <img
                src={theme.logo}
                alt="K-LACI Logo"
                style={{
                  height: '26px',
                  width: 'auto',
                  marginRight: '15px',
                  cursor: 'pointer',
                }}
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
                      fontSize: '18px',
                      color: isActive
                        ? theme.navigationActiveColor
                        : theme.navigationInactiveColor,
                      fontWeight: isActive ? 700 : 400,
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
                <Button
                  fontSize="14px"
                  fontWeight="500"
                  label="로그아웃"
                  padding="10px 30px"
                  onClick={handleLogout}
                  theme={isBlackTheme ? 'dark' : 'light'}
                >
                  로그아웃
                </Button>
              </>
            ) : (
              <>
                {/* Login Button - 흰색 배경 */}
                <Link href={ROUTES.LOGIN}>
                  <Button
                    variant="primary"
                    label="로그인"
                    padding="10px 30px"
                    fontSize="14px"
                    fontWeight="500"
                    theme={isBlackTheme ? 'dark' : 'light'}
                  />
                </Link>


                {/* Signup Button - 투명 배경 흰 보더 + 우측 대각선 아이콘 */}
                <Link href={ROUTES.SIGNUP}>
                  <Button
                    variant="secondary"
                    label="회원가입"
                    padding="10px 30px"
                    fontSize="14px"
                    fontWeight="500"
                    theme={isBlackTheme ? 'dark' : 'light'}
                  />
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
