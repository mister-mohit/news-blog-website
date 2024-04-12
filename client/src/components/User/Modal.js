const Modal = ({ isOpen, onClose, children,isSearch }) => {
  return (
    <>
      {isOpen && (
        <div className="absolute top-[60px] z-50">{children}</div>
      )}
      {isSearch &&(
        <div className="absolute top-[50px] right-[20px] z-50 ">{children}</div>
      )}
    </>
  );
};

export default Modal;
