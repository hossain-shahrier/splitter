interface ButtonProps {
  title: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}
const Button: React.FC<ButtonProps> = ({ title, onClick }) => {
  return (
    <button className="p-4 border mx-2" onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
