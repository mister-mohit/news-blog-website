const Modal = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && (
        <div className="absolute top-[60px] z-50">{children}</div>
      )}
    </>
  );
};

export default Modal;
