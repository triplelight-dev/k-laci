import { apiClient } from '../client';
import { ApiResponse } from '../types/api.types';

export interface CreateLogRequest {
  actionType: string;
  userId?: string | null;
  sessionId?: string;
  metadata?: any;
  regionId?: number | null;
}

export interface CreateLogResponse {
  success: boolean;
  logId?: number;
}

export class LogsService {
  static async createLog(data: CreateLogRequest): Promise<ApiResponse<CreateLogResponse>> {
    const response = await apiClient.post('/user-logging', data);
    return response.data;
  }
} 