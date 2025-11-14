const Loading = ({ message = "Cargando..." }) => {
  return (
    <div className="w-full flex justify-center items-center py-10">
      <div className="flex flex-col items-center gap-3">
        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
        <p className="text-sm text-slate-700">{message}</p>
      </div>
    </div>
  );
};

export default Loading;
