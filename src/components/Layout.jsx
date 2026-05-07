import { Link, Outlet } from "react-router";
import { FiAlignJustify } from "react-icons/fi";
import Dashboard from "../pages/Dashboard";
import TopNavbar from "../components/TopNavBar";
import Logo from "../assets/logo.png"

import SideNavbar from "./SideNavbar";

const Layout = () => {

    return (
        <>
            <div className='flex'>
                <div className={`lg:w-64 h-full fixed duration-300 hidden lg:block z-50 pb-24 border-r border-slate-200`}>
                    <div className='px-1 h-20 border-b border-slate-200 flex items-center'>
                        <img src={Logo} alt="" />
                    </div>
                    <div className="h-full overflow-y-auto overflow-x-hidden p-2 pt-5 pb-10 relative">
                        <SideNavbar />
                    </div>
                </div>
                <div className={`lg:ms-64 min-h-screen w-screen duration-300 pt[200px] md:pt[68px] pb-20`}>
                    <TopNavbar />
                    <div className="mx-6">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout;