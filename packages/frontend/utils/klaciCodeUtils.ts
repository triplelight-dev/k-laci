// KLACI 코드 색상 매핑 (대문자 기준)
export const getKlaciCodeColor = (code: string): string => {
  const codeColorMapping: Record<string, string> = {
    G: '#FF3737',  // 빨간색
    T: '#FFA600',  // 주황색  
    V: '#874FFF',  // 보라색
    R: '#24CB71',  // 초록색
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

// KLACI 코드를 닉네임으로 변환하는 함수
export const getKlaciCodeNickname = (code: string): string => {
  const codeNicknameMapping: Record<string, string> = {
    G: '인구성장형',
    S: '인구정착형',
    T: '경제혁신형',
    C: '경제정속형',
    V: '생활역동형',
    M: '생활정체형',
    R: '안전회복형',
    A: '안전정진형',
  };

  return codeNicknameMapping[code.toUpperCase()] || code;
};

// KLACI 코드를 개별 문자로 분리하고 색상과 닉네임 매핑
export const parseKlaciCodeWithNickname = (klaciCode: string) => {
  return klaciCode.split('').map((code) => ({
    code, // 원본 코드 그대로 표시 (소문자면 소문자로)
    color: getKlaciCodeColor(code), // 색상 매칭은 대문자로 변환
    nickname: getKlaciCodeNickname(code), // 닉네임 매칭
  }));
}; 