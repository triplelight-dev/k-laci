import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-full border-b border-[#E5E5E5] bg-white">
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '1.3rem 4rem',
        }}
      >
        {/* Logo or Title */}
        <div
          className="font-poppins text-[2.1875rem] leading-[110%] font-bold tracking-[-1.05px] text-black"
          style={{
            textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            WebkitTextStrokeWidth: '1px',
            WebkitTextStrokeColor: '#000',
          }}
        >
          <Link href="/">K-LACI</Link>
        </div>

        {/* Navigation and Login */}
        <nav className="flex items-center gap-[25px]">
          {/* Menu Links Container */}
          <div className="flex items-center gap-[25px]">
            <Link
              href="/about"
              className="font-poppins text-[0.9375rem] leading-[110%] font-semibold tracking-[-0.45px] text-black"
            >
              About
            </Link>
            <Link
              href="/summary"
              className="font-poppins text-[0.9375rem] leading-[110%] font-semibold tracking-[-0.45px] text-black"
            >
              Summary
            </Link>
            <Link
              href="/results"
              className="font-poppins text-[0.9375rem] leading-[110%] font-semibold tracking-[-0.45px] text-black"
            >
              Results
            </Link>
          </div>

          {/* Login Button */}
          <button className="font-pretendard inline-flex items-center justify-center gap-[3px] rounded-[6px] border border-[#E5E5E5] bg-white px-[12px] py-[8px] text-center text-[0.9375rem] leading-[20px] font-semibold text-black">
            로그인
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
