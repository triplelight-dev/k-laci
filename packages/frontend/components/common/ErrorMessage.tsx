interface ErrorMessageProps {
  message?: string;
  onRetry?: () => void;
  showRetryButton?: boolean;
}

export default function ErrorMessage({ 
  message = '데이터를 불러오는 중 오류가 발생했습니다.',
  onRetry = () => window.location.reload(),
  showRetryButton = true
}: ErrorMessageProps) {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <p className="mb-4 text-red-600">{message}</p>
        {showRetryButton && (
          <button
            onClick={onRetry}
            className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition-colors"
          >
            다시 시도
          </button>
        )}
      </div>
    </div>
  );
} 