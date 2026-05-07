import { 
    FiTarget,
    FiCheckSquare,
    FiLock,
    FiMap,
    FiCheck,
    FiChevronRight,
    FiArrowRight
} from "react-icons/fi";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import Logo from "../assets/logo.png"
import Teddy from "../assets/icon-4.png"
import heartIcon from "../assets/icon-1.svg"
import timeIcon from "../assets/time.svg"
import Emma from "../assets/Emma.png"
import Icon2 from "../assets/icon-2.svg"
import Icon3 from "../assets/icon-3.svg"
import Icon4 from "../assets/icon-4.svg"
import Icon5 from "../assets/icon-5.svg"
import Icon6 from "../assets/icon-6.svg"
import Icon7 from "../assets/icon-7.svg"
import Icon8 from "../assets/icon-8.svg"
import Icon9 from "../assets/icon-9.svg"
import Icon10 from "../assets/icon-10.svg"
import Icon11 from "../assets/icon-11.svg"
import Icon12 from "../assets/icon-12.svg"
import Icon13 from "../assets/icon-13.svg"
import Icon14 from "../assets/icon-14.svg"
import Icon15 from "../assets/icon-15.svg"
import ChatUser from "../components/ChatUser";


const Dashboard = () => {
    return (
        <>
            <div className="my-5 text-3xl font-bold  text-primary tex"><h1>Good morning, Alex! 👋</h1></div>
            <div className="border-l-4 border-primary py-4 px-4 mb-5 rounded-md bg-linear-to-r from-[#E6F7F5] via-[#F9FFF9] to-[#EDFBE9]">
                <p>"The future belongs to those who believe in the beauty of their dreams."</p>
                <p>— Eleanor Roosevelt</p>
            </div>
            <div><ChatUser/></div>
            <div className="grid grid-col-1 md:grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
                <div className="md:col-span-2 rounded-md border border-slate-200 p-5">
                    <h2 className="flex gap-2 items-center text-xl font-medium mb-4">
                        <FiTarget className="text-[#EC4899]" /> Today's Focus!
                    </h2>
                    <div className="md:col-span-2 rounded-md border border-slate-200 p-5">
                        <h2 className="flex gap-2 items-center text-xl font-medium mb-3">
                            Study Motion and Energy Concepts
                        </h2>
                        <p className="flex gap-2 items-center mb-4">
                            <FiTarget className="text-[#229E91]" /> Understand speed, velocity, and acceleration
                        </p>
                        <div className="border-b border-slate-200 border-dashed mb-4"></div>
                        <p className="flex gap-2 items-center  mb-4">
                            <MdOutlineAccessTime className="text-[#999999]" /> Solve 5–10 basic numerical problems
                        </p>
                    </div>
                </div>
                <div className="rounded-md border border-slate-200 p-3 py-5 flex flex-col justify-center items-center text-center relative bg-white bg overflow-hidden">
                    <div className="after:content-[url('assets/icon-5.png')] after:absolute after:-bottom-2 after:-left-2.5"></div>
                    <div className="after:content-[url('assets/icon-6.png')] after:absolute after:-bottom-2 after:-right-1 after:overflow-hidden"></div>
                    <div ><img src={Teddy} alt="" /></div>
                    <h3 className="text-[#70AD40] font-medium text-xl mt-4 mb-2">You Are Calm Today</h3>
                    <p className="text-sm text-[#475569] relative z-10">Staying calm helps you think clearly and make better decisions. Take a deep breath and continue your day with a peaceful mind.</p>
                </div>
            </div>
            <div className="rounded-md border border-slate-200 p-5 mb-5">
                <div className="flex justify-between">
                    <h2 className="flex gap-2 items-center text-lg font-medium">
                        <FiMap className="text-primary text-md" /> Career Roadmap
                    </h2>
                    <div className="bg-[#EDF5F0] rounded-full px-4 py-2 text-primary justify-center">View Full Roadmap</div>
                </div>


                <ol className="max-w-5xl flex items-end mt-6" aria-label="Progress">
                    <li className="relative w-full">
                        <div className="flex items-center">
                            <div
                                className="w-6 h-6 shrink-0 border-2 border-green-600 flex items-center justify-center rounded-full bg-transparent md:w-7 md:h-7"
                                aria-hidden="true">
                                <FiCheck className="text-green-600" />
                            </div>
                            <div className="w-full h-0.5 bg-green-600" aria-hidden="true"></div>
                        </div>
                        <span className="block text-xs font-semibold text-green-700 mb-3 mr-2 md:text-sm mt-4">
                            Build Basics <span className="sr-only">(Completed)</span>
                        </span>
                    </li>
                    <li className="relative w-full">
                        <div className="flex items-center">
                            <div
                                className="w-6 h-6 shrink-0 border-2 border-[#475569] flex items-center justify-center rounded-full bg-transparent md:w-7 md:h-7"
                                aria-hidden="true">
                                <FiLock className="text-[#475569]" />
                            </div>
                            <div className="w-full h-0.5 bg-slate-300" aria-hidden="true"></div>
                        </div>
                        <span className="block text-xs font-semibold text-slate-400 mb-3 mr-2 md:text-sm mt-4">
                            Strengthen Concepts <span className="sr-only">(Completed)</span>
                        </span>
                    </li>
                    <li className="relative w-full" aria-current="step">
                        <div className="flex items-center">
                            <div
                                className="w-6 h-6 shrink-0 border-2 border-[#475569] flex items-center justify-center rounded-full bg-transparent md:w-7 md:h-7"
                                aria-hidden="true">
                                <FiLock className="text-[#475569]" />
                            </div>
                            <div className="w-full h-0.5 bg-slate-300" aria-hidden="true"></div>
                        </div>
                        <span className="block text-xs font-semibold text-slate-400 mb-3 mr-2 md:text-sm mt-4">Score in Boards</span>
                    </li>
                    <li className="relative shrink-0">
                        <div className="flex items-center">
                            <div
                                className="w-6 h-6 shrink-0 border-2 border-[#475569] flex items-center justify-center rounded-full bg-transparent md:w-7 md:h-7"
                                aria-hidden="true">
                                <FiLock className="text-[#475569]" />
                            </div>
                        </div>
                        <span className="block text-xs font-semibold text-slate-400 mb-3 md:text-sm mt-4">PCM Stream</span>
                    </li>
                </ol>

                <div className="flex justify-between bg-green-50/30 p-3 mt-5 rounded-lg border border-slate-200">
                    <h2 className="flex gap-2 items-center text-sm font-medium text-primary">
                        <FiMap className="text-primary text-md" /> Next Milestone: Strengthen Concepts
                    </h2>
                    <div className="px-4 py-2 text-primary justify-center">65%</div>
                </div>

            </div>

            <div className="grid grid-col-1 md:grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
                <div className="md:col-span-1 lg:col-span-2">
                    <div className="rounded-md border border-slate-200 p-5 mb-5">

                        <div className="flex justify-between mb-6">
                            <h2 className="flex gap-2 items-center text-lg font-medium">
                                <FiCheckSquare className="text-primary text-md" /> Build Basics
                            </h2>
                        </div>

                        <div className="grid space-y-5">
                            <div className="relative">
                                <div className="flex items-center justify-between p-4 rounded-md border border-slate-200 bg-gray-200/40 blur-[3px] ">
                                    <div className="flex">
                                        <input id="checkbox-des1" type="checkbox" className="w-5 h-5 accent-primary hover:accent-primary cursor-pointer rounded-md mr-2" />
                                        <label htmlFor="checkbox-des1" className=" cursor-pointer">
                                            <h6 className="text-sm font-bold text-gray-600 mb-4">Study Motion and Energy Concepts</h6>
                                            <span className="text-sm font-bold text-[#6A3E00] bg-slate-100 rounded-full py-2 px-4">
                                                Science
                                            </span>
                                        </label>
                                    </div>
                                    <div className="px-4 py-2 rounded-full border border-primary/20 text-primary font-semibold">Continue</div>
                                </div>
                                <div className="flex flex-col items-center justify-center absolute inset-0 text-slate-400/80">
                                    <div><FiLock /></div>
                                    <div>Locked</div>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="flex items-center justify-between p-4 rounded-md border border-slate-200 bg-gray-200/40 blur-xs ">
                                    <div className="flex">
                                        <input id="checkbox-des2" type="checkbox" className="w-5 h-5 accent-primary hover:accent-primary cursor-pointer rounded-md mr-2" />
                                        <label htmlFor="checkbox-des2" className=" cursor-pointer">
                                            <h6 className="text-sm font-bold text-gray-600 mb-4">Study Motion and Energy Concepts</h6>
                                            <span className="text-sm font-bold text-[#6A3E00] bg-slate-100 rounded-full py-2 px-4">
                                                Science
                                            </span>
                                        </label>
                                    </div>
                                    <div className="px-4 py-2 rounded-full border border-primary/20 text-primary font-semibold">Continue</div>
                                </div>
                                <div className="flex flex-col items-center justify-center absolute inset-0 text-slate-400/80">
                                    <div><FiLock /></div>
                                    <div>Locked</div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between p-4 rounded-md border border-slate-200">
                                <div className="flex">
                                    <input id="checkbox-des2" type="checkbox" className="w-5 h-5 accent-primary hover:accent-primary cursor-pointer rounded-md mr-2" />
                                    <label htmlFor="checkbox-des2" className=" cursor-pointer">
                                        <h6 className="text-sm font-bold text-gray-600 mb-4">Study Motion and Energy Concepts</h6>
                                        <span className="text-sm font-bold text-[#6A3E00] bg-slate-100 rounded-full py-2 px-4">
                                            Science
                                        </span>
                                    </label>
                                </div>
                                <div className="px-4 py-2 rounded-full border border-primary/20 text-primary font-semibold">Continue</div>
                            </div>

                            <div className="flex items-center justify-between p-4 rounded-md border border-slate-200">
                                <div className="flex">
                                    <input id="checkbox-des3" type="checkbox" className="w-5 h-5 accent-primary hover:accent-primary cursor-pointer rounded-md mr-2" checked />
                                    <label htmlFor="checkbox-des3" className=" cursor-pointer">
                                        <h6 className="text-sm font-bold text-slate-400 mb-4 line-through">Solve 20 Maths Question Daily</h6>
                                        <span className="text-sm font-bold text-[#008F35] bg-primary/10 rounded-full py-2 px-4">
                                            Maths
                                        </span>
                                    </label>
                                </div>
                            </div>

                            <div className="flex items-center justify-between p-4 rounded-md border border-slate-200">
                                <div className="flex">
                                    <input id="checkbox-des4" type="checkbox" className="w-5 h-5 accent-primary hover:accent-primary cursor-pointer rounded-md mr-2" checked />
                                    <label htmlFor="checkbox-des4" className=" cursor-pointer">
                                        <h6 className="text-sm font-bold text-slate-400 mb-4 line-through">
                                            Watch a Science Concept Video Daily
                                        </h6>
                                        <span className="text-sm font-bold text-[#008F35] bg-primary/10 rounded-full py-2 px-4">
                                            Exploration
                                        </span>
                                    </label>
                                </div>
                            </div>

                            <div className="flex items-center justify-between p-4 rounded-md border border-slate-200">
                                <div className="flex">
                                    <input id="checkbox-des5" type="checkbox" className="w-5 h-5 accent-primary hover:accent-primary cursor-pointer rounded-md mr-2" checked />
                                    <label htmlFor="checkbox-des5" className=" cursor-pointer">
                                        <h6 className="text-sm font-bold text-slate-400 mb-4 line-through">
                                            Follow a Weekly Study Plan
                                        </h6>
                                        <span className="text-sm font-bold text-[#8F0069] bg-[#8F0069]/10 rounded-full py-2 px-4">
                                            Habbit
                                        </span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-md border border-slate-200 p-5 mb-5">
                        <div className="flex items-center gap-x-4 mb-5">
                            <div className="h-12 w-12 bg-[#FFF2DE] rounded-xl flex justify-center items-center">
                                <img src={heartIcon} alt="" />
                            </div>
                            <div className="mb-4">
                                <h3 className="text-lg font-medium">Mind Gym</h3>
                                <p className="text-sm text-[#6B7280]">Suggests mindfulness and focus activities to keep your mind sharp and calm.</p>
                            </div>
                        </div>
                        <div className="grid lg:grid-cols-2 gap-4 mb-4">
                            <div className="p-4 bg-linear-to-l from-[#E4FFFF] to-[#C7E9FF] rounded-md">
                                <div className="flex gap-x-2 mb-5">
                                    <div className="h-10 w-10 bg-white rounded-xl flex justify-center items-center">
                                        <img src={Icon2} alt="" />
                                    </div>
                                    <div className="mb-4">
                                        <h3 className="text-lg font-medium">Breathing Exercises</h3>
                                        <p className="text-sm text-[#6B7280]">Calm and relax</p>
                                    </div>
                                </div>
                                <div className="bg-white/30 p-4 rounded-md flex justify-between items-center text-[#475569] ">
                                    <div className="flex items-center gap-x-2">
                                        <div><img src={timeIcon} alt="" /></div>
                                        <div className="text-sm">3-5 minutes</div>
                                    </div>
                                    <div className="flex items-center text-sm font-medium bg-white rounded-full px-2 py-1">
                                        <div>Start </div>
                                        <FiChevronRight className="ms-2 text-md" />
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-linear-to-l from-[#FEF5DC] to-[#FEEF7B] rounded-md">
                                <div className="flex gap-x-2 mb-5">
                                    <div className="h-10 w-10 bg-white rounded-xl flex justify-center items-center">
                                        <img src={Icon3} alt="" />
                                    </div>
                                    <div className="mb-4">
                                        <h3 className="text-lg font-medium">Focus Exercises</h3>
                                        <p className="text-sm text-[#6B7280]">Boost concentration</p>
                                    </div>
                                </div>
                                <div className="bg-white/30 p-4 rounded-md flex justify-between items-center text-[#475569] ">
                                    <div className="flex items-center gap-x-2">
                                        <div><img src={timeIcon} alt="" /></div>
                                        <div className="text-sm">5-10 minutes</div>
                                    </div>
                                    <div className="flex items-center text-sm font-medium bg-white rounded-full px-2 py-1">
                                        <div>Start </div>
                                        <FiChevronRight className="ms-2 text-md" />
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-linear-to-l from-[#F3E8FF] to-[#CEC3FF] rounded-md">
                                <div className="flex gap-x-2 mb-5">
                                    <div className="h-10 w-10 bg-white rounded-xl flex justify-center items-center">
                                        <img src={Icon4} alt="" />
                                    </div>
                                    <div className="mb-4">
                                        <h3 className="text-lg font-medium">Muscle Relaxation</h3>
                                        <p className="text-sm text-[#6B7280]">Release body tension</p>
                                    </div>
                                </div>
                                <div className="bg-white/30 p-4 rounded-md flex justify-between items-center text-[#475569] ">
                                    <div className="flex items-center gap-x-2">
                                        <div><img src={timeIcon} alt="" /></div>
                                        <div className="text-sm">25-30 minutes</div>
                                    </div>
                                    <div className="flex items-center text-sm font-medium bg-white rounded-full px-2 py-1">
                                        <div>Start </div>
                                        <FiChevronRight className="ms-2 text-md" />
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-linear-to-l from-[#FAE8FF] to-[#FFD1EB] rounded-md">
                                <div className="flex gap-x-2 mb-5">
                                    <div className="h-10 w-10 bg-white rounded-xl flex justify-center items-center">
                                        <img src={Icon5} alt="" />
                                    </div>
                                    <div className="mb-4">
                                        <h3 className="text-lg font-medium">Study Focus Reset</h3>
                                        <p className="text-sm text-[#6B7280]">Sharpen your mind</p>
                                    </div>
                                </div>
                                <div className="bg-white/30 p-4 rounded-md flex justify-between items-center text-[#475569] ">
                                    <div className="flex items-center gap-x-2">
                                        <div><img src={timeIcon} alt="" /></div>
                                        <div className="text-sm">3 minutes</div>
                                    </div>
                                    <div className="flex items-center text-sm font-medium bg-white rounded-full px-2 py-1">
                                        <div>Start </div>
                                        <FiChevronRight className="ms-2 text-md" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div>
                    <div className="rounded-md border border-slate-200 p-5 mb-4">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-x-2">
                                <div><img src={Icon6} alt="" /></div>
                                <div className="font-bold">Mood & Activity Trends</div>
                            </div>
                            <div className="rounded-md border border-slate-200 p-1">This Week</div>
                        </div>
                        <div className="text-xs text-slate-500">
                            Emotional wellbeing & platform engagement <br />based on your daily check-ins.
                        </div>
                        <div className="mt-5 flex justify-between border-b border-slate-200">
                            <div>
                                <div className="mb-1"><img src={Icon7} alt="" /></div>
                                <div className="w-6 h-20 rounded-sm mb-2 bg-linear-65 from-[#9159CB] to-[#E3B3F2]"></div>
                                <div className="text-xs text-slate-400">Mon</div>
                            </div>
                            <div>
                                <div className="mb-1"><img src={Icon8} alt="" /></div>
                                <div className="w-6 h-20 rounded-sm mb-2 bg-linear-65 from-[#82B95A] to-[#C5E489]"></div>
                                <div className="text-xs text-slate-400">Tue</div>
                            </div>
                            <div>
                                <div className="mb-1"><img src={Icon9} alt="" /></div>
                                <div className="w-6 h-20 rounded-sm mb-2 bg-linear-65 from-[#C23587] to-[#FB98CF]"></div>
                                <div className="text-xs text-slate-400">Wed</div>
                            </div>
                            <div>
                                <div className="mb-1"><img src={Icon10} alt="" /></div>
                                <div className="w-6 h-20 rounded-sm mb-2 bg-linear-65 from-[#00BEBF] to-[#8FF7F4]"></div>
                                <div className="text-xs text-slate-400">Thu</div>
                            </div>
                            <div>
                                <div className="mb-1"><img src={Icon11} alt="" /></div>
                                <div className="w-6 h-20 rounded-sm mb-2 bg-linear-65 from-[#EC4242] to-[#FF9393]"></div>
                                <div className="text-xs text-slate-400">Fri</div>
                            </div>
                            <div className="pt-6">
                                <div className="w-6 h-20 rounded-sm mb-2 bg-[#F3F6F7] relative">
                                    <div className="bg-slate-300 h-6 w-full absolute bottom-0 rounded-tl-sm rounded-tr-sm"></div>
                                </div>
                                <div className="text-xs text-slate-400">Sat</div>
                            </div>
                            <div className="pt-6">
                                <div className="w-6 h-20 rounded-sm mb-2 bg-[#F3F6F7]"></div>
                                <div className="text-xs text-slate-400">Sun</div>
                            </div>
                        </div>
                        <div className="flex gap-2 mt-5 pb-5 border-b border-slate-200">
                            <div><img src={Icon12} style={{ width: '40px' }} alt="" /></div>
                            <p>Your mood this week suggests increased stress related to your future.</p>
                        </div>
                        <div className="text-center mt-8">
                            <span className="rounded-full py-2 px-4 bg-[#FDDBFF] text-[#EC4899] font-bold">
                                Based on mood log
                            </span>
                            <div className="text-2xl font-bold text-[#EC4899] my-4">
                                Recommended for You
                            </div>
                            <div className="flex flex-col items-center gap-2 mb-5">
                                <img src={Emma} alt="" style={{ width: "100px" }} />
                                <h3 className="font-bold text-lg">Mukund Tyagi</h3>
                                <p className="text-sm text-[#475569]">(Student Wellbeing Therapist)</p>
                                <div className="flex items-center text-sm text-[#475569]">
                                    <FaStar className="text-[#F59E0B] me-2" />
                                    <span className="text-[#F59E0B] me-2 font-medium">4.2</span> (120+ Sessions)</div>
                            </div>
                            <div className="bg-[#EC4899] px-4 py-2 rounded-lg text-white flex items-center justify-center cursor-pointer">
                                Book a Therapy Session <FiArrowRight className="ms-2" />
                            </div>
                        </div>
                    </div>
                    <div className="rounded-md border border-slate-200 p-5 mb-4">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-x-2">
                                <div><img src={Icon13} alt="" /></div>
                                <div className="font-bold">Skills Progress</div>
                            </div>
                        </div>
                        <div className="flex gap-4 mt-6 mb-4">
                            <div>
                                <div className="h-12 w-12 bg-[#F4ECFB] rounded-lg flex justify-center items-center">
                                    <img src={Icon14} style={{ width: "25px" }} alt="" />
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="flex mb-2">
                                    <p className="flex-1 font-medium">Math Problem Solving</p>
                                    <p>80%</p>
                                </div>

                                <div className="bg-gray-200 rounded-full w-full h-2">
                                    <div className="h-full rounded-full bg-[#229E91] relative flex items-center" style={{ width: "80%" }}>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-4 mt-6 mb-4">
                            <div>
                                <div className="h-12 w-12 bg-[#FFF7ED] rounded-lg flex justify-center items-center">
                                    <img src={Icon15} style={{ width: "25px" }} alt="" />
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="flex mb-2">
                                    <p className="flex-1 font-medium">Science Concepts</p>
                                    <p>70%</p>
                                </div>

                                <div className="bg-gray-200 rounded-full w-full h-2">
                                    <div className="h-full rounded-full bg-[#229E91] relative flex items-center" style={{ width: "70%" }}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;