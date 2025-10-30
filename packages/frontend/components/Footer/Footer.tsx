import FooterTopSection from './FooterTopSection';

const Footer = () => {
  return (
    <footer
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#000000',
        color: '#ffffff',
        padding: '20px 20px',
      }}
    >
      <div
       className='hidden lg:block'
       style={{ width: '100%', maxWidth: '1400px' }}>
        <FooterTopSection />
      </div>
    </footer>
  );
};

export default Footer;
