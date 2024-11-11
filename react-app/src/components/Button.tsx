interface ButtonProps {
  children: string;
  onClick?: () => void;
  color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info";
}

const Button = ({ children, onClick, color = "primary" }: ButtonProps) => {
  return (
    <button className={`btn btn-${color} mt-3 mx-2`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
