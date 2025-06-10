'use client';

interface MoveButtonProps {
  width?: string;
  buttonName: string;
  onClick: () => void;
  background?: string;
  borderColor?: string;
  textColor?: string;
}

export const MoveButton = ({
  width = '10rem',
  buttonName,
  onClick,
  background = 'black',
  borderColor = 'none',
  textColor = 'white',
}: MoveButtonProps) => {
  return (
    <div
      className="flex flex-col items-center justify-center"
      style={{
        width: '100%',
        paddingTop: '1rem',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <button
        onClick={onClick}
        style={{
          width,
          height: '3rem',
          background,
          color: textColor,
          fontSize: '1rem',
          fontWeight: 600,
          borderRadius: '0.5rem',
          border: borderColor === 'none' ? 'none' : `1px solid ${borderColor}`,
          cursor: 'pointer',
        }}
      >
        {buttonName}
      </button>
    </div>
  );
};
