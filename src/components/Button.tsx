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
    <button className={`text-white bg-yellow-700 py-4 px-8 rounded-full w-fit hover:bg-yellow-600 font-open`} onClick={onClick}>
      {Icon && <Icon className="inline-block mr-2"/>}
      {text}
    </button>
  )
}

export default Button;