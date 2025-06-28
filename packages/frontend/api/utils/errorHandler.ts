import { ApiError } from '../types/api.types';

export const handleApiError = (error: any): ApiError => {
  if (error.response) {
    // 서버에서 응답이 왔지만 에러 상태인 경우
    return {
      message: error.response.data?.message || '서버 오류가 발생했습니다.',
      status: error.response.status,
      code: error.response.data?.code,
    };
  } else if (error.request) {
    // 요청은 보냈지만 응답을 받지 못한 경우
    return {
      message: '서버에 연결할 수 없습니다.',
      status: 0,
    };
  } else {
    // 요청 자체를 보내지 못한 경우
    return {
      message: error.message || '알 수 없는 오류가 발생했습니다.',
      status: 0,
    };
  }
};

export const isNetworkError = (error: ApiError): boolean => {
  return error.status === 0;
};

export const isServerError = (error: ApiError): boolean => {
  return error.status >= 500;
};

export const isClientError = (error: ApiError): boolean => {
  return error.status >= 400 && error.status < 500;
}; 