import { TotalRegionRank } from '@/api/types/stats.types';
import RankingTable from '@/components/ui/RankingTable';
import { useRouter } from 'next/navigation';

interface ProvinceRankingSectionProps {
  data: TotalRegionRank[];
  selectedProvinceId: number;
}

export default function ProvinceRankingSection({ 
  data, 
  selectedProvinceId 
}: ProvinceRankingSectionProps) {
  const router = useRouter();

  const handleRegionClick = (regionId: number) => {
    router.push(`/results/region/${regionId}`);
  };

  return (
    <div style={{ marginBottom: '40px' }}>
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
            선택한 지역에 해당하는 데이터가 없습니다.
          </p>
          <p style={{ fontSize: '14px' }}>
            다른 지역을 선택해보세요.
          </p>
        </div>
      )}
    </div>
  );
} 