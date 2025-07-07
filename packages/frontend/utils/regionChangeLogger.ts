import { LogsService } from '@/api/services/logs.service';

// debounce 함수
function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

// 지역 변경 로그 인터페이스
interface RegionChangeLogData {
  previousRegionId?: number | null;
  newRegionId: number;
  source: 'district_select' | 'search_autocomplete' | 'navigation_buttons' | 'url_change' | 'system';
  metadata?: any;
}

// 지역 변경 로깅 함수 (debounce 적용)
const debouncedLogRegionChange = debounce(async (logData: RegionChangeLogData) => {
  try {
    await LogsService.createLog({
      actionType: 'REGION_CHANGE',
      userId: logData.metadata?.userId || null,
      metadata: {
        ...logData,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        referrer: document.referrer,
      },
      regionId: logData.newRegionId,
    });
  } catch (error) {
    console.error('Failed to log region change:', error);
  }
}, 500); // 500ms debounce

// 지역 변경 로깅 함수 export
export const logRegionChange = (logData: RegionChangeLogData) => {
  debouncedLogRegionChange(logData);
}; 