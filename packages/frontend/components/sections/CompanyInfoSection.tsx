interface CompanyInfo {
  text: string;
}

const companyInfo: CompanyInfo[] = [
  { text: '대표: 이은화, 정유진' },
  { text: '사업자등록번호: 525-88-01428' },
];

const CompanyInfoSection = () => (
  <div className="p-4 text-sm">
    <div className="mb-2 font-semibold" style={{ paddingBottom: '1rem' }}>
      트리플라잇(주)
    </div>
    {companyInfo.map((item, idx) => (
      <div key={idx}>{item.text}</div>
    ))}
  </div>
);

export default CompanyInfoSection;
