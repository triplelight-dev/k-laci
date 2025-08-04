import { AuthService } from '@/api/services/auth.service';
import { UserType } from '@/api/types/user.types';
import { getUserTypeFromEmail } from '@/utils/userTypeUtils';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export interface SignupFormData {
  name: string;
  password: string;
  confirmPassword: string;
  organization: string;
  phoneNumber: string;
  regionId: string;
  agreeToAge: boolean;
  agreeToTerms: boolean;
  agreeToPrivacy: boolean;
  agreeToMarketing: boolean;
  agreeToReportReservation: boolean;
}

export const useSignupFlow = () => {
  const router = useRouter();

  // 1/2 단계 상태
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [error, setError] = useState('');
  const [verificationError, setVerificationError] = useState('');
  const [countdown, setCountdown] = useState(0);

  // 2/2 단계 상태
  const [isVerified, setIsVerified] = useState(false);
  const [isProfileLoading, setIsProfileLoading] = useState(false);
  const [showCompleteModal, setShowCompleteModal] = useState(false);
  const [userType, setUserType] = useState<UserType>('GENERAL');
  const [formData, setFormData] = useState<SignupFormData>({
    name: '',
    password: '',
    confirmPassword: '',
    organization: '',
    phoneNumber: '',
    regionId: '',
    agreeToAge: false,
    agreeToTerms: false,
    agreeToPrivacy: false,
    agreeToMarketing: false,
    agreeToReportReservation: false,
  });

  // 카운트다운 타이머 (3분으로 유지)
  const startCountdown = () => {
    setCountdown(180); // 3분 (180초)
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  // 인증번호 발송
  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setVerificationError('');

    try {
      await AuthService.sendVerificationCode({ email });
      setIsCodeSent(true);
      startCountdown();
    } catch (err: any) {
      const errorMessage =
        err.response?.data?.message || '인증번호 발송 중 오류가 발생했습니다.';

      // "이미 가입된 이메일입니다" 에러 특별 처리
      if (errorMessage === '이미 가입된 이메일입니다.') {
        setError(
          '입력하신 정보로는 신규 회원가입이 불가능합니다. 다른 이메일 주소를 입력해주세요.',
        );
      } else {
        setError(errorMessage);
      }
    } finally {
      setIsLoading(false);
    }
  };

  // 인증번호 검증
  const handleCodeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsVerifying(true);
    setVerificationError('');

    try {
      const response = await AuthService.verifyCode({
        email,
        code: verificationCode,
      });
      // 인증 성공 - 2/2 단계로 전환
      if (response.data.verified) {
        setIsVerified(response.data.verified);
        // 이메일 도메인에 따른 사용자 타입 설정
        const userTypeFromEmail = getUserTypeFromEmail(email);
        setUserType(userTypeFromEmail);
      } else {
        setVerificationError('인증번호가 일치하지 않습니다.');
      }
    } catch (err: any) {
      setVerificationError(
        err.response?.data?.message || '인증번호 검증 중 오류가 발생했습니다.',
      );
    } finally {
      setIsVerifying(false);
    }
  };

  // 인증번호 재발송
  const handleResendCode = async () => {
    setIsLoading(true);
    setError('');
    setVerificationError('');

    try {
      await AuthService.sendVerificationCode({ email });
      startCountdown();
    } catch (err: any) {
      const errorMessage =
        err.response?.data?.message ||
        '인증번호 재발송 중 오류가 발생했습니다.';

      // "이미 가입된 이메일입니다" 에러 특별 처리
      if (errorMessage === '이미 가입된 이메일입니다.') {
        setError(
          '입력하신 정보로는 신규 회원가입이 불가능합니다. 다른 이메일 주소를 입력해주세요.',
        );

        // 상태 업데이트가 완료된 후 3초 대기
        // setTimeout(() => {
        //   router.push('/');
        // }, 3000);
      } else {
        setError(errorMessage);
      }
    } finally {
      setIsLoading(false);
    }
  };

  // 회원가입 완료
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProfileLoading(true);
    setError('');

    try {
      const signupData = {
        email: email,
        password: formData.password,
        name: formData.name,
        phone_number: formData.phoneNumber,
        interest_region_id: formData.regionId
          ? Number(formData.regionId)
          : null,
        organization: formData.organization,
        user_type: userType,
        agree_to_age: formData.agreeToAge,
        agree_to_terms: formData.agreeToTerms,
        agree_to_privacy: formData.agreeToPrivacy,
        agree_to_marketing: formData.agreeToMarketing,
        agree_to_report_reservation: formData.agreeToReportReservation,
      };

      await AuthService.signUp(signupData);

      setShowCompleteModal(true);
    } catch (err: any) {
      console.error('Signup error:', err);
      setError(
        err.response?.data?.message || '회원가입 중 오류가 발생했습니다.',
      );
    } finally {
      setIsProfileLoading(false);
    }
  };

  const handleStart = () => {
    setShowCompleteModal(false);
    router.push('/');
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return {
    // State
    email,
    setEmail,
    verificationCode,
    setVerificationCode,
    isLoading,
    isVerifying,
    isCodeSent,
    error,
    verificationError,
    countdown,
    isVerified,
    isProfileLoading,
    showCompleteModal,
    userType,
    formData,
    setFormData,

    // Handlers
    handleEmailSubmit,
    handleCodeSubmit,
    handleResendCode,
    handleSubmit,
    handleStart,
    formatTime,
  };
};
