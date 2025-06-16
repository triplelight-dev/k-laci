import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface Option {
  value: string;
  label: string;
}

interface CommonSelectProps {
  value: string;
  options: Option[];
  onChange: (value: string) => void;
  disabled?: boolean;
}

const CommonSelect: React.FC<CommonSelectProps> = ({
  value,
  options,
  onChange,
  disabled = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedLabel =
    options.find((option) => option.value === value)?.label || '선택';

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        border: '1px solid #264DBC',
        borderRadius: '50px',
        padding: '0 20px',
        height: '50px',
        minWidth: '180px',
        backgroundColor: 'white',
        opacity: disabled ? 0.5 : 1,
        cursor: disabled ? 'not-allowed' : 'pointer',
        userSelect: 'none',
      }}
      onClick={() => {
        if (!disabled) setIsOpen(!isOpen);
      }}
    >
      <span style={{ flex: 1, color: '#264DBC', fontSize: '14px' }}>
        {selectedLabel}
      </span>
      <div style={{ pointerEvents: 'none' }}>
        <Image src="/arrow_down.png" alt="선택" width={12} height={7} />
      </div>

      {isOpen && (
        <ul
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            marginTop: '0px', // 간격 제거
            backgroundColor: 'white',
            border: '1px solid #264DBC',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            width: '100%',
            zIndex: 1000,
            listStyle: 'none',
            padding: 0,
            overflow: 'hidden',
          }}
        >
          {options.map((option) => (
            <li
              key={option.value}
              onClick={(e) => {
                e.stopPropagation();
                onChange(option.value);
                setIsOpen(false);
              }}
              style={{
                padding: '12px 16px',
                fontSize: '14px',
                color: '#264DBC',
                backgroundColor: 'white',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = '#F4F4F4')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = 'white')
              }
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CommonSelect;
