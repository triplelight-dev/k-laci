export type UserType = 'GOV' | 'EDU' | 'GENERAL';

// GOV 도메인 목록
const GOV_DOMAINS = [
  'korea.kr',
  'go.kr',
  'kwater.or.kr',
  'slc.or.kr',
  'kogas.or.kr',
  'knoc.co.kr',
  'khnp.co.kr',
  'kepco.co.kr',
  'korail.com',
  'energy.or.kr',
  'kosha.or.kr',
  'keco.or.kr',
  'kr.or.kr',
  'koem.or.kr',
  'korad.or.kr',
  'beco.go.kr',
  'dgeic.or.kr',
  'dyecen.or.kr',
  'kiaco.or.kr',
  'eco-g.or.kr',
  'seongseo.or.kr',
  'asicm.or.kr',
  'ex.co.kr',
  'airport.co.kr',
  'airport.kr',
  'lh.or.kr',
  'kores.or.kr',
  'komir.or.kr',
  'komsco.com',
  'kra.co.kr',
  'kra.or.kr',
  'kesco.or.kr',
  'fira.or.kr',
  'at.or.kr',
  'kicox.or.kr',
  'kamco.or.kr',
  'korc.co.kr',
  'komipo.co.kr',
  'knpower.co.kr',
  'iwest.co.kr',
  'kowepo.co.kr',
  'ewep.co.kr',
  'kpx.or.kr',
  'kobaco.co.kr',
  'kotc.or.kr',
  'koa.or.kr',
  'ksf.or.kr',
  'keit.re.kr',
  'kiat.or.kr',
  'nia.or.kr',
  'kisa.or.kr',
  'koreacontent.or.kr',
  'artscouncil.or.kr',
  'chf.or.kr',
  'visitkorea.or.kr',
  'nps.or.kr',
  'kdb.co.kr',
  'geps.or.kr',
];

// 개인 이메일 도메인 목록
const PERSONAL_DOMAINS = [
  'naver.com',
  'gmail.com',
  'daum.net',
  'hanmail.net',
  'nate.com',
  'kakao.com',
  'yahoo.com',
  'hotmail.com',
  'outlook.com',
  'icloud.com',
  'me.com',
  'live.com',
  'msn.com',
  'protonmail.com',
  'zoho.com',
  'mail.com',
  'gmx.com',
  'inbox.com',
  'yandex.com',
  'bk.ru',
  'aol.com',
  'hushmail.com',
  'yahoo.co.kr',
  'empas.com',
  'korea.com',
  'dreamwiz.com',
  'paran.com',
  'lycos.co.kr',
  'nateon.com',
  'hanmir.com',
  'chol.com',
  'chollian.net',
  'hanafos.com',
  'sayclub.com',
  'freechal.com',
  'unitel.co.kr',
  'sk.com',
  'sktelecom.com',
  'hanaro.com',
  'hitel.net',
  'yahoo.co.jp',
];

// 도메인에 따른 사용자 타입 판단 함수
export const getUserTypeFromDomain = (domain: string): UserType => {
  const lowerDomain = domain.toLowerCase();
  
  // GOV 도메인 체크
  if (GOV_DOMAINS.some(govDomain => lowerDomain.includes(govDomain))) {
    return 'GOV';
  }
  
  // 개인 이메일 도메인 체크
  if (PERSONAL_DOMAINS.some(personalDomain => lowerDomain === personalDomain)) {
    return 'GENERAL';
  }
  
  // 기본값 (기업/기관/교육기관 도메인으로 간주)
  return 'EDU';
};

// 이메일에서 사용자 타입 판단 함수
export const getUserTypeFromEmail = (email: string): UserType => {
  const domain = email.split('@')[1];
  
  if (!domain) return 'GENERAL';
  
  return getUserTypeFromDomain(domain);
}; 