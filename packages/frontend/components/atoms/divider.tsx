interface DividerProps extends React.HTMLAttributes<HTMLStyleElement> {

}

  
export function Divider(props: DividerProps) {
  return <div style={{ width: '100%', height: '0.5px', backgroundColor: '#D9D9E8', ...props.style }} />
}