interface EmailDisplayBoxProps {
  email: string;
  userType: string;
}

export default function EmailDisplayBox({
  email,
  userType,
}: EmailDisplayBoxProps) {
  return (
    <div style={{ width: '100%' }}>
      <div
        style={{
          width: '100%',
          height: '50px',
          backgroundColor: '#F1F1F1',
          borderRadius: '0.5rem',
          padding: '0 1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            fontSize: '16px',
            color: '#111827',
            fontWeight: '500',
          }}
        >
          {email}
        </div>
        <div
          style={{
            backgroundColor: '#C5EEE5',
            color: '#066106',
            borderRadius: '10px',
            width: '60px',
            height: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '12px',
            fontWeight: '500',
          }}
        >
          인증됨
        </div>
      </div>
      <div
        style={{
          fontSize: '12px',
          color: '#6B7280',
          marginTop: '4px',
          textAlign: 'left',
        }}
      >
        {userType}
      </div>
    </div>
  );
}
