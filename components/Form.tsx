import {useState, useEffect} from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}
const Form = ({isOpen, onClose}: Props) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling when the modal is open
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling when the modal is closed
    }
  }, [isOpen]);
  return (
    <div
      className={` ${
        isOpen ? "block" : "hidden"
      } fixed inset-0 z-40`}
    >
      <div
        className="h-screen w-full flex items-center justify-center bg-black/20"
        onClick={onClose}
      >
        
      </div>
      <div className="fixed z-50 h-1/2 w-1/2 inset-0 translate-x-1/2 translate-y-1/2 bg-main">
          This From
          <button onClick={onClose}>Close</button>
        </div>
    </div>
  );
};

export default Form;
