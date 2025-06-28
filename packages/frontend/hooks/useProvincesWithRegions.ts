import { DataService, ProvinceWithRegions } from '@/api/services';
import { useEffect, useState } from 'react';

interface UseProvincesWithRegionsReturn {
  provincesWithRegions: ProvinceWithRegions[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export const useProvincesWithRegions = (): UseProvincesWithRegionsReturn => {
  const [provincesWithRegions, setProvincesWithRegions] = useState<ProvinceWithRegions[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await DataService.getProvincesWithRegions();
      setProvincesWithRegions(response.data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch provinces with regions');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    provincesWithRegions,
    loading,
    error,
    refetch: fetchData,
  };
}; 