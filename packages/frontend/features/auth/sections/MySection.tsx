import { AuthService } from '@/api/services/auth.service';
import Modal from '@/components/ui/Modal';
import { useIsLoggedIn, useLogout, useUser } from '@/store';

import Button from '@/components/atoms/buttons/Button';
import { ROUTES } from '@/constants/data';
import Link from 'next/link';
import { useState } from 'react';
import provinceData from '../../../data/province_data.json';
import regionsData from '../../../data/regions_data.json';

interface MySectionProps {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  isLoading: boolean;
  onSubmit: (e: React.FormEvent) => void;
  error: string;
}

export default function MySection({
  email,
  setEmail,
  password,
  setPassword,
  isLoading,
  onSubmit,
  error,
}: MySectionProps) {
  const user = useUser();
  const isLoggedIn = useIsLoggedIn();

  const [modalStatus, setModalStatus] = useState(false);

  const onHandleModalStatus = () => {
    setModalStatus(!modalStatus);
  };
  const logout = useLogout();

  // 지역명으로부터 Province와 Region 객체 찾기
  const findProvinceAndRegionByRegion = (id: number) => {

    if (id !== undefined) {
      return null;
    }

    const region = regionsData.find(
      (r) => r.id === id,
    );
    if (!region) return '없음';

    return region.name;
  };

  const findProvinceAndRegionByProvince = (id: number) => {

    if (id !== undefined) {
      return null;
    }

    const region = regionsData.find(
      (r) => r.id === id,
    );
    if (!region) return '없음';

    const province = provinceData.find((p) => p.id === region?.province_id);
    if (!province) return '없음';

    return province.name;
  };

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
    <div
      style={{
        width: '100%',
        height: 'calc(100vh - 100px)',
        minHeight: '800px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F4F4F4',
      }}
    >
      <div style={{ width: '100%', maxWidth: '800px', margin: '0 1rem' }}>


        {isLoggedIn ? (
          <>
            {/* 이름 컨테이너 */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                borderRadius: '50px',
                padding: '0px 20px',
              }}
            >
              <div
                style={{
                  padding: '4px 8px',
                  backgroundColor: 'transparent',
                  fontSize: '38px',
                  color: '#000000',
                }}
              >
                {user?.profile.name}님
              </div>

              <div
                style={{
                  borderRadius: '9px',
                  border: '1.5px solid #000',
                  padding: '4px 10px',
                  fontSize: '1rem',
                  fontWeight: '500',
                  lineHeight: '24px',
                  width: 'fit-content',
                }}
              >
                {user?.profile.organization}
              </div>
            </div>

            {/* 관심지역 컨테이너 */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                borderRadius: '50px',
                padding: '0px 20px',
              }}
            >
              <div
                style={{
                  padding: '4px 8px',
                  backgroundColor: 'transparent',
                  fontSize: '18px',
                  color: '#000000',
                }}
              >
                관심 지역
              </div>

              <div
                style={{
                  padding: '4px 8px',
                  backgroundColor: 'transparent',
                  fontSize: '18px',
                  color: '#000000',
                }}
              >
                {findProvinceAndRegionByProvince(user?.profile.interest_region_id ?? 0)} {findProvinceAndRegionByRegion(user?.profile.interest_region_id ?? 0)}
              </div>

            </div>
          </>
        ) : (
          <>
            <Link href={ROUTES.LOGIN}>
              <div
                style={{
                  padding: '4px 8px',
                  backgroundColor: 'transparent',
                  fontSize: '36px',
                  color: '#000000',
                }}
              >
                로그인/회원가입
              </div>
            </Link>

            <div
              style={{
                padding: '4px 8px',
                backgroundColor: 'transparent',
                fontSize: '18px',
                color: '#000000',
              }}
            >
              우리지자체의 잠재역량을 데이터로 확인해보세요.
            </div>
          </>
        )}

        {/* 문의 하실 내용 */}
        <div style={{ padding: '12px 50px', margin: '20px' }}>
          <h1
            style={{
              fontSize: '16px',
              fontWeight: '600',
              color: '#000000',
              background: '#FFFFFF',
              padding: '20px'
            }}
          >
            문의하실 내용이 있나요?
            하단 경로를 통해 문의 해 주시면 빠르게 답변을 받아 보실 수 있습니다.
            이메일 : impact@triplelight.co
          </h1>
        </div>

        {/* 웹사이트 설명 */}
        <div
          style={{
            width: '100%',
            maxWidth: '1060px',
            margin: '0 auto',
            borderRadius: '26px',
            marginTop: '33px',
            fontSize: '14px',
            fontWeight: '500',
            lineHeight: '24px',
            color: '#9A9EA3',
            textAlign: 'center',
            padding: '8px 0',
            backgroundColor: '#EDEDED',
          }}
        >
          자세한 서비스 소개는 PC버전 웹사이트(klaci.kr)에서 확인하실 수 있습니다.
        </div>

        {isLoggedIn && (
          <>
            {/* 로그아웃 */}
            <div
              style={{
                textAlign: 'center',
                marginTop: '10px',
              }}
            >
              <a
                href="#"
                style={{
                  fontSize: '18px',
                  color: '#000000',
                  textDecoration: 'underline',
                  textDecorationColor: '#000000',
                  textDecorationThickness: '1px',
                }}
                onClick={onHandleModalStatus}
              >
                로그아웃
              </a>


              {modalStatus && (
                <Modal title="로그아웃 하시겠습니까?" setModal={onHandleModalStatus}>
                  <div
                    className="flex flex-row gap-5">

                    <Button
                      variant="secondary"
                      label="닫기"
                      padding="10px 30px"
                      fontSize="14px"
                      fontWeight="500"
                      theme='light'
                      onClick={onHandleModalStatus}
                    >닫기</Button>

                    <Button
                      variant="secondary"
                      label="로그아웃"
                      padding="10px 30px"
                      fontSize="14px"
                      fontWeight="500"
                      theme='light'
                      onClick={handleLogout}
                    >로그아웃</Button>

                  </div>
                </Modal>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
