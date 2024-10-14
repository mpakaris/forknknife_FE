const Spinner = ({ progress }) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-4 border-teal-600"></div>
        <div className="mt-5 text-white font-bold">Loading... {progress}%</div>
      </div>
    </div>
  );
};

export default Spinner;
