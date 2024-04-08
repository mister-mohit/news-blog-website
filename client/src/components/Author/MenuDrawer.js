import { IoMdCreate } from "react-icons/io";
import { useNavigate } from "react-router-dom";
//import { CiMenuBurger } from "react-icons/ci";
import { MdPublishedWithChanges } from "react-icons/md";
import { RiDraftLine } from "react-icons/ri";

const MenuDrawer = ({ setIsDraft, isDraft }) => {
  const navigate = useNavigate();

  const startNewBlog = async () => {
    const response = await fetch("http://localhost:5000/newBlog");
    const resultId = await response.json();
    navigate(`/blog/${resultId.id}`);
  };

  return (
    <div className="group flex flex-col hover:w-[10%] hover:items-stretch gap-4 w-[min] pt-2 pl-2 transition duration-2000 ease-in-out ">
      {/* <button className="p-3 bg-[#9CAFAA] border-solid rounded-full">
        <CiMenuBurger className="text-2xl " />
      </button> */}

      <button
        className={`p-2 bg-[#D6DAC8] rounded-lg relative overflow-hidden `}
        onClick={startNewBlog}
      >
        <IoMdCreate className="text-4xl" />
        <span className="text-[20px] absolute  left-[52px] bottom-[10px] opacity-0 group-hover:opacity-100 flex justify-center items-center transition duration-10 ease-linear">
          Compose
        </span>
      </button>
      <div className="flex flex-col">
        <button
          className={`text-2xl ${
            isDraft ? "bg-inherit" : "bg-gray-300"
          } relative hover:bg-gray-100 pl-3 p-2 rounded-lg overflow-hidden`}
          onClick={() => setIsDraft(false)}
        >
          <MdPublishedWithChanges />
          <span className="text-[20px] absolute  left-[52px] bottom-1 opacity-0 group-hover:opacity-100 flex justify-center items-center transition duration-10 ease-linear">
            Published
          </span>
        </button>
        <button
          className={`text-2xl ${
            isDraft ? "bg-gray-300" : "bg-inherit"
          } relative hover:bg-gray-100 pl-3 p-2 rounded-lg overflow-hidden`}
          onClick={() => setIsDraft(true)}
        >
          <RiDraftLine />
          <span className="text-[20px] absolute  left-[52px] bottom-1 opacity-0 group-hover:opacity-100 flex justify-center items-center transition duration-10 ease-linear">
            Draft
          </span>
        </button>
      </div>
    </div>
  );
};

export default MenuDrawer;
