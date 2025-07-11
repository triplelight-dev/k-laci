import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

interface Option {
  value: string;
  label: string;
}

interface CommonSelectProps {
  value: string;
  options: Option[];
  onChange: (value: string) => void;
  disabled?: boolean;
  defaultLabel?: string;
}

const CommonSelect: React.FC<CommonSelectProps> = ({
  value,
  options,
  onChange,
  disabled = false,
  defaultLabel = '선택',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedLabel =
    options.find((option) => option.value === value)?.label || defaultLabel;

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
        borderRadius: '50px',
        padding: '20px 20px',

        height: 'fit-content',
        minWidth: '100px',
        backgroundColor: 'transparent',
        opacity: disabled ? 0.5 : 1,
        cursor: disabled ? 'not-allowed' : 'pointer',
        userSelect: 'none',
      }}
      onClick={() => {
        if (!disabled) setIsOpen(!isOpen);
      }}
    >
      <span style={{
        flex: 1,
        color: '#000000',
        fontSize: '18px',
        paddingRight: '51px'
      }}>
        {selectedLabel}
      </span>
      <div style={{
        pointerEvents: 'none',
        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
        transition: 'transform 0.2s ease-in-out',
      }}>
        <Image src="/arrow_down.png" alt="선택" width={12} height={7} />
      </div>

      <div
        style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          marginTop: '8px',
          backgroundColor: 'white',
          border: '1px solid #E5E7EB',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          width: '100%',
          zIndex: 1000,
          maxHeight: isOpen ? '200px' : '0px',
          overflow: 'hidden',
          transition: 'max-height 0.2s ease-in-out',
          visibility: isOpen ? 'visible' : 'hidden',
        }}
      >
        <ul
          style={{
            listStyle: 'none',
            padding: '8px 0',
            margin: 0,
            maxHeight: '200px',
            overflowY: 'auto',
            overflowX: 'hidden',
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
                padding: '12px 20px',
                fontSize: '14px',
                color: '#374151',
                backgroundColor: 'white',
                cursor: 'pointer',
                transition: 'background-color 0.15s ease-in-out',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = '#F9FAFB')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = 'white')
              }
            >
              {option.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CommonSelect;
