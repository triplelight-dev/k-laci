const Footer = () => {
  return (
    <footer className="mt-8 border border-dashed border-blue-500 bg-gray-800 p-4 text-center text-white">
      <div className="container mx-auto">
        <p>
          &copy; {new Date().getFullYear()} My Website. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
