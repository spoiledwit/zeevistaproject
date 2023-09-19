interface ButtonProps {
    text: string
    onClick: () => void
}

const Button:React.FC<ButtonProps> = ({
    text,
    onClick
}) => {
  return (
    <button className= {`button-86`} onClick={onClick}>{text}</button>
  )
}

export default Button;
