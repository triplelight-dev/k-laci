const locationInfo = [
  {
    text: '04315 서울특별시 용산구 원효로90길 11, 용산더프라임 208호',
    underline: true,
  },
];

const LocationSection = () => (
  <div className="p-4 text-sm">
    <div className="mb-2 font-semibold" style={{ paddingBottom: '1rem' }}>
      Location
    </div>
    {locationInfo.map((item, idx) => (
      <div key={idx} className={item.underline ? 'underline' : undefined}>
        {item.text}
      </div>
    ))}
  </div>
);

export default LocationSection; 