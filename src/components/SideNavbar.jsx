import { FiGrid, FiMap, FiCreditCard } from "react-icons/fi";
import { NavLink } from "react-router";
import Emma from "../assets/Emma.png"
import { HiOutlineDotsVertical } from "react-icons/hi";
import { LuHeartPulse, LuUsersRound } from "react-icons/lu";
import { CiWallet } from "react-icons/ci";
import { MdLogout } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
const SideNavbar = () => {

    return (
        <>
            <div className="pb-20">
                <NavLink to={"/"} className={({ isActive }) => isActive ? "flex bg-primary items-center px-2 py-2 mb-2 rounded-sm text-white cursor-pointer" : "flex items-center px-2 py-2 mb-1 rounded-sm cursor-pointer hover:bg-primary hover:text-white"}>
                    <div className="me-2"><FiGrid /></div>
                    <div>Dashboard</div>
                </NavLink>
                <NavLink to={"/career-roadmap"} className={({ isActive }) => isActive ? "flex bg-primary items-center px-2 py-2 mb-2 rounded-sm text-white cursor-pointer" : "flex items-center px-2 py-2 mb-1 rounded-sm cursor-pointer hover:bg-primary hover:text-white"}>
                    <div className="me-2"><FiMap /></div>
                    <div>Career Roadmap</div>
                </NavLink>
                <NavLink className="flex items-center px-2 py-2 mb-1 rounded-sm cursor-pointer hover:bg-primary hover:text-white">
                    <div className="me-2"><LuHeartPulse /></div>
                    <div>Mental Wellness</div>
                </NavLink>
                <NavLink className="flex items-center px-2 py-2 mb-1 rounded-sm cursor-pointer hover:bg-primary hover:text-white">
                    <div className="me-2"><LuUsersRound /></div>
                    <div>Consultant Marketplace</div>
                </NavLink>
                <hr className="text-slate-400 my-5" />
                <NavLink className="flex items-center px-2 py-2 mb-1 rounded-sm cursor-pointer hover:bg-primary hover:text-white">
                    <div className="me-2"><FiCreditCard /></div>
                    <div>Subscription</div>
                </NavLink>
                <NavLink className="flex items-center px-2 py-2 mb-1 rounded-sm cursor-pointer hover:bg-primary hover:text-white">
                    <div className="me-2"><CiWallet /></div>
                    <div>Wallet & Payments</div>
                </NavLink>
                <NavLink className="flex items-center px-2 py-2 mb-1 rounded-sm cursor-pointer hover:bg-primary hover:text-white">
                    <div className="me-2"><IoSettingsOutline /></div>
                    <div>Settings</div>
                </NavLink>
                <NavLink className="flex items-center px-2 py-2 mb-1 rounded-sm cursor-pointer hover:bg-primary hover:text-white">
                    <div className="me-2"><MdLogout /></div>
                    <div>Logout</div>
                </NavLink>
                <div className="fixed bottom-4 left-1 ps-2">
                    <div className="flex items-center gap-2 bg-slate-100 rounded-md p-2">
                        <div><img src={Emma} alt="" /></div>
                        <div className="w-full">
                            <div className="mb-2">
                                <p className="font-semibold text-sm">Alex Miller</p>
                                <span className="text-xs text-[#F59E0B] bg-[#F59E0B]/10 px-2 py-1 font-medium">ELITE</span>
                            </div>
                        </div>
                        <div>
                            <HiOutlineDotsVertical className="cursor-pointer" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SideNavbar;