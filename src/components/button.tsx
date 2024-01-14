interface ButtonProps {
  title: string;
}
const Button: React.FC<ButtonProps> = ({ title }) => {
  return <button className="p-4 border mx-2">{title}</button>;
};

export default Button;
