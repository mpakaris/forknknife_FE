import { useEffect } from "react";

const ModalTemplate = ({ show, onClose, onConfirm, children }) => {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden"; 
    } else {
      document.body.style.overflow = "unset";
    }
  }, [show]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-md">
        <div className="mb-4">{children}</div>
        <div className="flex justify-between">
          <button
            className="bg-red-800 text-white py-2 px-4 rounded hover:bg-red-700"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-teal-800 text-white py-2 px-4 rounded hover:bg-teal-700"
            onClick={onConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalTemplate;