import { IconType } from 'react-icons';

interface ButtonProps {
    text: string;
    onClick: () => void;
    Icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({
    text,
    onClick,
    Icon
}) => {
  return (
    <button className={`text-white bg-yellow-600 py-4 px-8 rounded-full w-fit hover:bg-yellow-500 font-open`} onClick={onClick}>
      {Icon && <Icon className="inline-block text-white text-xl mr-2"/>}
      {text}
    </button>
  )
}

export default Button;