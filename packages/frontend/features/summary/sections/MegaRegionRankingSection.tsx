import { MegaRegionType, TotalRegionRank } from '@/api/types/stats.types';
import RankingTable from '@/components/ui/RankingTable';
import { useRouter } from 'next/navigation';

interface MegaRegionRankingSectionProps {
  data: TotalRegionRank[];
  selectedType: MegaRegionType | null;
}

export default function MegaRegionRankingSection({ 
  data, 
  selectedType 
}: MegaRegionRankingSectionProps) {
  const router = useRouter();

  const handleRegionClick = (regionId: number) => {
    router.push(`/results/region/${regionId}`);
  };

  const getTitle = () => {
    if (selectedType) {
      return `${selectedType} 종합순위`;
    }
    return '메가 지역 종합순위';
  };

  const getDescription = () => {
    const count = data.length;
    if (selectedType) {
      return `${selectedType} 지역에 속한 ${count}개 지자체의 종합순위입니다.`;
    }
    return `전국 메가 지역에 속한 ${count}개 지자체의 종합순위입니다.`;
  };

  return (
    <div style={{ marginTop: '40px' }}>
      {/* 제목 및 설명 */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{
          fontSize: '32px',
          fontWeight: 'bold',
          marginBottom: '12px',
          color: '#1f2937'
        }}>
          {getTitle()}
        </h1>
        <p style={{
          fontSize: '16px',
          color: '#6b7280',
          marginBottom: '8px'
        }}>
          {getDescription()}
        </p>
        <p style={{
          fontSize: '14px',
          color: '#9ca3af'
        }}>
          종합 점수와 강점 지표를 한눈에 확인하세요
        </p>
      </div>

      {/* 랭킹 테이블 */}
      {data.length > 0 ? (
        <RankingTable 
          data={data} 
          onRegionClick={handleRegionClick}
        />
      ) : (
        <div style={{
          textAlign: 'center',
          padding: '60px 0',
          color: '#6b7280'
        }}>
          <p style={{ fontSize: '18px', marginBottom: '8px' }}>
            {selectedType ? `${selectedType}에 해당하는 데이터가 없습니다.` : '표시할 데이터가 없습니다.'}
          </p>
          <p style={{ fontSize: '14px' }}>
            다른 지역을 선택해보세요.
          </p>
        </div>
      )}
    </div>
  );
} 