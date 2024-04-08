import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";

const DateTab = () => {
  const today = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekDays = [
    "Sunday",
    "Monday",
    "Tueday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const weekDay = today.getDay();
  const month = today.getMonth();
  const date = today.getDate();
  const year = today.getFullYear();
  const dateToDisplay = `${weekDays[weekDay]}, ${months[month]} ${date}, ${year}`;
  return (
    <div className="flex justify-between sm:px-20 py-4 bg-[#B7C9F2] p-2">
      <p className="text-md font-bold">{dateToDisplay}</p>
      <div className="flex text-2xl gap-4">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaFacebook />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer noopener">
          <FaXTwitter />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          <IoLogoInstagram />
        </a>
      </div>
    </div>
  );
};

export default DateTab;
