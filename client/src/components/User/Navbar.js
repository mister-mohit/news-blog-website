import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import { useParams } from "react-router-dom";

const Navbar = () => {
  const categories = ["Politics", "Technology", "Education", "News"];
  const { category: searchCategory } = useParams();

  return (
    <div className="bg-black text-xl flex sm:px-20 px-4 text-white justify-between font-bold">
      {/* div for categories */}
      <div className="flex gap-6">
        <a
          className={`px-2 py-4 hover:bg-[#c57eef] ${
            !searchCategory ? "bg-[#c57eef]" : "bg-black"
          }`}
          href="/"
        >
          Home
        </a>
        {categories.map((category) => (
          <a
            className={`px-2 py-4 hover:bg-[#c57eef] ${
              searchCategory === category ? "bg-[#c57eef]" : "bg-black"
            }`}
            key={category}
            href={`/${category}`}
          >
            {category}
          </a>
        ))}
      </div>

      {/* div for search */}
      <div>
        <IoSearchSharp className="text-3xl mt-4" />
      </div>
    </div>
  );
};

export default Navbar;
