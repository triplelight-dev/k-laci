interface LoadingSpinnerProps {
  message?: string;
  size?: 'small' | 'medium' | 'large';
}

export default function LoadingSpinner({ 
  message = '데이터를 불러오는 중...', 
  size = 'medium' 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    small: 'h-8 w-8',
    medium: 'h-12 w-12',
    large: 'h-16 w-16'
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <div className={`mx-auto mb-4 ${sizeClasses[size]} animate-spin rounded-full border-b-2 border-blue-600`}></div>
        <p className="text-gray-600">{message}</p>
      </div>
    </div>
  );
} 