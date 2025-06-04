import Link from 'next/link';

const Header = () => {
  return (
    <header className="text-white py-[30px] border-b border-[#E5E5E5] px-[30px]">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Title */}
        <div className="text-black font-poppins text-[2.1875rem] font-bold leading-[110%] tracking-[-1.05px]"
             style={{
               textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
               WebkitTextStrokeWidth: '1px',
               WebkitTextStrokeColor: '#000'
             }}>
          <Link href="/">K-LACI</Link>
        </div>

        {/* Navigation and Login */}
        <nav className="flex items-center gap-[25px]">
          {/* Menu Links Container */}
          <div className="flex items-center gap-[25px]">
            <Link href="/about"
                  className="text-black font-poppins text-[0.9375rem] font-semibold leading-[110%] tracking-[-0.45px]"
            >
              About
            </Link>
            <Link href="/summary"
                  className="text-black font-poppins text-[0.9375rem] font-semibold leading-[110%] tracking-[-0.45px]"
            >
              Summary
            </Link>
            <Link href="/results"
                  className="text-black font-poppins text-[0.9375rem] font-semibold leading-[110%] tracking-[-0.45px]"
            >
              Results
            </Link>
            {/* Add more pages as needed */}
          </div>

          {/* Login Button */}
          <button className="inline-flex items-center justify-center gap-[3px] bg-white text-black text-center font-pretendard text-[0.9375rem] font-semibold leading-[20px] py-[8px] px-[12px] rounded-[6px] border border-[#E5E5E5]" >
            로그인
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;