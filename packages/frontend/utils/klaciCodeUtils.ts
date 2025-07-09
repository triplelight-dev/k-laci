// KLACI 코드 색상 매핑 (대문자 기준)
export const getKlaciCodeColor = (code: string): string => {
  const codeColorMapping: Record<string, string> = {
    G: '#FF3737',  // 빨간색
    T: '#FFA602',  // 주황색  
    V: '#9E74FC',  // 보라색
    R: '#2DC149',  // 초록색
  };

  return codeColorMapping[code.toUpperCase()] || '#D9D9E8';
};

// KLACI 코드를 개별 문자로 분리하고 색상 매핑
export const parseKlaciCode = (klaciCode: string) => {
  return klaciCode.split('').map((code) => ({
    code, // 원본 코드 그대로 표시 (소문자면 소문자로)
    color: getKlaciCodeColor(code), // 색상 매칭은 대문자로 변환
  }));
}; 