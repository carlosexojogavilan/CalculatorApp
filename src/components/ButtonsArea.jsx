const ButtonsArea = ({ children }) => {
  return (
    <div className="flex flex-col justify-between items-stretch flex-wrap max-h-80 gap-1">
      {children}
    </div>
  );
};

export default ButtonsArea;
