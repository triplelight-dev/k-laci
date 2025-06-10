const contactInfo = [
  { text: '02-706-8818' },
  { text: 'impact@triplelight.co', underline: true },
];

const ContactSection = () => (
  <div className="p-4 text-sm">
    <div className="mb-2 font-semibold" style={{ paddingBottom: '1rem' }}>
      Contact
    </div>
    {contactInfo.map((item, idx) => (
      <div key={idx} className={item.underline ? 'underline' : undefined}>
        {item.text}
      </div>
    ))}
  </div>
);

export default ContactSection; 