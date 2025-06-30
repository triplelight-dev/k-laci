export interface ValidationResult {
  isValid: boolean;
  message: string;
}

export const validateName = (name: string): ValidationResult => {
  if (!name.trim()) {
    return { isValid: false, message: '이름을 입력해주세요.' };
  }
  if (name.length > 10) {
    return { isValid: false, message: '이름은 10자 이하로 입력해주세요.' };
  }
  if (!/^[가-힣a-zA-Z\s]+$/.test(name)) {
    return { isValid: false, message: '한글 또는 영어만 입력 가능합니다.' };
  }
  return { isValid: true, message: '' };
};

export const validatePassword = (password: string): ValidationResult => {
  if (!password) {
    return { isValid: false, message: '비밀번호를 입력해주세요.' };
  }
  if (password.length < 8) {
    return { isValid: false, message: '비밀번호는 8자 이상이어야 합니다.' };
  }
  if (password.length > 20) {
    return { isValid: false, message: '비밀번호는 20자 이하로 입력해주세요.' };
  }
  if (!/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(password)) {
    return { isValid: false, message: '영어, 숫자, 특수문자를 모두 포함해야 합니다.' };
  }
  return { isValid: true, message: '' };
};

export const validateConfirmPassword = (confirmPassword: string, password: string): ValidationResult => {
  if (!confirmPassword) {
    return { isValid: false, message: '비밀번호 확인을 입력해주세요.' };
  }
  if (confirmPassword !== password) {
    return { isValid: false, message: '비밀번호가 일치하지 않습니다.' };
  }
  return { isValid: true, message: '' };
};

export const validateOrganization = (organization: string): ValidationResult => {
  if (!organization.trim()) {
    return { isValid: false, message: '소속을 입력해주세요.' };
  }
  if (organization.length > 10) {
    return { isValid: false, message: '소속은 10자 이하로 입력해주세요.' };
  }
  if (!/^[가-힣a-zA-Z\s]+$/.test(organization)) {
    return { isValid: false, message: '한글 또는 영어만 입력 가능합니다.' };
  }
  return { isValid: true, message: '' };
};

export const validatePhoneNumber = (phoneNumber: string): ValidationResult => {
  if (!phoneNumber.trim()) {
    return { isValid: false, message: '휴대폰 번호를 입력해주세요.' };
  }
  if (!/^[0-9]+$/.test(phoneNumber)) {
    return { isValid: false, message: '숫자만 입력 가능합니다.' };
  }
  if (phoneNumber.length < 10) {
    return { isValid: false, message: '올바른 휴대폰 번호를 입력해주세요.' };
  }
  if (phoneNumber.length > 11) {
    return { isValid: false, message: '휴대폰 번호는 11자 이하로 입력해주세요.' };
  }
  return { isValid: true, message: '' };
};

// 동의 항목 검증
export const validateAgreements = (agreements: {
  agreeToAge: boolean;
  agreeToTerms: boolean;
  agreeToPrivacy: boolean;
}): ValidationResult => {
  if (!agreements.agreeToAge) {
    return { isValid: false, message: '만 14세 이상 동의가 필요합니다.' };
  }
  if (!agreements.agreeToTerms) {
    return { isValid: false, message: '서비스 이용약관 동의가 필요합니다.' };
  }
  if (!agreements.agreeToPrivacy) {
    return { isValid: false, message: '개인정보 수집 및 이용 동의가 필요합니다.' };
  }
  return { isValid: true, message: '' };
};

// 전체 폼 검증 함수
export const validateSignupForm = (formData: {
  name: string;
  password: string;
  confirmPassword: string;
  organization: string;
  phoneNumber: string;
  agreeToAge: boolean;
  agreeToTerms: boolean;
  agreeToPrivacy: boolean;
}) => {
  const nameValidation = validateName(formData.name);
  const passwordValidation = validatePassword(formData.password);
  const confirmPasswordValidation = validateConfirmPassword(formData.confirmPassword, formData.password);
  const organizationValidation = validateOrganization(formData.organization);
  const phoneNumberValidation = validatePhoneNumber(formData.phoneNumber);
  const agreementsValidation = validateAgreements({
    agreeToAge: formData.agreeToAge,
    agreeToTerms: formData.agreeToTerms,
    agreeToPrivacy: formData.agreeToPrivacy,
  });

  return {
    name: nameValidation.message,
    password: passwordValidation.message,
    confirmPassword: confirmPasswordValidation.message,
    organization: organizationValidation.message,
    phoneNumber: phoneNumberValidation.message,
    agreements: agreementsValidation.message,
    isValid: nameValidation.isValid && 
             passwordValidation.isValid && 
             confirmPasswordValidation.isValid && 
             organizationValidation.isValid && 
             phoneNumberValidation.isValid &&
             agreementsValidation.isValid
  };
}; 