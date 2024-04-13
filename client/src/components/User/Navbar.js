import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { GiHamburgerMenu } from "react-icons/gi";
import Modal from "./Modal";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const categories = ["Home","Politics", "Technology", "Education", "News"];
  const { category: searchCategory } = useParams();
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const {isOpen, onClose, onOpen , isSearch, onSearchClose, onSearchOpen} = Disclosure();
  

  return (
    <div className={`bg-black text-xl relative flex sm:px-20 px-4 text-white justify-between items-center font-bold border-t-4 border-[#c57eef] ${isMobile && "py-4"}`}>
      {/* div for categories */}
      {isMobile ? <GiHamburgerMenu className="text-3xl my-auto" onClick={isOpen ? onClose : onOpen} /> : displayCategories(categories, searchCategory, isMobile)}

      {/* div for search */}
      <SearchBar  isSearch={isSearch} onSearchClose={onSearchClose} onSearchOpen={onSearchOpen} />
      <Modal isOpen={isOpen} onClose={onClose} >{displayCategories(categories, searchCategory, isMobile)}</Modal>
    </div>
  );
};

export default Navbar;

const displayCategories = (categoryArr, searchCategory = "home", isMobile) => {
  return (
    // div for my category list
    <div className={`flex ${isMobile && "flex-col w-[250px] "}`}>
        
        {categoryArr.map((category) => (
          <a
            className={`px-3 py-4 hover:bg-[#c57eef] focus:bg-[#c57eef] ${
              searchCategory === category  ? "bg-[#c57eef]" : "bg-black"
            }
            ${isMobile && "border-t border-gray-200}"}`}
            key={category}
            href={category === "Home" ? "/" : `/${category}`}
          >
            {category}
          </a>
        ))}
      </div>

  )
};

const Disclosure = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearch, setIsSearch] = useState(false);

  function onOpen(){
    if(isSearch){
      setIsSearch(false);
    }
    setIsOpen(true);
  }

  function onClose(){
    setIsOpen(false);
  }

  function onSearchOpen(){
    if(isOpen){
      onClose();
    }
    setIsSearch(true);
  }

  function onSearchClose(){
    setIsSearch(false);
  }

  return {isOpen, onOpen, onClose, isSearch, onSearchOpen, onSearchClose}
}
