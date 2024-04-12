
import { IoSearchSharp } from "react-icons/io5";
import Modal from "./Modal";

const SearchBar = ({ isOpen, onClose, onSearchClose, onSearchOpen, isSearch }) => {
  
  return (
    <div className="relative">
      <div>
        <IoSearchSharp
          className="text-3xl my-auto"
          onClick={isSearch ? onSearchClose : onSearchOpen}
        />
      </div>
      <Modal isSearch={isSearch} onSearchClose={onSearchClose} on>
        <div className="w-[400px] h-[60px] flex justify-center relative px-3 py-3  bg-white">
            <input className="grow  border border-black rounded-sm overflow-hidden" />
            <button type="submit" className="absolute top-[12px] text-4xl right-[10px] text-pink-700"><IoSearchSharp /></button>
        </div>
      </Modal>
    </div>
  );
};

export default SearchBar;

