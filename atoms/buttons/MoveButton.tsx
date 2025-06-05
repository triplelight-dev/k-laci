'use client';

interface MoveButtonProps {
  buttonName: string;
  onClick: () => void;
}

export const MoveButton = ({ buttonName, onClick }: MoveButtonProps) => {
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
        style={{
          width: '10rem',
          height: '3rem',
          backgroundColor: 'black',
          color: 'white',
          fontSize: '1rem',
          fontWeight: 600,
          borderRadius: '0.5rem',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        {buttonName}
      </button>
    </div>
  );
};
