// JWT 토큰 디코드 유틸리티
export const decodeJWT = (token: string): any => {
  try {
    // JWT 토큰의 payload 부분만 추출 (두 번째 부분)
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
    return JSON.parse(jsonPayload);
  } catch (error) {
    console.error('Failed to decode JWT token:', error);
    return null;
  }
};

// 토큰에서 userId 추출
export const getUserIdFromToken = (): string | null => {
  try {
    if (typeof window === 'undefined') return null;
    
    const token = localStorage.getItem('access_token');
    if (!token) return null;
    
    const decoded = decodeJWT(token);
    return decoded?.sub || decoded?.userId || null;
  } catch (error) {
    console.error('Failed to get userId from token:', error);
    return null;
  }
};

// 토큰 유효성 검사
export const isTokenValid = (): boolean => {
  try {
    if (typeof window === 'undefined') return false;
    
    const token = localStorage.getItem('access_token');
    if (!token) return false;
    
    const decoded = decodeJWT(token);
    if (!decoded) return false;
    
    // exp (만료시간) 확인
    const currentTime = Math.floor(Date.now() / 1000);
    return decoded.exp > currentTime;
  } catch (error) {
    console.error('Failed to validate token:', error);
    return false;
  }
}; 