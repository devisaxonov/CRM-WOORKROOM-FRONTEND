import "../assets/styles/sidebar.css";
import logo from "../assets/crm-logo.svg";
import { Link } from "react-router-dom";
import { BsFillGridFill } from "react-icons/bs";
import { IoLayers } from "react-icons/io5";
import { IoCalendarClear } from "react-icons/io5";
import { BsFillAirplaneFill } from "react-icons/bs";
import { MdPeople } from "react-icons/md";
import { BsChatDotsFill } from "react-icons/bs";
import { PiFolderOpenFill } from "react-icons/pi";
import supportLogo from "../assets/images/asidebar-image.svg";
import { FiMessageCircle } from "react-icons/fi";
import { RxExit } from "react-icons/rx";

const SideBar = () => {
  return (
    <aside className="w-[200px] h-[1265px] mt-5 ml-4 border-[2px] border-amber-300 rounded-3xl flex flex-col justify-between">
      <div className="flex flex-col gap-y-0.5">
        <Link to="/" className="my-10 ml-6">
          <img src={logo} alt="Company logo" />
        </Link>
        <div className="ml-4 flex flex-col gap-y-2.5">
          <div className="text-[#7D8592] text-4 flex pl-2 gap-x-4 font-bold w-41 h-11 items-center">
            <BsFillGridFill className="w-6 h-6 my-2.5" />
            Dashboard
          </div>
          <div className="text-[#7D8592] text-4 flex pl-2 gap-x-4 font-bold w-41 h-11 items-center">
            <IoLayers className="w-6 h-6 my-2.5" />
            Projects
          </div>
          <div className="text-[#7D8592] text-4 flex pl-2 gap-x-4 font-bold w-41 h-11 items-center">
            <IoCalendarClear className="w-6 h-6 my-2.5" />
            Calendar
          </div>
          <div className="text-[#7D8592] text-4 flex pl-2 gap-x-4 font-bold w-41 h-11 items-center">
            <BsFillAirplaneFill className="w-6 h-6 my-2.5" />
            Vacations
          </div>
          <div className="text-[#7D8592] text-4 flex pl-2 gap-x-4 font-bold w-41 h-11 items-center">
            <MdPeople className="w-6 h-6 my-2.5" />
            Employees
          </div>
          <div className="text-[#7D8592] text-4 flex pl-2 gap-x-4 font-bold w-41 h-11 items-center">
            <BsChatDotsFill className="w-6 h-6 my-2.5" />
            Messenger
          </div>
          <div className="text-[#7D8592] text-4 flex pl-2 gap-x-4 font-bold w-41 h-11 items-center">
            <PiFolderOpenFill className="w-6 h-6 my-2.5" />
            Info Portal
          </div>
        </div>
      </div>
      <div className="ml-4">
        <div className="w-42 h-42 bg-[#98bef7dc] relative rounded-3xl">
          <img
            className="absolute -top-11.5 left-4.5"
            src={supportLogo}
            alt="support opa"
          />
          <button className=" w-[129px] h-12 absolute bottom-1/6 left-1/2 transform -translate-x-1/2 bg-[#3f8cff] text-white px-4 py-2 rounded-2xl flex items-center gap-3 shadow-md hover:bg-blue-600 transition">
            <FiMessageCircle className="text-2xl" />
            <span className="text-sm font-bold">Support</span>
          </button>
        </div>
        <button className="my-10 w-42 flex gap-x-4 text-[#7D8592] font-semibold py-2 px-4">
          <RxExit className="w-6 h-6" />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default SideBar;
