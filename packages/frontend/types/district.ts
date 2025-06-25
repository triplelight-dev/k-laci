export interface DistrictRank {
  rank: number;
  title: string;
  subtitle: string;
  metrics: {
    title: string;
    rank: number;
    color: string;
  }[];
}

export const mockDistrictData: DistrictRank[] = [
  {
    rank: 1,
    title: '서울시 강남구',
    subtitle: '전통·평온·안심형',
    metrics: [
      { title: '경제성장', rank: 1, color: '#FF6B6B' },
      { title: '일자리', rank: 2, color: '#4ECDC4' },
      { title: '주거환경', rank: 3, color: '#45B7D1' },
      { title: '복지건강', rank: 1, color: '#96CEB4' },
    ],
  },
  {
    rank: 2,
    title: '서울시 송파구',
    subtitle: '전통·평온·안심형',
    metrics: [
      { title: '경제성장', rank: 2, color: '#FF6B6B' },
      { title: '일자리', rank: 1, color: '#4ECDC4' },
      { title: '주거환경', rank: 2, color: '#45B7D1' },
      { title: '복지건강', rank: 3, color: '#96CEB4' },
    ],
  },
  {
    rank: 3,
    title: '서울시 서초구',
    subtitle: '전통·평온·안심형',
    metrics: [
      { title: '경제성장', rank: 3, color: '#FF6B6B' },
      { title: '일자리', rank: 3, color: '#4ECDC4' },
      { title: '주거환경', rank: 1, color: '#45B7D1' },
      { title: '복지건강', rank: 2, color: '#96CEB4' },
    ],
  },
  {
    rank: 4,
    title: '경기도 성남시',
    subtitle: '전통·평온·안심형',
    metrics: [
      { title: '경제성장', rank: 4, color: '#FF6B6B' },
      { title: '일자리', rank: 4, color: '#4ECDC4' },
      { title: '주거환경', rank: 4, color: '#45B7D1' },
      { title: '복지건강', rank: 5, color: '#96CEB4' },
    ],
  },
  {
    rank: 5,
    title: '인천시 연수구',
    subtitle: '전통·평온·안심형',
    metrics: [
      { title: '경제성장', rank: 5, color: '#FF6B6B' },
      { title: '일자리', rank: 5, color: '#4ECDC4' },
      { title: '주거환경', rank: 5, color: '#45B7D1' },
      { title: '복지건강', rank: 4, color: '#96CEB4' },
    ],
  },
  {
    rank: 6,
    title: '부산시 해운대구',
    subtitle: '전통·평온·안심형',
    metrics: [
      { title: '경제성장', rank: 6, color: '#FF6B6B' },
      { title: '일자리', rank: 6, color: '#4ECDC4' },
      { title: '주거환경', rank: 6, color: '#45B7D1' },
      { title: '복지건강', rank: 7, color: '#96CEB4' },
    ],
  },
  {
    rank: 7,
    title: '대구시 수성구',
    subtitle: '전통·평온·안심형',
    metrics: [
      { title: '경제성장', rank: 7, color: '#FF6B6B' },
      { title: '일자리', rank: 7, color: '#4ECDC4' },
      { title: '주거환경', rank: 7, color: '#45B7D1' },
      { title: '복지건강', rank: 6, color: '#96CEB4' },
    ],
  },
  {
    rank: 8,
    title: '대전시 유성구',
    subtitle: '전통·평온·안심형',
    metrics: [
      { title: '경제성장', rank: 8, color: '#FF6B6B' },
      { title: '일자리', rank: 8, color: '#4ECDC4' },
      { title: '주거환경', rank: 8, color: '#45B7D1' },
      { title: '복지건강', rank: 8, color: '#96CEB4' },
    ],
  },
  {
    rank: 9,
    title: '광주시 서구',
    subtitle: '전통·평온·안심형',
    metrics: [
      { title: '경제성장', rank: 9, color: '#FF6B6B' },
      { title: '일자리', rank: 9, color: '#4ECDC4' },
      { title: '주거환경', rank: 9, color: '#45B7D1' },
      { title: '복지건강', rank: 9, color: '#96CEB4' },
    ],
  },
  {
    rank: 10,
    title: '울산시 남구',
    subtitle: '전통·평온·안심형위',
    metrics: [
      { title: '경제성장', rank: 10, color: '#FF6B6B' },
      { title: '일자리', rank: 10, color: '#4ECDC4' },
      { title: '주거환경', rank: 10, color: '#45B7D1' },
      { title: '복지건강', rank: 10, color: '#96CEB4' },
    ],
  },
];
