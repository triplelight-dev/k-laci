import { PROVINCE_FULL_NAMES } from '@/constants/region';
import { useDistrict } from '@/store';
import Image from 'next/image';
import { useEffect, useMemo, useRef } from 'react';

const StickyHeader = () => {
    const { selectedRegion } = useDistrict();

    // 이전 selectedRegion 값을 유지하기 위한 ref
    const previousRegionRef = useRef(selectedRegion);

    // selectedRegion이 변경될 때 이전 값 업데이트
    useEffect(() => {
        if (selectedRegion) {
            previousRegionRef.current = selectedRegion;
        }
    }, [selectedRegion]);

    // 현재 region 또는 이전 region 사용 (새 데이터 로딩 중 기존 데이터 유지)
    const currentRegion = selectedRegion || previousRegionRef.current;

    // 안전한 지역명 생성 함수
    const getDistrictName = (): string => {
        if (currentRegion?.province && currentRegion?.name) {
            const fullName =
                PROVINCE_FULL_NAMES[currentRegion.province.id] ||
                currentRegion.province.name;
            // 세종특별자치시인 경우 fullName만 반환
            if (currentRegion.province.name === '세종') {
                return fullName;
            }

            return `${fullName} ${currentRegion.name}`;
        }
        // currentRegion이 없거나 유효하지 않은 경우 기본값 반환
        return '';
    };

    // 기본값 설정
    const rank = useMemo(() => {
        return currentRegion?.total_rank || 3;
    }, [currentRegion]);
    const rankText = `종합순위 ${rank}위`;

    const handleShare = async () => {

        const data = {
            title: document.title, // 제목이 없으면 현재 문서 제목 사용
            text: '',
            url: window.location.href, // URL이 없으면 현재 페이지 URL 사용
        };

        // 1. Web Share API 지원
        try {
            await navigator.share(data);
        } catch (error) {
            // 사용자가 공유를 취소하거나 오류 발생 시
        }
    };

    return (
        <header
            style={{
                position: 'fixed',
                top: 0,            // 👈 핵심: 상단 0px에 고정
                zIndex: 50,        // 다른 요소 위에 표시되도록 Z-Index 설정
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                padding: '0px 30px',
                backgroundColor: '#F4F4F4',
                color: '#FFFFFF',
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
                        flex: '0 1 auto',
                        display: 'flex',
                        justifyContent: 'flex-start',
                    }}
                >

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
                            src={`/icons/mobile_header_back.png`}
                            alt={`이전화면`}
                            width={24}
                            height={24}
                        />
                    </button>

                </div>

                {/* 2. 가운데: 페이지 이동 버튼들 */}
                <div
                    style={{
                        flex: '1 1 auto',
                        display: 'flex',
                        justifyContent: 'center',
                        color: '#000000'
                    }}
                >
                    <nav className="flex items-center">
                        <div className="flex flex-col items-center">
                            <div
                                style={{
                                    color: '#000000'
                                }}>{rankText}</div>
                            <div className="text-3xl"
                                style={{
                                    color: '#000000',
                                    fontSize: '24px'
                                }}>{getDistrictName()}</div>
                        </div>
                    </nav>
                </div>

                {/* 3. 우측: 회원가입/로그인 버튼 그룹 */}
                <div
                    style={{
                        flex: '0 1 auto',
                        display: 'flex',
                        justifyContent: 'flex-end',

                    }}
                >
                    <div
                        style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>

                        <button
                            onClick={handleShare}
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
                                src={`/icons/mobile_header_share.png`}
                                alt={`이전화면`}
                                width={24}
                                height={24}
                            />
                        </button>

                    </div>
                </div>
            </div>
        </header>
    );
};

export default StickyHeader;