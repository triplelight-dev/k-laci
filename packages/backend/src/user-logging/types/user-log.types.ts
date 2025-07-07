export interface UserActionLog {
  id?: number;
  user_id?: string | null;
  action_type: string;
  timestamp: string;
  session_id?: string;
  ip_address?: string;
  user_agent?: string;
  referrer?: string;
  metadata?: any;
  region_id?: number | null;
}

export interface CreateUserLogData {
  actionType: string;
  userId?: string | null;
  sessionId?: string;
  metadata?: any;
  userAgent?: string;
  ipAddress?: string;
  referrer?: string;
  timestamp: string;
  regionId?: number | null;
}
