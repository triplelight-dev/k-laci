'use client';

interface MoveButtonProps {
  buttonName: string;
  onClick: () => void;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
}

export const MoveButton = ({
  buttonName,
  onClick,
  backgroundColor = 'black',
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
          width: '10rem',
          height: '3rem',
          backgroundColor,
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
