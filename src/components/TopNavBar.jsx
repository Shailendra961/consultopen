
import { HiOutlineSearch } from "react-icons/hi";
import icon2 from "../assets/icon-2.png"
import icon3 from "../assets/icon-3.png"
import { HiBars3BottomRight } from "react-icons/hi2";
import { FiGrid, FiMap } from "react-icons/fi";
import logo from "../assets/logo.png"
import { useState } from "react";
import { NavLink } from "react-router";




const TopNavbar = () => {

    const [toggleNavbar, setToggleNavbar] = useState(false);

    return (
        <>
            {/* <div className='px-1 pb-2 bg-indigo-500 fixed top-0 right-0 w-full z-50 text-white'>Logo</div> */}
            <div className='hidden px-6 h-20 border-b border-slate-200 lg:flex items-center justify-between'>
                <div className="lg:flex relative md:my-auto  rounded-sm bg-white w-full md:w-auto lg:w-2/5 me-4">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <span className="text-gray-500 sm:text-sm"><HiOutlineSearch className="text-lg" /></span>
                    </div>
                    <input
                        type="text" name='search'
                        className="block w-full rounded-md border-0 py-1.5 pl-10 pr-14 text-gray-900 ring-1 ring-gray-200 placeholder:text-gray-400  sm:text-sm sm:leading-6 h-12 focus:outline-none"
                        placeholder="Search internships, certifications, consultants..."
                    />
                </div>
                <div className="flex items-center gap-5">
                    <div>
                        <div className="h-10 w-10 rounded-full flex justify-center items-center border border-slate-300 relative">
                            <img src={icon3} alt="" />
                            <div className="h-1.5 w-1.5 bg-[#EC4899] rounded-full absolute top-2 right-2"></div>
                        </div>
                    </div>
                    <div>
                        <div className="h-10 w-10 rounded-full flex justify-center items-center border border-slate-300"><img src={icon2} alt="" /></div>
                    </div>

                    <div>
                        <div className="bg-black text-white px-4 py-2 rounded-md cursor-pointer">Upgrade Plan</div>
                    </div>
                </div>
            </div>

            <div className='lg:hidden relative w-full overflow-y-auto border-b p-5 border-slate-200 drop-shadow-md'>
                <div className="flex justify-between items-center">
                    <div><img src={logo} /></div>
                    <div>
                        <HiBars3BottomRight className="text-2xl cursor-pointer" onClick={() => setToggleNavbar(!toggleNavbar)} />
                    </div>
                </div>
            </div>
            <div>
                {
                    toggleNavbar ? <div className="bg-slate-200 py-2 ">
                        <ul className="">
                            <li className="mx-2">
                                <NavLink to={"/"} className={({ isActive }) => isActive ? "flex bg-primary items-center px-2 py-2 mb-2 rounded-sm text-white cursor-pointer" : "flex items-center px-2 py-2 mb-1 rounded-sm cursor-pointer hover:bg-primary hover:text-white"}>
                                    <div className="me-2"><FiGrid /></div>
                                    <div>Dashboard</div>
                                </NavLink>
                            </li>
                            <li className="mx-2">
                                <NavLink to={"/career-roadmap"} className={({ isActive }) => isActive ? "flex bg-primary items-center px-2 py-2 mb-2 rounded-sm text-white cursor-pointer" : "flex items-center px-2 py-2 mb-1 rounded-sm cursor-pointer hover:bg-primary hover:text-white"}>
                                    <div className="me-2"><FiMap /></div>
                                    <div>Career Roadmap</div>
                                </NavLink>
                            </li>
                        </ul>
                    </div> : null
                }
            </div>
        </>
    )
}

export default TopNavbar;