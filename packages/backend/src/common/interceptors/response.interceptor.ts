import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * Standard API response format for all endpoints
 * @template T - The type of data being returned
 */
export interface ApiResponse<T> {
  /** Whether the request was successful */
  success: boolean;
  /** The actual data payload */
  data: T;
  /** Optional message for additional context */
  message?: string | null;
  /** Optional error code for error cases */
  errorCode?: string | null;
}

/**
 * Global response interceptor that transforms all responses into a standard format
 * @template T - The type of data being returned
 */
@Injectable()
export class ResponseInterceptor<T>
  implements NestInterceptor<T, ApiResponse<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<ApiResponse<T>> {
    return next.handle().pipe(
      map((data) => ({
        success: true,
        data,
        message: null,
        errorCode: null,
      })),
    );
  }
}
