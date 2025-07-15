import SummaryLayout from '@/components/layout/SummaryLayout';
import React from 'react';
import { ErrorMessage, LoadingSpinner } from './index';

interface DataStateWrapperProps {
  isLoading: boolean;
  error: any;
  children: React.ReactNode;
  layout?: 'summary' | 'none';
  loadingMessage?: string;
  errorMessage?: string;
  onRetry?: () => void;
  isBlackTheme?: boolean;
}

export default function DataStateWrapper({
  isLoading,
  error,
  children,
  layout = 'summary',
  loadingMessage = '데이터를 불러오는 중...',
  errorMessage = '데이터를 불러오는 중 오류가 발생했습니다.',
  onRetry,
  isBlackTheme = false
}: DataStateWrapperProps) {

  const renderContent = (content: React.ReactNode) => {
    if (layout === 'summary') {
      return (
        <SummaryLayout isBlackTheme={isBlackTheme}>
          {content}
        </SummaryLayout>
      );
    }
    return content;
  };

  if (isLoading) {
    return renderContent(
      <LoadingSpinner message={loadingMessage} />
    );
  }

  if (error) {
    // onRetry가 있을 때만 전달, undefined일 때는 props에 포함하지 않음
    const errorProps = {
      message: errorMessage,
      showRetryButton: !!onRetry,
      ...(onRetry && { onRetry }) // onRetry가 있을 때만 props에 추가
    };

    return renderContent(
      <ErrorMessage {...errorProps} />
    );
  }

  return renderContent(children);
} 