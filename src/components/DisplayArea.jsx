const DisplayArea = ({ data }) => {
  return (
    <div className="flex items-center bg-white border-b-[1px] border-slate-300 pl-10 pr-4 py-4 rounded-t-xl box-border h-20 text-xl font-semibold truncate">
      {data}
    </div>
  );
};

export default DisplayArea;
