import { MegaRegionType, TotalRegionRank } from '@/api/types/stats.types';
import RankingTable from '@/components/ui/RankingTable';
import { useRouter } from 'next/navigation';

interface MegaRegionRankingSectionProps {
  data: TotalRegionRank[];
  selectedType: MegaRegionType;
}

export default function MegaRegionRankingSection({ 
  data, 
  selectedType 
}: MegaRegionRankingSectionProps) {
  const router = useRouter();

  const handleRegionClick = (regionId: number) => {
    router.push(`/results/region/${regionId}`);
  };

  return (
    <div style={{ marginBottom: '80px' }}>
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
            {`${selectedType}에 해당하는 데이터가 없습니다.`}
          </p>
          <p style={{ fontSize: '14px' }}>
            다른 지역을 선택해보세요.
          </p>
        </div>
      )}
    </div>
  );
} 