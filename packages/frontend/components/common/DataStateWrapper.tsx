import SummaryLayout from '@/components/layout/SummaryLayout';
import ErrorMessage from './ErrorMessage';
import LoadingSpinner from './LoadingSpinner';

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
  loadingMessage,
  errorMessage,
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
    return renderContent(
      <ErrorMessage 
        message={errorMessage} 
        onRetry={onRetry}
      />
    );
  }

  return <>{children}</>;
} 