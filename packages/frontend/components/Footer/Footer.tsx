import FooterBottomSection from './FooterBottomSection';
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
      <div style={{ width: '90%' }}>
        <FooterTopSection />
        <FooterBottomSection />
      </div>
    </footer>
  );
};

export default Footer;
