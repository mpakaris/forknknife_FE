const BottomSheetTagPills = ({ tags, paddingClass = 'py-2' }) => {
  return (
    <div className='tags'>
      {tags && tags.map((tag, index) => (
        <span key={index} className="mt-5">
          <p className={`bg-teal-700 text-white font-bold text-xs ${paddingClass} px-3 mr-1 mt-1 rounded-full inline-flex items-center`}>
            {tag}
          </p>
        </span>
      ))}
    </div>
  );
}

export default BottomSheetTagPills;