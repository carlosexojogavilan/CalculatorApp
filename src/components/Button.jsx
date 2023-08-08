const Button = ({ onClick, label, value }) => {
  return (
    <div
      onClick={onClick}
      value={value}
      className="p-4 bg-white text-center flex-1"
    >
      {label}
    </div>
  );
};

export default Button;
