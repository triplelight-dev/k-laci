import { Injectable, Logger } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';
import { CreateUserLogData, UserActionLog } from './types/user-log.types';

@Injectable()
export class UserLoggingService {
  private readonly logger = new Logger(UserLoggingService.name);

  constructor(private readonly supabaseService: SupabaseService) {}

  async createLog(
    logData: CreateUserLogData,
  ): Promise<{ success: boolean; logId?: number }> {
    try {
      const supabase = this.supabaseService.getClient();

      // DB에 저장할 데이터 형식으로 변환
      const logRecord: Omit<UserActionLog, 'id'> = {
        user_id: logData.userId,
        action_type: logData.actionType,
        timestamp: logData.timestamp,
        session_id: logData.sessionId,
        ip_address: logData.ipAddress,
        user_agent: logData.userAgent,
        referrer: logData.referrer,
        metadata: logData.metadata,
        region_id: logData.regionId,
      };

      // user_action_logs 테이블에 삽입
      const { data, error } = await supabase
        .from('user_action_logs')
        .insert(logRecord)
        .select('id')
        .single();

      if (error) {
        this.logger.error('Failed to create log:', error);
        throw new Error(`Failed to create log: ${error.message}`);
      }

      this.logger.log(`Log created successfully with ID: ${data.id}`);

      return {
        success: true,
        logId: data.id,
      };
    } catch (error) {
      this.logger.error('Error creating log:', error);
      throw error;
    }
  }

  async getLogsByUserId(
    userId: string,
    limit: number = 100,
  ): Promise<UserActionLog[]> {
    try {
      const supabase = this.supabaseService.getClient();

      const { data, error } = await supabase
        .from('user_action_logs')
        .select('*')
        .eq('user_id', userId)
        .order('timestamp', { ascending: false })
        .limit(limit);

      if (error) {
        this.logger.error('Failed to fetch logs:', error);
        throw new Error(`Failed to fetch logs: ${error.message}`);
      }

      return data || [];
    } catch (error) {
      this.logger.error('Error fetching logs:', error);
      throw error;
    }
  }

  async getLogsByActionType(
    actionType: string,
    limit: number = 100,
  ): Promise<UserActionLog[]> {
    try {
      const supabase = this.supabaseService.getClient();

      const { data, error } = await supabase
        .from('user_action_logs')
        .select('*')
        .eq('action_type', actionType)
        .order('timestamp', { ascending: false })
        .limit(limit);

      if (error) {
        this.logger.error('Failed to fetch logs:', error);
        throw new Error(`Failed to fetch logs: ${error.message}`);
      }

      return data || [];
    } catch (error) {
      this.logger.error('Error fetching logs:', error);
      throw error;
    }
  }
}
