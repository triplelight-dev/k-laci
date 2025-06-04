const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8 text-center border border-dashed border-blue-500">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 