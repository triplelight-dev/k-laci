/**
 * 한국어 조사를 적절하게 처리하는 유틸 함수들
 */

/**
 * 받침이 있는지 확인하는 함수
 * @param char 한 글자
 * @returns 받침 여부
 */
const hasBatchim = (char: string): boolean => {
  const code = char.charCodeAt(0);
  return (code - 44032) % 28 !== 0;
};

/**
 * 문자열의 마지막 글자에 받침이 있는지 확인하는 함수
 * @param str 문자열
 * @returns 받침 여부
 */
const hasFinalBatchim = (str: string): boolean => {
  if (!str || str.length === 0) return false;
  const lastChar = str.charAt(str.length - 1);
  return hasBatchim(lastChar);
};

/**
 * 조사를 적절하게 선택하는 함수
 * @param word 조사를 붙일 단어
 * @param withBatchim 받침이 있을 때 사용할 조사
 * @param withoutBatchim 받침이 없을 때 사용할 조사
 * @returns 적절한 조사
 */
export const getKoreanParticle = (
  word: string,
  withBatchim: string,
  withoutBatchim: string
): string => {
  return hasFinalBatchim(word) ? withBatchim : withoutBatchim;
};

/**
 * '와/과' 조사를 적절하게 선택하는 함수
 * @param word 조사를 붙일 단어
 * @returns '와' 또는 '과'
 */
export const getWaOrGwa = (word: string): string => {
  return getKoreanParticle(word, '과', '와');
};

/**
 * '은/는' 조사를 적절하게 선택하는 함수
 * @param word 조사를 붙일 단어
 * @returns '은' 또는 '는'
 */
export const getEunOrEun = (word: string): string => {
  return getKoreanParticle(word, '은', '는');
};

/**
 * '이/가' 조사를 적절하게 선택하는 함수
 * @param word 조사를 붙일 단어
 * @returns '이' 또는 '가'
 */
export const getIOrGa = (word: string): string => {
  return getKoreanParticle(word, '이', '가');
};

/**
 * '을/를' 조사를 적절하게 선택하는 함수
 * @param word 조사를 붙일 단어
 * @returns '을' 또는 '를'
 */
export const getEulOrEul = (word: string): string => {
  return getKoreanParticle(word, '을', '를');
};

/**
 * '의' 조사를 붙이는 함수 (받침과 관계없이 항상 '의' 사용)
 * @param word 조사를 붙일 단어
 * @returns '의'가 붙은 문자열
 */
export const addEui = (word: string): string => {
  return `${word}의`;
};

/**
 * '와/과' 조사를 붙이는 함수
 * @param word 조사를 붙일 단어
 * @returns 조사가 붙은 문자열
 */
export const addWaOrGwa = (word: string): string => {
  return `${word}${getWaOrGwa(word)}`;
};

/**
 * '은/는' 조사를 붙이는 함수
 * @param word 조사를 붙일 단어
 * @returns 조사가 붙은 문자열
 */
export const addEunOrEun = (word: string): string => {
  return `${word}${getEunOrEun(word)}`;
};

/**
 * '이/가' 조사를 붙이는 함수
 * @param word 조사를 붙일 단어
 * @returns 조사가 붙은 문자열
 */
export const addIOrGa = (word: string): string => {
  return `${word}${getIOrGa(word)}`;
};

/**
 * '을/를' 조사를 붙이는 함수
 * @param word 조사를 붙일 단어
 * @returns 조사가 붙은 문자열
 */
export const addEulOrEul = (word: string): string => {
  return `${word}${getEulOrEul(word)}`;
}; 