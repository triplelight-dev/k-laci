'use client';

import { AuthService } from '@/api/services/auth.service';
import { ROUTES } from '@/constants/data';
import { INTERNAL_LINKS } from '@/constants/links';
import { useIsMobile } from '@/hooks';
import { useIsLoggedIn, useLogout, useUser } from '@/store';
import { DARK_MODE_COLORS } from '@/utils/colors';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from '../atoms/buttons/Button';

const Header = ({ isBlackTheme }: { isBlackTheme: boolean }) => {
  const pathname = usePathname();
  const isLoggedIn = useIsLoggedIn();
  const user = useUser();
  const logout = useLogout();
  const isMobile = useIsMobile();

  // 테마별 설정
  const theme = {
    backgroundColor: isBlackTheme ? DARK_MODE_COLORS.background : '#F4F4F4',
    textColor: isBlackTheme ? '#FFFFFF' : '#1B1C2D',
    logo: isBlackTheme ? '/klaci_logo_white.png' : '/klaci_logo_black.png',
    navigationActiveColor: isBlackTheme ? '#FFFFFF' : '#000',
    navigationInactiveColor: isBlackTheme ? '#D9D9E8' : '#1e1e1e',
  };

  // 현재 페이지 확인 함수 (수정)
  const isActivePage = (path: string) => {
    if (path === ROUTES.SUMMARY) {
      // /summary로 시작하는 모든 경로에서 '주요 결과' 활성화
      return pathname.startsWith(`/${INTERNAL_LINKS.SUMMARY.ROOT}`);
    }
    if (path === ROUTES.RESULT) {
      // /results로 시작하는 모든 경로에서 '지자체 조회' 활성화
      return pathname.startsWith(`/${ROUTES.RESULT}`);
    }
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

  /**
   * 주어진 문자열이 '/results/region/숫자' 형태의 URL 경로인지 확인합니다.
   * @param {string} urlPath 검사할 URL 경로 문자열
   * @returns {boolean} URL 형태가 일치하면 true, 아니면 false
   */
  // URL 경로 검사 함수 (이전 답변에서 만든 정규식)
  const isRegionResultUrl = (urlPath: string): boolean => {
    const regex = /^\/results\/region/;
    return regex.test(urlPath);
  };

  const isMyUrl = (urlPath: string): boolean => {
    const regex = /^\/auth\/my/;
    return regex.test(urlPath);
  };

  const currentPath = usePathname();
  const isMatch = isRegionResultUrl(currentPath);
  const isMyMatch = isMyUrl(currentPath);

  return (
    <header
      className="#191B22 lg:bg-white"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: isMobile ? '0px 30px' : '',
        backgroundColor: isBlackTheme ? '#191B22' : theme.backgroundColor,
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
          {isMobile && (isMatch || isMyMatch) && (

            <button
              onClick={() => window.history.back()}
              style={{
                // background: 'white',
                border: '1px solid transparent',
                cursor: 'pointer',
                padding: '0px 12px 0px 0px',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'border-color 0.2s ease',
              }}
            >
              <Image
                src={`/rank_arrow_left.png`}
                alt={`이전화면`}
                width={12}
                height={12}
              />
            </button>
          )}

          {(!isMobile || (isMobile && !isMyMatch)) && (
            <div
              className="font-poppins text-[2.1875rem] leading-[110%] font-bold tracking-[-1.05px]"
              style={{
                display: 'flex',
                gap: '35px',
                color: isMobile ? 'white' : theme.textColor,
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
          )}
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
                    className="hidden lg:flex flex-row font-poppins text-[0.9375rem] leading-[110%] tracking-[-0.45px]"
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

          }}
        >
          <div
            style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            {isLoggedIn ? (
              <>
                <div
                  className="hidden lg:flex flex-row"
                  style={{ gap: '10px', alignItems: 'center' }}>
                  {/* 사용자 정보 표시 */}
                  <Link href={ROUTES.MY}>
                    <span className="hidden lg:flex flex-col"
                      style={{
                        fontSize: '14px',
                        color: theme.textColor,
                        marginRight: '10px',
                      }}
                    >
                      {user?.profile.name}님
                    </span>
                  </Link>

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
                </div>

                {!isMyMatch && (
                  <div
                    className="flex flex-row lg:hidden"
                    style={{ gap: '10px', alignItems: 'center' }}>
                    <Link href={ROUTES.MY}>
                      마이페이지
                    </Link>
                  </div>
                )}
              </>
            ) : (
              <>
                <div
                  className="hidden lg:flex flex-row"
                  style={{ gap: '10px', alignItems: 'center' }}>
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
                </div>

                {(!isMobile || (isMobile && !isMyMatch)) && (
                  <div
                    className="flex flex-row lg:hidden"
                    style={{ gap: '10px', alignItems: 'center' }}>
                    {/* Login Button - 흰색 배경 */}
                    <Link href={ROUTES.LOGIN}>
                      로그인
                    </Link>

                    {/* Signup Button - 투명 배경 흰 보더 + 우측 대각선 아이콘 */}
                    <Link href={ROUTES.SIGNUP}>
                      회원가입
                    </Link>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
