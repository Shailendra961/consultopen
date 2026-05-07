
import {
    FiMap,
    FiCheck,
    FiLock,
    FiTarget,
    FiArrowRight
} from "react-icons/fi"
import { IoLogoYoutube } from "react-icons/io5";
import { FaStar, FaFilePdf } from "react-icons/fa";
import Icon16 from "../assets/icon-16.svg"
import Icon17 from "../assets/icon-17.svg"
import Icon18 from "../assets/icon-18.svg"
import Icon19 from "../assets/icon-19.svg"
import IconImg7 from "../assets/icon-7.png"
import Emma from "../assets/Emma.png"


const CareerRoadmap = () => {
    return (
        <>
            <div className="flex justify-between items-center mt-5">
                <div className="flex items-center gap-x-2">
                    <div><FiMap /></div>
                    <div className="font-bold text-xl">Sessions</div>
                </div>
            </div>
            <div className="text-xs text-slate-500 mb-5">
                Track your learning milestones and prepare for the PCM stream selection.
            </div>

            <div className="grid grid-col-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="md:col-span-1 lg:col-span-2">
                    <div className="rounded-md border border-slate-200 p-5">
                        <div>
                            <ol className="relative border-s border-slate-400">
                                <li className="mb-10 ms-7">
                                    <div className="border-2 border-primary rounded-lg p-4">
                                        <span className="absolute top-0 flex items-center justify-center w-8 h-8 rounded-full -inset-s-4 border border-primary bg-primary text-white">
                                            <FiCheck />
                                        </span>
                                        <div className="flex justify-between">
                                            <div>
                                                <h3 className="text-lg font-bold">Build Basics</h3>
                                            </div>
                                            <div className="text-[#0891B2] flex items-center gap-2 bg-primary/10 px-4 rounded-full">
                                                <div><img src={Icon16} style={{ width: "16px" }} alt="" /></div>
                                                <div>In Progress</div>
                                            </div>
                                        </div>
                                        <p className="text-sm text-slate-500">
                                            You'll built a strong foundation in foundational math and science principles.
                                        </p>
                                        <div className="w-full mt-5">
                                            <div className="flex mb-2">
                                                <p className="flex-1 font-medium">3 of 6 tasks completed</p>
                                                <p>60%</p>
                                            </div>
                                            <div className="bg-gray-200 rounded-full w-full h-2">
                                                <div className="h-full rounded-full bg-[#0891B2] relative flex items-center" style={{ width: "60%" }}>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="grid gap-5 mt-6">
                                            <div className="relative">
                                                <div className="flex items-center justify-between p-4 rounded-md border border-slate-200 bg-gray-200/40 blur-[3px]">
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
                                                <div className="flex items-center justify-between p-4 rounded-md border border-slate-200 bg-gray-200/40 blur-[3px]">
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
                                                <div className="px-4 py-2 w-18 h-18 rounded-full border-4 border-primary flex flex-col justify-center items-center">
                                                    <div className="font-semibold">98%</div>
                                                    <div className="text-xs text-slate-500">score</div>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between p-4 rounded-md border border-slate-200">
                                                <div className="flex">
                                                    <input id="checkbox-des2" type="checkbox" className="w-5 h-5 accent-primary hover:accent-primary cursor-pointer rounded-md mr-2" />
                                                    <label htmlFor="checkbox-des2" className=" cursor-pointer">
                                                        <h6 className="text-sm font-bold text-slate-400 mb-4 line-through">
                                                            Watch a Science Concept Video
                                                        </h6>
                                                        <span className="text-sm font-bold text-[#DB4141] bg-[#DB4141]/10 rounded-full py-2 px-4">
                                                            Video • 10 Mins
                                                        </span>
                                                    </label>
                                                </div>
                                                <div className="px-4 py-2 rounded-full border border-primary/20 text-slate-400 font-semibold">Completed</div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="mb-10 ms-7">
                                    <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -inset-s-4 border border-slate-400 bg-slate-100">
                                        <FiLock className="text-[#475569]" />
                                    </span>
                                    <div>
                                        <div className="flex justify-between">
                                            <div>
                                                <h3 className="text-lg font-bold">Strengthen Concepts</h3>
                                            </div>
                                            <div className="flex items-center gap-2 bg-slate-100/50 px-4 rounded-full">
                                                <div><FiLock className="text-slate-400" /></div>
                                                <div className="text-slate-400">Locked</div>
                                            </div>
                                        </div>
                                        <p className="text-sm text-slate-500">
                                            Dive deeper into advanced topics to prepare for your board exams.
                                        </p>
                                    </div>
                                </li>
                                <li className="mb-10 ms-7">
                                    <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -inset-s-4 border border-slate-400 bg-slate-100">
                                        <FiLock className="text-[#475569]" />
                                    </span>
                                    <div>
                                        <div className="flex justify-between">
                                            <div>
                                                <h3 className="text-lg font-bold">Score in Boards</h3>
                                            </div>
                                            <div className="flex items-center gap-2 bg-slate-100/50 px-4 rounded-full">
                                                <div><FiLock className="text-slate-400" /></div>
                                                <div className="text-slate-400">Locked</div>
                                            </div>
                                        </div>
                                        <p className="text-sm text-slate-500">
                                            Achieve target scores in preliminary and final board examinations.
                                        </p>
                                    </div>
                                </li>
                                <li className="ms-7">
                                    <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -inset-s-4 border border-slate-400 bg-slate-100">
                                        <FiLock className="text-[#475569]" />
                                    </span>
                                    <div>
                                        <div className="flex justify-between">
                                            <div>
                                                <h3 className="text-lg font-bold">PCM Stream Selection</h3>
                                            </div>
                                            <div className="flex items-center gap-2 bg-slate-100/50 px-4 rounded-full">
                                                <div><FiLock className="text-slate-400" /></div>
                                                <div className="text-slate-400">Locked</div>
                                            </div>
                                        </div>
                                        <p className="text-sm text-slate-500">
                                            Finalize stream choice based on aptitude and board results.
                                        </p>
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="rounded-md border border-slate-200 mb-4">
                        <div className="p-5 ">
                            <div className="flex justify-between items-center mb-5">
                                <div className="flex items-center gap-x-2">
                                    <div><FiTarget className="text-[#F59E0B]" /></div>
                                    <div className="font-bold">Journey Progress</div>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-center mt-6">
                                    <div className="relative w-24 h-24">
                                        <svg className="w-full h-full transform -rotate-180">
                                            <circle cx="48" cy="48" r="42" stroke="#EDF5F5" strokeWidth="8" fill="transparent" />
                                            <circle cx="48" cy="48" r="42" stroke="#F59E0B" strokeWidth="8" fill="transparent" strokeLinecap="round" strokeDasharray="264" strokeDashoffset="198" />
                                        </svg>
                                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                                            <span className="text-base text-slate-500 font-medium">35%</span>
                                            <div className="text-xs text-slate-400">Complete</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="text-slate-300" />
                        <div className="p-5">
                            <div className="flex justify-center items-center gap-6 text-center">
                                <div>
                                    <div className="text-lg font-semibold">3</div>
                                    <div className="text-slate-400 text-sm">Task Done</div>
                                </div>
                                <div>
                                    <div className="text-lg font-semibold">1</div>
                                    <div className="text-slate-400 text-sm">Milestones</div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="rounded-md border border-slate-200 p-10 mb-4 bg">
                        <div className="flex justify-center items-center mb-5">
                            <div className="flex items-center gap-x-2">
                                <div><img src={Icon17} alt="" /></div>
                                <div className="font-bold text-[#10B981] text-lg">Special Recommendation</div>
                            </div>
                        </div>
                        <div className="text-center mt-8">
                            <div className="font-bold text-lg mb-2">Need Help Planning?</div>
                            <div className="text-sm text-[#475569] mb-5">
                                Discuss your current progress and board preparation strategy.
                            </div>
                            <div className="flex flex-col items-center gap-2 mb-5 border border-slate-300 rounded-md p-4">
                                <img src={Emma} alt="" style={{ width: "100px" }} />
                                <h3 className="font-bold text-lg">Mukund Tyagi</h3>
                                <p className="text-sm text-[#475569]">(Academic Planner & Counsellor)</p>
                                <div className="flex items-center text-sm text-[#475569]">
                                    <span className="me-3 text-[#475569]">Rating</span>
                                    <FaStar className="text-[#F59E0B] me-2" />
                                    <span className="text-[#F59E0B] me-2 font-medium"> 4.2</span>
                                </div>
                            </div>
                            <div className="bg-[#10B981] px-4 lg:px-1 py-2 rounded-lg text-white flex items-center justify-center cursor-pointer">
                                Book a Therapy Session <FiArrowRight className="ms-1" />
                            </div>
                        </div>
                    </div>
                    <div className="rounded-md border border-slate-200 p-5 mb-4">
                        <div>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-x-2">
                                    <div><img src={IconImg7} alt="" /></div>
                                    <div className="font-bold">Quick Learning Resources</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 mt-6 mb-4 bg-slate-100 rounded-md p-4">
                                <div>
                                    <div className="h-12 w-12 bg-[#FF0000]/10 rounded-lg flex justify-center items-center">
                                        <IoLogoYoutube className="text-[#FF0000]" />
                                    </div>
                                </div>
                                <div className="w-full">
                                    <div className="mb-2">
                                        <p className="font-semibold">Motion & Energy Explained in 10 Minutes</p>
                                        <div className="text-sm text-slate-500">Channel: Khan Academy</div>
                                    </div>
                                </div>
                                <div>
                                    <img src={Icon18} alt="" style={{ width: "40px" }} className="cursor-pointer" />
                                </div>
                            </div>
                            <div className="flex items-center gap-4 mb-4 bg-slate-100 rounded-md p-4">
                                <div>
                                    <div className="h-12 w-12 bg-[#FF0000]/10 rounded-lg flex justify-center items-center">
                                        <FaFilePdf className="text-[#FF0000]" />
                                    </div>
                                </div>
                                <div className="w-full">
                                    <div className="mb-2">
                                        <p className="font-semibold">Motion & Energy Pdf</p>
                                        <div className="text-sm text-slate-500">NCERT</div>
                                    </div>
                                </div>
                                <div>
                                    <img src={Icon19} alt="" style={{ width: "40px" }} className="cursor-pointer" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CareerRoadmap;