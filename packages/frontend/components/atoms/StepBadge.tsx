interface StepBadgeProps {
  step: string;
}

export default function StepBadge({ step }: StepBadgeProps) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '23px',
      }}
    >
      <div
        style={{
          border: '1px solid black',
          borderRadius: '12px',
          padding: '6px 12px',
          fontSize: '16px',
          fontWeight: '500',
          color: 'black',
        }}
      >
        {step}단계
      </div>
    </div>
  );
} 