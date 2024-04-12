import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { GiHamburgerMenu } from "react-icons/gi";
import Modal from "./Modal";

const Navbar = () => {
  const categories = ["Politics", "Technology", "Education", "News"];
  const { category: searchCategory, blogId } = useParams();
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const {isOpen, onClose, onOpen } = Disclosure();

  return (
    <div className={`bg-black text-xl relative flex sm:px-20 px-4 text-white justify-between items-center font-bold border-t-4 border-[#c57eef] ${isMobile && "py-4"}`}>
      {/* div for categories */}
      {isMobile ? <GiHamburgerMenu className="text-3xl my-auto" onClick={isOpen ? onClose : onOpen} /> : displayCategories(categories, searchCategory, blogId)}

      {/* div for search */}
      <div>
        <IoSearchSharp className="text-3xl my-auto" />
      </div>
      <Modal isOpen={isOpen} onClose={onClose} >{displayCategories(categories, searchCategory, blogId, isMobile)}</Modal>
    </div>
  );
};

export default Navbar;

const displayCategories = (categoryArr, searchCategory, blogId, isMobile) => {
  return (
    // div for my category list
    <div className={`flex ${isMobile && "flex-col w-[250px] "}`}>
        <a
          className={`px-3 py-4 hover:bg-[#c57eef] focus:bg-[#c57eef] ${
            searchCategory || blogId ? "bg-black" : "bg-[#c57eef]"
          }
          ${isMobile && "border-t border-gray-200}"}`}
          href="/"
        >
          Home
        </a>
        {categoryArr.map((category) => (
          <a
            className={`px-3 py-4 hover:bg-[#c57eef] focus:bg-[#c57eef] ${
              searchCategory === category ? "bg-[#c57eef]" : "bg-black"
            }
            ${isMobile && "border-t border-gray-200}"}`}
            key={category}
            href={`/${category}`}
          >
            {category}
          </a>
        ))}
      </div>

  )
};

const Disclosure = () => {
  const [isOpen, setIsOpen] = useState(false);

  function onOpen(){
    setIsOpen(true);
  }

  function onClose(){
    setIsOpen(false);
  }

  return {isOpen, onOpen, onClose}
}
