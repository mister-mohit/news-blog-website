import { IoSearchSharp } from "react-icons/io5";
import Modal from "./Modal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = ({
  isOpen,
  onClose,
  onSearchClose,
  onSearchOpen,
  isSearch,
}) => {

  const [searchVal, setSearchVal] = useState("");
  const navigate = useNavigate();

  const handleKeyPress = (ev) => {
    if(ev.key === 'Enter' && isSearch){
      navigate(`/searchedBlog/str?queryParam=${searchVal}`)
    }
  }
  return (
    <div className="relative">
      <div>
        <IoSearchSharp
          className="text-3xl my-auto"
          onClick={isSearch ? onSearchClose : onSearchOpen}
        />
      </div>
      <Modal isSearch={isSearch} onSearchClose={onSearchClose} on>
        <div className="flex items-center w-fit border border-gray-400 rounded-md overflow-hidden">
          <input
            type="text"
            className="py-2 px-4 text-black outline-none w-[300px]"
            placeholder="Search..."
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <div
            className="bg-pink-500 text-white py-2 px-4 cursor-pointer"
            onClick={() => navigate(`/searchedBlog/str?queryParam=${searchVal}`)}
          >
            Search
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SearchBar;
