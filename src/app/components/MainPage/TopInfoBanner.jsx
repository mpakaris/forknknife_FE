 
export default function TopInfoBanner({message}) {
  return (
    <div className="flex justify-center bg-teal-700">
     <span className="text-white font-base p-2">{message}</span>
    </div>
  );
}