import FooterTopSection from './FooterTopSection';
import FooterBottomSection from './FooterBottomSection';

const Footer = () => {
  return (
    <footer
      style={{
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#000000',
        color: '#ffffff',
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
