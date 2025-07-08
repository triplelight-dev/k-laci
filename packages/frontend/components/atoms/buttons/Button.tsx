import { Flex } from "@chakra-ui/react";

interface ButtonProps {
  label: string;
  icon?: React.ReactNode;
}

export default function Button(props: ButtonProps) {
  const { label, icon } = props;


  return <button
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '12px 32px',
      backgroundColor: '#ffffff',
      color: '#000000',
      border: 'none',
      borderRadius: '8px',
      fontSize: '18px',
      fontWeight: '400',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.backgroundColor = '#f3f4f6';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.backgroundColor = '#ffffff';
    }}
  >
    <Flex gap='8px' alignItems='center' justifyContent='center'>
      {label}
      {icon}
    </Flex>
  </button>;
}