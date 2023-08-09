const Button = ({ onClick, label, value, isFiller, color }) => {
  return (
    <div
      onClick={onClick}
      value={value}
      className={`font-orbitron p-4 text-center border-[.5px] border-slate-300 cursor-pointer
      ${color ? `bg-[${color}]` : "bg-[#F6F3FF] hover:bg-[#E0D9EC] "} 
      ${isFiller ? "flex-grow min-h-0 flex items-center justify-center" : ""}`}
    >
      {label}
    </div>
  );
};

export default Button;
