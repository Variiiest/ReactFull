import React, { useState } from "react";
function JobNav() {
    const [show, setShow] = useState(false);
    const [product, setProduct] = useState(false);
    const [deliverables, setDeliverables] = useState(false);
    const [profile, setProfile] = useState(false);
    return (
        <div className="font-medium">
            <div className={show ? "w-full h-full absolute z-40  transform  translate-x-0 " : "   w-full h-full absolute z-40  transform -translate-x-full"}>
                <div className="jobcolor opacity-50 inset-0 fixed w-full h-full" onClick={() => setShow(!show)} />
                <div className="md:w-96 w-64 z-20 absolute left-0 z-40 top-0 jobcolor shadow flex-col justify-between transition duration-150 ease-in-out h-full">
                    <div className="flex flex-col justify-between h-full">
                        <div className="px-6 pt-4">
                            <div className="flex items-center justify-end">
                                <div id="cross" className=" text-white" onClick={() => setShow(!show)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width={24} height={24} viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <line x1={18} y1={6} x2={6} y2={18} />
                                        <line x1={6} y1={6} x2={18} y2={18} />
                                    </svg>
                                </div>
                            </div>
                            <ul className="f-m-m">
                                <a href="/">
                                    <li className="text-white pt-8">
                                        <div className="flex items-center">
                                            <div className="md:w-6 md:h-6 w-5 h-5">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
                                                    <path d="M7.16667 3H3.83333C3.3731 3 3 3.3731 3 3.83333V7.16667C3 7.6269 3.3731 8 3.83333 8H7.16667C7.6269 8 8 7.6269 8 7.16667V3.83333C8 3.3731 7.6269 3 7.16667 3Z" stroke="#667EEA" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M7.16667 11.6667H3.83333C3.3731 11.6667 3 12.0398 3 12.5V15.8333C3 16.2936 3.3731 16.6667 3.83333 16.6667H7.16667C7.6269 16.6667 8 16.2936 8 15.8333V12.5C8 12.0398 7.6269 11.6667 7.16667 11.6667Z" stroke="#667EEA" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M16.1667 11.6667H12.8333C12.3731 11.6667 12 12.0398 12 12.5V15.8334C12 16.2936 12.3731 16.6667 12.8333 16.6667H16.1667C16.6269 16.6667 17 16.2936 17 15.8334V12.5C17 12.0398 16.6269 11.6667 16.1667 11.6667Z" stroke="#667EEA" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M16.1667 3H12.8333C12.3731 3 12 3.3731 12 3.83333V7.16667C12 7.6269 12.3731 8 12.8333 8H16.1667C16.6269 8 17 7.6269 17 7.16667V3.83333C17 3.3731 16.6269 3 16.1667 3Z" stroke="#667EEA" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                            <p className="text-indigo-500 ml-3 text-lg md:text-2xl">Jobs</p>
                                        </div>
                                    </li>
                                </a>
                                <a href="/" >
                                    <li className="text-white pt-8">
                                        <div className="flex items-center">
                                            <div className="flex items-center">
                                                <div className="md:w-6 md:h-6 w-5 h-5">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="none">
                                                        <path
                                                            d="M2.33333 4.83333H4.83333C5.05435 4.83333 5.26631 4.74554 5.42259 4.58926C5.57887 4.43298 5.66667 4.22101 5.66667 4V3.16667C5.66667 2.72464 5.84226 2.30072 6.15482 1.98816C6.46738 1.67559 6.89131 1.5 7.33333 1.5C7.77536 1.5 8.19928 1.67559 8.51184 1.98816C8.8244 2.30072 9 2.72464 9 3.16667V4C9 4.22101 9.0878 4.43298 9.24408 4.58926C9.40036 4.74554 9.61232 4.83333 9.83333 4.83333H12.3333C12.5543 4.83333 12.7663 4.92113 12.9226 5.07741C13.0789 5.23369 13.1667 5.44565 13.1667 5.66667V8.16667C13.1667 8.38768 13.2545 8.59964 13.4107 8.75592C13.567 8.9122 13.779 9 14 9H14.8333C15.2754 9 15.6993 9.17559 16.0118 9.48816C16.3244 9.80072 16.5 10.2246 16.5 10.6667C16.5 11.1087 16.3244 11.5326 16.0118 11.8452C15.6993 12.1577 15.2754 12.3333 14.8333 12.3333H14C13.779 12.3333 13.567 12.4211 13.4107 12.5774C13.2545 12.7337 13.1667 12.9457 13.1667 13.1667V15.6667C13.1667 15.8877 13.0789 16.0996 12.9226 16.2559C12.7663 16.4122 12.5543 16.5 12.3333 16.5H9.83333C9.61232 16.5 9.40036 16.4122 9.24408 16.2559C9.0878 16.0996 9 15.8877 9 15.6667V14.8333C9 14.3913 8.8244 13.9674 8.51184 13.6548C8.19928 13.3423 7.77536 13.1667 7.33333 13.1667C6.89131 13.1667 6.46738 13.3423 6.15482 13.6548C5.84226 13.9674 5.66667 14.3913 5.66667 14.8333V15.6667C5.66667 15.8877 5.57887 16.0996 5.42259 16.2559C5.26631 16.4122 5.05435 16.5 4.83333 16.5H2.33333C2.11232 16.5 1.90036 16.4122 1.74408 16.2559C1.5878 16.0996 1.5 15.8877 1.5 15.6667V13.1667C1.5 12.9457 1.5878 12.7337 1.74408 12.5774C1.90036 12.4211 2.11232 12.3333 2.33333 12.3333H3.16667C3.60869 12.3333 4.03262 12.1577 4.34518 11.8452C4.65774 11.5326 4.83333 11.1087 4.83333 10.6667C4.83333 10.2246 4.65774 9.80072 4.34518 9.48816C4.03262 9.17559 3.60869 9 3.16667 9H2.33333C2.11232 9 1.90036 8.9122 1.74408 8.75592C1.5878 8.59964 1.5 8.38768 1.5 8.16667V5.66667C1.5 5.44565 1.5878 5.23369 1.74408 5.07741C1.90036 4.92113 2.11232 4.83333 2.33333 4.83333"
                                                            stroke="currentColor"
                                                            strokeWidth={1}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                                <p className="text-white ml-3 text-lg md:text-2xl">Reviews</p>
                                            </div>
                                            <div onClick={() => setProduct(!product)}>
                                                {product ? (
                                                    <div className=" ml-4">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-up" width={14} height={14} viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                            <polyline points="6 15 12 9 18 15" />
                                                        </svg>
                                                    </div>
                                                ) : (
                                                    <div className="ml-4">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width={14} height={14} viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                            <polyline points="6 9 12 15 18 9" />
                                                        </svg>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        {product ? (
                                            <div>
                                                <ul className="my-3">
                                                    <li className="text-base text-indigo-500 py-2 px-6">Best Sellers</li>
                                                    <li className="text-base text-white hover:text-indigo-500 py-2 px-6">Out of Stock</li>
                                                    <li className="text-base text-white hover:text-indigo-500 py-2 px-6">New Products</li>
                                                </ul>
                                            </div>
                                        ) : (
                                            ""
                                        )}
                                    </li>
                                </a>
                                <a href="/" >
                                    <li className="text-white pt-8">
                                        <div className="flex items-center">
                                            <div className="md:w-6 md:h-6 w-5 h-5">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
                                                    <path d="M6.66667 13.3333L8.33334 8.33334L13.3333 6.66667L11.6667 11.6667L6.66667 13.3333Z" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                            <p className="text-white ml-3 text-lg md:text-2xl">Performance</p>
                                        </div>
                                    </li>
                                </a>
                                <a href="/" >
                                    <a href="/" >
                                        <li className="text-white pt-8">
                                            <div className="flex items-center">
                                                <div className="flex items-center">
                                                    <div className="md:w-6 md:h-6 w-5 h-5">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
                                                            <path d="M5.83333 6.66667L2.5 10L5.83333 13.3333" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M14.1667 6.66667L17.5 10L14.1667 13.3333" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M11.6667 3.33333L8.33333 16.6667" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </div>
                                                    <p className="text-white ml-3 text-lg md:text-2xl">Deliverables</p>
                                                </div>
                                                <div onClick={() => setDeliverables(!deliverables)}>
                                                    {deliverables ? (
                                                        <div className=" ml-4">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-up" width={14} height={14} viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                <polyline points="6 15 12 9 18 15" />
                                                            </svg>
                                                        </div>
                                                    ) : (
                                                        <div className="ml-4">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width={14} height={14} viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                <polyline points="6 9 12 15 18 9" />
                                                            </svg>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            {deliverables ? (
                                                <div>
                                                    <ul className="my-3">
                                                        <li className="text-base text-indigo-500 py-2 px-6">Best Sellers</li>
                                                        <li className="text-base text-white hover:text-indigo-500 py-2 px-6">Out of Stock</li>
                                                        <li className="text-base text-white hover:text-indigo-500 py-2 px-6">New Products</li>
                                                    </ul>
                                                </div>
                                            ) : (
                                                ""
                                            )}
                                        </li>
                                    </a>
                                </a>
                            </ul>
                        </div>
                        <div className="w-full">
                            <div className="flex justify-center mb-4 w-full px-6">
                                <div className="relative w-full">
                                    <div className="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width={16} height={16} viewBox="0 0 24 24" strokeWidth={1} stroke="#A0AEC0" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx={10} cy={10} r={7} />
                                            <line x1={21} y1={21} x2={15} y2={15} />
                                        </svg>
                                    </div>
                                    <input className="bg-gray-100 focus:outline-none rounded w-full text-base text-gray-500 pl-10 py-2" type="text" placeholder="Search" />
                                </div>
                            </div>
                            <div className="">
                                <div className="w-full flex items-center justify-between px-6 pt-1">
                                    <div className="flex items-center">
                                        <img alt="profile-pic" src="https://tuk-cdn.s3.amazonaws.com/assets/components/boxed_layout/bl_1.png" className="w-8 h-8 rounded" />
                                        <p className="md:text-xl text-white text-base leading-4 ml-2">Jane Doe</p>
                                    </div>
                                    <ul className="flex">
                                        <li className="cursor-pointer text-white pt-5 pb-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-messages" width={24} height={24} viewBox="0 0 24 24" strokeWidth={1} stroke="#FFFFFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
                                                <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
                                            </svg>
                                        </li>
                                        <li className="cursor-pointer text-white pt-5 pb-3 pl-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bell" width={24} height={24} viewBox="0 0 24 24" strokeWidth={1} stroke="#FFFFFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                                                <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                                            </svg>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Mobile */}
            {/* Navigation starts */}
            <nav className="w-full mx-auto jobcard shadow-2xl relative z-20">
                <div className="container px-6 h-16 flex items-center justify-between mx-auto">
                  
                    <ul className="flex items-center justify-center h-full">
                    <li className="mx-0 mr-12 cursor-pointer">
                      <h1 className="text-3xl font-bold text-indigo-100">edusolve <span className="text-red-500">jobs</span></h1>
                      </li>
                        <li className="cursor-pointer h-full xl:flex items-center text-base text-indigo-100 tracking-normal hidden font-bold">Jobs</li>
                        <li className="cursor-pointer h-full xl:flex items-center text-base text-white ml-0 xl:ml-10 tracking-normal hidden font-bold">Companies</li>
                       
                        <li className="cursor-pointer h-full xl:flex items-center text-base text-white mr-10 tracking-normal hidden ml-6 font-bold">Resources</li>
                        <li className="cursor-pointer h-full xl:flex items-center text-base text-white tracking-normal hidden font-bold">Employer </li>
                    </ul>
                    <div aria-haspopup="true" className="cursor-pointer h-full xl:flex items-center justify-end hidden relative">
                        <ul className="p-2 w-40  jobcard absolute rounded z-40 right-0 shadow mt-64 hidden">
                            <li className="cursor-pointer text-gray-600 text-base leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <circle cx={12} cy={7} r={4} />
                                        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                    </svg>
                                    <span className="ml-2">My Profile</span>
                                </div>
                            </li>
                            <li className="cursor-pointer text-gray-600 text-base leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-help" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <circle cx={12} cy={12} r={9} />
                                    <line x1={12} y1={17} x2={12} y2="17.01" />
                                    <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
                                </svg>
                                <span className="ml-2">Help Center</span>
                            </li>
                            <li className="cursor-pointer text-gray-600 text-base leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-settings" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                    <circle cx={12} cy={12} r={3} />
                                </svg>
                                <span className="ml-2">Account Settings</span>


                            </li>
                            
                        </ul>
                        <div className="rounded">
                            <img className="rounded h-10 w-10 object-cover" src="https://tuk-cdn.s3.amazonaws.com/assets/components/boxed_layout/bl_1.png" alt="logo" />
                        </div>
                        <div className="text-gray-600 ml-2" onClick={() => setProfile(!profile)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <polyline points="6 9 12 15 18 9" />
                            </svg>
                        </div>
                        {profile ? (
                            <ul className="p-2 w-64  jobcard absolute top-0 -ml-2 rounded right-0 shadow mt-14  ">
                                <li className="cursor-pointer text-gray-600 text-base leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx={12} cy={7} r={4} />
                                            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                        </svg>
                                        <span className="ml-2">Profile</span>
                                    </div>
                                </li>
                                <li className="flex xl:hidden cursor-pointer text-gray-600 text-base leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <rect x={4} y={4} width={6} height={6} rx={1} />
                                            <rect x={14} y={4} width={6} height={6} rx={1} />
                                            <rect x={4} y={14} width={6} height={6} rx={1} />
                                            <rect x={14} y={14} width={6} height={6} rx={1} />
                                        </svg>
                                        <span className="ml-2">Dashboard</span>
                                    </div>
                                </li>
                                <li className="flex xl:hidden  cursor-pointer text-gray-600 text-base leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-help" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <circle cx={12} cy={12} r={9} />
                                        <line x1={12} y1={17} x2={12} y2="17.01" />
                                        <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
                                    </svg>
                                    <span className="ml-2">Products</span>
                                </li>
                                <li className="flex xl:hidden cursor-pointer text-gray-600 text-base leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-settings" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                        <circle cx={12} cy={12} r={3} />
                                    </svg>
                                    <span className="ml-2">Performance</span>
                                </li>
                            </ul>
                        ) : (
                            ""
                        )}
                    </div>
                    <div onClick={() => setShow(!show)} className="xl:hidden">
                        <svg aria-label="Main Menu" aria-haspopup="true" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu" width={32} height={32} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <line x1={4} y1={8} x2={20} y2={8} />
                            <line x1={4} y1={16} x2={20} y2={16} />
                        </svg>
                    </div>
                </div>
            </nav>
            {/* Navigation ends */}
            {/* Page title starts */}
            <div className="relative z-10 bg-gray-900 pt-8 pb-16">
                <div className="container px-6 mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between">
                    <div>
                     
                        <h4 className="text-2xl font-bold leading-tight text-gray-100">According to your profile : 56 Matches</h4>
                    </div>
                    <div className="mt-6 lg:mt-0">
                    <button className="flex items-center px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded dark:bg-gray-800 hover:bg-blue-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-blue-500 dark:focus:bg-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{fill: 'rgba(255, 255, 255, 1)', transform: '', msFilter: ''}}><path d="M21,3H5C4.447,3,4,3.447,4,4v2.59c0,0.523,0.213,1.037,0.583,1.407L10,13.414V21c0,0.347,0.18,0.668,0.475,0.851 C10.635,21.95,10.817,22,11,22c0.153,0,0.306-0.035,0.447-0.105l4-2C15.786,19.725,16,19.379,16,19v-5.586l5.417-5.417 C21.787,7.627,22,7.113,22,6.59V4C22,3.447,21.553,3,21,3z M14.293,12.293C14.105,12.48,14,12.734,14,13v5.382l-2,1V13 c0-0.266-0.105-0.52-0.293-0.707L6,6.59V5h14.001l0.002,1.583L14.293,12.293z" /></svg>
        <span className="mx-1">Filter</span>
      </button>
                    </div>
                </div>
            </div>

            <div className="bg-gray-800 pb-10">
                <div className="container px-4 mx-auto">
                    <div className="relative z-10 w-full">
                        <div className="w-full -mt-8 h-auto">
                            <div className="w-full h-auto lg:h-20 mb-6 rounded shadow jobcard">
                                <div className="lg:hidden jobcard w-full relative">
                                    <div className="absolute inset-0 m-auto mr-4 z-0 w-6 h-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-selector" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A0AEC0" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <polyline points="8 9 12 5 16 9" />
                                            <polyline points="16 15 12 19 8 15" />
                                        </svg>
                                    </div>
                                    <select aria-label="Selected tab" className="form-select block w-full p-3  rounded text-gray-600 appearance-none bg-transparent relative z-10">
                                        <option selected className="text-base text-gray-600">
                                            Quarterly{" "}
                                        </option>
                                        <option className="text-base text-gray-600">My Profile </option>
                                        <option className="text-base text-gray-600">Forecasting </option>
                                        <option className="text-base text-gray-600">Ratings </option>
                                        <option className="text-base text-gray-600">History Sheet </option>
                                        <option className="text-base text-gray-600">Account Settings </option>
                                    </select>
                                </div>
                                <ul className="hidden lg:flex flex-row items-center h-full">
                                    <li className="ml-4 my-2 lg:my-0 rounded text-base text-gray-100 px-4 py-2 bg-blue-500">Jobs</li>
                                    <li className="pl-10 my-0 text-base text-gray-600">Applied Jobs</li>
                                    <li className="pl-10 my-0 text-base text-gray-600">Saved Jobs</li>
                                    <li className="pl-10 my-0 text-base text-gray-600">Archived Jobs</li>
                                    <li className="pl-10 my-0 text-base text-gray-600">History Sheet</li>
                                    <li className="pl-10 my-0 text-base text-gray-600">Account Settings</li>
                           
                                </ul>
                            </div>
                            
                            
        <div className="container mx-auto">
         <div className="h-full">
                 
          <div className="flex flex-wrap -m-2">
            <div className="p-2 mx-auto mb-2 lg:w-1/3 lg:mb-0">
              <div className="h-full text-left px-4 py-4 rounded-lg jobcard ">
                <a href="/" className="inline-flex items-center">
                  <img alt="testimonial" className="inline-block object-cover object-center w-16 h-16 mb-4 bg-gray-100 rounded" src="https://dummyimage.com/302x302/94a3b8/ffffff" /> <span className="flex flex-col flex-grow pl-4">
                    <span className="font-bold text-lg text-gray-100 title-font">Software developer </span>
                    <span className="text-sm text-gray-500 uppercase font-bold">Type: Remote Full Time</span>
                  </span>
                </a>
              
                <p className="text-base font-medium leading-relaxed text-gray-100 mb-2">Skate ipsum dolor sit amet, slam birdie wheels ollie darkslide egg plant. Baseplate 540 helipop flypaper feeble griptape. Nollie deck street bluntslide half-cab yeah. ....</p>
                <span class="inline-block py-1 px-2 rounded-full bg-blue-700 text-indigo-100 text-xs font-medium tracking-widest">CATEGORY X</span>
                <span class="inline-block py-1 px-2 ml-2 rounded-full bg-blue-700 text-indigo-100 text-xs font-medium tracking-widest">CATEGORY X</span>
                <span class="inline-block py-1 px-2 ml-2 rounded-full bg-blue-700 text-indigo-100 text-xs font-medium tracking-widest">CATEGORY X</span>
            
                <div className="flex items-center flex-wrap mt-4 ">
        <a href="/" className="text-indigo-100 inline-flex items-center  lg:mb-0 px-4 py-2 bg-blue-800 rounded-md font-medium ">Apply Now
         
        </a>
        <span className="text-gray-100 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1">
       
        </span>
     
      </div>
              </div>
            
            </div>
            <div className="p-2 mx-auto mb-2 lg:w-1/3 lg:mb-0">
              <div className="h-full text-left px-4 py-4 rounded-lg jobcard ">
                <a href="/" className="inline-flex items-center">
                  <img alt="testimonial" className="inline-block object-cover object-center w-16 h-16 mb-4 bg-gray-100 rounded" src="https://dummyimage.com/302x302/94a3b8/ffffff" /> <span className="flex flex-col flex-grow pl-4">
                    <span className="font-bold text-lg text-gray-100 title-font">Software developer </span>
                    <span className="text-sm text-gray-500 uppercase font-bold">Type: Remote Full Time</span>
                  </span>
                </a>
              
                <p className="text-base font-medium leading-relaxed text-gray-100 mb-2">Skate ipsum dolor sit amet, slam birdie wheels ollie darkslide egg plant. Baseplate 540 helipop flypaper feeble griptape. Nollie deck street bluntslide half-cab yeah. ....</p>
                <span class="inline-block py-1 px-2 rounded-full bg-blue-700 text-indigo-100 text-xs font-medium tracking-widest">CATEGORY X</span>
                <span class="inline-block py-1 px-2 ml-2 rounded-full bg-blue-700 text-indigo-100 text-xs font-medium tracking-widest">CATEGORY X</span>
                <span class="inline-block py-1 px-2 ml-2 rounded-full bg-blue-700 text-indigo-100 text-xs font-medium tracking-widest">CATEGORY X</span>
            
                <div className="flex items-center flex-wrap mt-4 ">
        <a href="/" className="text-indigo-100 inline-flex items-center  lg:mb-0 px-4 py-2 bg-blue-800 rounded-md font-medium ">Apply Now
         
        </a>
        <span className="text-gray-100 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1">
       
        </span>
     
      </div>
              </div>
            </div>
            <div className="p-2 mx-auto mb-2 lg:w-1/3 lg:mb-0">
              <div className="h-full text-left px-4 py-4 rounded-lg jobcard ">
                <a href="/" className="inline-flex items-center">
                  <img alt="testimonial" className="inline-block object-cover object-center w-16 h-16 mb-4 bg-gray-100 rounded" src="https://dummyimage.com/302x302/94a3b8/ffffff" /> <span className="flex flex-col flex-grow pl-4">
                    <span className="font-bold text-lg text-gray-100 title-font">Software developer </span>
                    <span className="text-sm text-gray-500 uppercase font-bold">Type: Remote Full Time</span>
                  </span>
                </a>
              
                <p className="text-base font-medium leading-relaxed text-gray-100 mb-2">Skate ipsum dolor sit amet, slam birdie wheels ollie darkslide egg plant. Baseplate 540 helipop flypaper feeble griptape. Nollie deck street bluntslide half-cab yeah. ....</p>
                <span class="inline-block py-1 px-2 rounded-full bg-blue-700 text-indigo-100 text-xs font-medium tracking-widest">CATEGORY X</span>
                <span class="inline-block py-1 px-2 ml-2 rounded-full bg-blue-700 text-indigo-100 text-xs font-medium tracking-widest">CATEGORY X</span>
                <span class="inline-block py-1 px-2 ml-2 rounded-full bg-blue-700 text-indigo-100 text-xs font-medium tracking-widest">CATEGORY X</span>
            
                <div className="flex items-center flex-wrap mt-4 ">
        <a href="/" className="text-indigo-100 inline-flex items-center  lg:mb-0 px-4 py-2 bg-blue-800 rounded-md font-medium ">Apply Now
         
        </a>
        <span className="text-gray-100 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1">
       
        </span>
     
      </div>
              </div>
            </div>
            <div className="p-2 mx-auto mb-2 lg:w-1/3 lg:mb-0">
              <div className="h-full text-left px-4 py-4 rounded-lg jobcard ">
                <a href="/" className="inline-flex items-center">
                  <img alt="testimonial" className="inline-block object-cover object-center w-16 h-16 mb-4 bg-gray-100 rounded" src="https://dummyimage.com/302x302/94a3b8/ffffff" /> <span className="flex flex-col flex-grow pl-4">
                    <span className="font-bold text-lg text-gray-100 title-font">Software developer </span>
                    <span className="text-sm text-gray-500 uppercase font-bold">Type: Remote Full Time</span>
                  </span>
                </a>
              
                <p className="text-base font-medium leading-relaxed text-gray-100 mb-2">Skate ipsum dolor sit amet, slam birdie wheels ollie darkslide egg plant. Baseplate 540 helipop flypaper feeble griptape. Nollie deck street bluntslide half-cab yeah. ....</p>
                <span class="inline-block py-1 px-2 rounded-full bg-blue-700 text-indigo-100 text-xs font-medium tracking-widest">CATEGORY X</span>
                <span class="inline-block py-1 px-2 ml-2 rounded-full bg-blue-700 text-indigo-100 text-xs font-medium tracking-widest">CATEGORY X</span>
                <span class="inline-block py-1 px-2 ml-2 rounded-full bg-blue-700 text-indigo-100 text-xs font-medium tracking-widest">CATEGORY X</span>
            
                <div className="flex items-center flex-wrap mt-4 ">
        <a href="/" className="text-indigo-100 inline-flex items-center  lg:mb-0 px-4 py-2 bg-blue-800 rounded-md font-medium ">Apply Now
         
        </a>
        <span className="text-gray-100 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1">
       
        </span>
     
      </div>
              </div>
            </div>
            <div className="p-2 mx-auto mb-2 lg:w-1/3 lg:mb-0">
              <div className="h-full text-left px-4 py-4 rounded-lg jobcard ">
                <a href="/" className="inline-flex items-center">
                  <img alt="testimonial" className="inline-block object-cover object-center w-16 h-16 mb-4 bg-gray-100 rounded" src="https://dummyimage.com/302x302/94a3b8/ffffff" /> <span className="flex flex-col flex-grow pl-4">
                    <span className="font-bold text-lg text-gray-100 title-font">Software developer </span>
                    <span className="text-sm text-gray-500 uppercase font-bold">Type: Remote Full Time</span>
                  </span>
                </a>
              
                <p className="text-base font-medium leading-relaxed text-gray-100 mb-2">Skate ipsum dolor sit amet, slam birdie wheels ollie darkslide egg plant. Baseplate 540 helipop flypaper feeble griptape. Nollie deck street bluntslide half-cab yeah. ....</p>
                <span class="inline-block py-1 px-2 rounded-full bg-blue-700 text-indigo-100 text-xs font-medium tracking-widest">CATEGORY X</span>
                <span class="inline-block py-1 px-2 ml-2 rounded-full bg-blue-700 text-indigo-100 text-xs font-medium tracking-widest">CATEGORY X</span>
                <span class="inline-block py-1 px-2 ml-2 rounded-full bg-blue-700 text-indigo-100 text-xs font-medium tracking-widest">CATEGORY X</span>
            
                <div className="flex items-center flex-wrap mt-4 ">
        <a href="/" className="text-indigo-100 inline-flex items-center  lg:mb-0 px-4 py-2 bg-blue-800 rounded-md font-medium ">Apply Now
         
        </a>
        <span className="text-gray-100 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1">
       
        </span>
     
      </div>
              </div>
            </div>
          
            <div className="p-2 mx-auto mb-2 lg:w-1/3 lg:mb-0">
              <div className="h-full text-left px-4 py-4 rounded-lg jobcard ">
                <a href="/" className="inline-flex items-center">
                  <img alt="testimonial" className="inline-block object-cover object-center w-16 h-16 mb-4 bg-gray-100 rounded" src="https://dummyimage.com/302x302/94a3b8/ffffff" /> <span className="flex flex-col flex-grow pl-4">
                    <span className="font-bold text-lg text-gray-100 title-font">Software developer </span>
                    <span className="text-sm text-gray-500 uppercase font-bold">Type: Remote Full Time</span>
                  </span>
                </a>
              
                <p className="text-base font-medium leading-relaxed text-gray-100 mb-2">Skate ipsum dolor sit amet, slam birdie wheels ollie darkslide egg plant. Baseplate 540 helipop flypaper feeble griptape. Nollie deck street bluntslide half-cab yeah. ....</p>
                <span class="inline-block py-1 px-2 rounded-full bg-blue-700 text-indigo-100 text-xs font-medium tracking-widest">CATEGORY X</span>
                <span class="inline-block py-1 px-2 ml-2 rounded-full bg-blue-700 text-indigo-100 text-xs font-medium tracking-widest">CATEGORY X</span>
                <span class="inline-block py-1 px-2 ml-2 rounded-full bg-blue-700 text-indigo-100 text-xs font-medium tracking-widest">CATEGORY X</span>
            
                <div className="flex items-center flex-wrap mt-4 ">
        <a href="/" className="text-indigo-100 inline-flex items-center  lg:mb-0 px-4 py-2 bg-blue-800 rounded-md font-medium ">Apply Now
         
        </a>
        <span className="text-gray-100 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1">
       
        </span>
     
      </div>
              </div>
            </div>
            <div className="p-2 mx-auto mb-2 lg:w-1/3 lg:mb-0">
              <div className="h-full text-left px-4 py-4 rounded-lg jobcard ">
                <a href="/" className="inline-flex items-center">
                  <img alt="testimonial" className="inline-block object-cover object-center w-16 h-16 mb-4 bg-gray-100 rounded" src="https://dummyimage.com/302x302/94a3b8/ffffff" /> <span className="flex flex-col flex-grow pl-4">
                    <span className="font-bold text-lg text-gray-100 title-font">Software developer </span>
                    <span className="text-sm text-gray-500 uppercase font-bold">Type: Remote Full Time</span>
                  </span>
                </a>
              
                <p className="text-base font-medium leading-relaxed text-gray-100 mb-2">Skate ipsum dolor sit amet, slam birdie wheels ollie darkslide egg plant. Baseplate 540 helipop flypaper feeble griptape. Nollie deck street bluntslide half-cab yeah. ....</p>
                <span class="inline-block py-1 px-2 rounded-full bg-blue-700 text-indigo-100 text-xs font-medium tracking-widest">CATEGORY X</span>
                <span class="inline-block py-1 px-2 ml-2 rounded-full bg-blue-700 text-indigo-100 text-xs font-medium tracking-widest">CATEGORY X</span>
                <span class="inline-block py-1 px-2 ml-2 rounded-full bg-blue-700 text-indigo-100 text-xs font-medium tracking-widest">CATEGORY X</span>
            
                <div className="flex items-center flex-wrap mt-4 ">
        <a href="/" className="text-indigo-100 inline-flex items-center  lg:mb-0 px-4 py-2 bg-blue-800 rounded-md font-medium ">Apply Now
         
        </a>
        <span className="text-gray-100 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1">
       
        </span>
     
      </div>
              </div>
            </div>
            <div className="p-2 mx-auto mb-2 lg:w-1/3 lg:mb-0">
              <div className="h-full text-left px-4 py-4 rounded-lg jobcard ">
                <a href="/" className="inline-flex items-center">
                  <img alt="testimonial" className="inline-block object-cover object-center w-16 h-16 mb-4 bg-gray-100 rounded" src="https://dummyimage.com/302x302/94a3b8/ffffff" /> <span className="flex flex-col flex-grow pl-4">
                    <span className="font-bold text-lg text-gray-100 title-font">Software developer </span>
                    <span className="text-sm text-gray-500 uppercase font-bold">Type: Remote Full Time</span>
                  </span>
                </a>
              
                <p className="text-base font-medium leading-relaxed text-gray-100 mb-2">Skate ipsum dolor sit amet, slam birdie wheels ollie darkslide egg plant. Baseplate 540 helipop flypaper feeble griptape. Nollie deck street bluntslide half-cab yeah. ....</p>
                <span class="inline-block py-1 px-2 rounded-full bg-blue-700 text-indigo-100 text-xs font-medium tracking-widest">CATEGORY X</span>
                <span class="inline-block py-1 px-2 ml-2 rounded-full bg-blue-700 text-indigo-100 text-xs font-medium tracking-widest">CATEGORY X</span>
                <span class="inline-block py-1 px-2 ml-2 rounded-full bg-blue-700 text-indigo-100 text-xs font-medium tracking-widest">CATEGORY X</span>
            
                <div className="flex items-center flex-wrap mt-4 ">
        <a href="/" className="text-indigo-100 inline-flex items-center  lg:mb-0 px-4 py-2 bg-blue-800 rounded-md font-medium ">Apply Now
         
        </a>
        <span className="text-gray-100 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1">
       
        </span>
     
      </div>
              </div>
            </div>
            <div className="p-2 mx-auto mb-2 lg:w-1/3 lg:mb-0">
              <div className="h-full text-left px-4 py-4 rounded-lg jobcard ">
                <a href="/" className="inline-flex items-center">
                  <img alt="testimonial" className="inline-block object-cover object-center w-16 h-16 mb-4 bg-gray-100 rounded" src="https://dummyimage.com/302x302/94a3b8/ffffff" /> <span className="flex flex-col flex-grow pl-4">
                    <span className="font-bold text-lg text-gray-100 title-font">Software developer </span>
                    <span className="text-sm text-gray-500 uppercase font-bold">Type: Remote Full Time</span>
                  </span>
                </a>
              
                <p className="text-base font-medium leading-relaxed text-gray-100 mb-2">Skate ipsum dolor sit amet, slam birdie wheels ollie darkslide egg plant. Baseplate 540 helipop flypaper feeble griptape. Nollie deck street bluntslide half-cab yeah. ....</p>
                <span class="inline-block py-1 px-2 rounded-full bg-blue-700 text-indigo-100 text-xs font-medium tracking-widest">CATEGORY X</span>
                <span class="inline-block py-1 px-2 ml-2 rounded-full bg-blue-700 text-indigo-100 text-xs font-medium tracking-widest">CATEGORY X</span>
                <span class="inline-block py-1 px-2 ml-2 rounded-full bg-blue-700 text-indigo-100 text-xs font-medium tracking-widest">CATEGORY X</span>
            
                <div className="flex items-center flex-wrap mt-4 ">
        <a href="/" className="text-indigo-100 inline-flex items-center  lg:mb-0 px-4 py-2 bg-blue-800 rounded-md font-medium ">Apply Now
         
        </a>
        <span className="text-gray-100 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1">
       
        </span>
     
      </div>
              </div>
            </div>
            <div className="p-2 mx-auto mb-2 lg:w-1/3 lg:mb-0">
              <div className="h-full text-left px-4 py-4 rounded-lg jobcard ">
                <a href="/" className="inline-flex items-center">
                  <img alt="testimonial" className="inline-block object-cover object-center w-16 h-16 mb-4 bg-gray-100 rounded" src="https://dummyimage.com/302x302/94a3b8/ffffff" /> <span className="flex flex-col flex-grow pl-4">
                    <span className="font-bold text-lg text-gray-100 title-font">Software developer </span>
                    <span className="text-sm text-gray-500 uppercase font-bold">Type: Remote Full Time</span>
                  </span>
                </a>
              
                <p className="text-base font-medium leading-relaxed text-gray-100 mb-2">Skate ipsum dolor sit amet, slam birdie wheels ollie darkslide egg plant. Baseplate 540 helipop flypaper feeble griptape. Nollie deck street bluntslide half-cab yeah. ....</p>
                <span class="inline-block py-1 px-2 rounded-full bg-blue-700 text-indigo-100 text-xs font-medium tracking-widest">CATEGORY X</span>
                <span class="inline-block py-1 px-2 ml-2 rounded-full bg-blue-700 text-indigo-100 text-xs font-medium tracking-widest">CATEGORY X</span>
                <span class="inline-block py-1 px-2 ml-2 rounded-full bg-blue-700 text-indigo-100 text-xs font-medium tracking-widest">CATEGORY X</span>
            
                <div className="flex items-center flex-wrap mt-4 ">
        <a href="/" className="text-indigo-100 inline-flex items-center  lg:mb-0 px-4 py-2 bg-blue-800 rounded-md font-medium ">Apply Now
         
        </a>
        <span className="text-gray-100 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1">
       
        </span>
     
      </div>
              </div>
            </div>
            <div className="p-2 mx-auto mb-2 lg:w-1/3 lg:mb-0">
              <div className="h-full text-left px-4 py-4 rounded-lg jobcard ">
                <a href="/" className="inline-flex items-center">
                  <img alt="testimonial" className="inline-block object-cover object-center w-16 h-16 mb-4 bg-gray-100 rounded" src="https://dummyimage.com/302x302/94a3b8/ffffff" /> <span className="flex flex-col flex-grow pl-4">
                    <span className="font-bold text-lg text-gray-100 title-font">Software developer </span>
                    <span className="text-sm text-gray-500 uppercase font-bold">Type: Remote Full Time</span>
                  </span>
                </a>
              
                <p className="text-base font-medium leading-relaxed text-gray-100 mb-2">Skate ipsum dolor sit amet, slam birdie wheels ollie darkslide egg plant. Baseplate 540 helipop flypaper feeble griptape. Nollie deck street bluntslide half-cab yeah. ....</p>
                <span class="inline-block py-1 px-2 rounded-full bg-blue-700 text-indigo-100 text-xs font-medium tracking-widest">CATEGORY X</span>
                <span class="inline-block py-1 px-2 ml-2 rounded-full bg-blue-700 text-indigo-100 text-xs font-medium tracking-widest">CATEGORY X</span>
                <span class="inline-block py-1 px-2 ml-2 rounded-full bg-blue-700 text-indigo-100 text-xs font-medium tracking-widest">CATEGORY X</span>
            
                <div className="flex items-center flex-wrap mt-4 ">
        <a href="/" className="text-indigo-100 inline-flex items-center  lg:mb-0 px-4 py-2 bg-blue-800 rounded-md font-medium ">Apply Now
         
        </a>
        <span className="text-gray-100 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1">
       
        </span>
     
      </div>
              </div>
            </div>
            <div className="p-2 mx-auto mb-2 lg:w-1/3 lg:mb-0">
              <div className="h-full text-left px-4 py-4 rounded-lg jobcard ">
                <a href="/" className="inline-flex items-center">
                  <img alt="testimonial" className="inline-block object-cover object-center w-16 h-16 mb-4 bg-gray-100 rounded" src="https://dummyimage.com/302x302/94a3b8/ffffff" /> <span className="flex flex-col flex-grow pl-4">
                    <span className="font-bold text-lg text-gray-100 title-font">Software developer </span>
                    <span className="text-sm text-gray-500 uppercase font-bold">Type: Remote Full Time</span>
                  </span>
                </a>
              
                <p className="text-base font-medium leading-relaxed text-gray-100 mb-2">Skate ipsum dolor sit amet, slam birdie wheels ollie darkslide egg plant. Baseplate 540 helipop flypaper feeble griptape. Nollie deck street bluntslide half-cab yeah. ....</p>
                <span class="inline-block py-1 px-2 rounded-full bg-blue-700 text-indigo-100 text-xs font-medium tracking-widest">CATEGORY X</span>
                <span class="inline-block py-1 px-2 ml-2 rounded-full bg-blue-700 text-indigo-100 text-xs font-medium tracking-widest">CATEGORY X</span>
                <span class="inline-block py-1 px-2 ml-2 rounded-full bg-blue-700 text-indigo-100 text-xs font-medium tracking-widest">CATEGORY X</span>
            
                <div className="flex items-center flex-wrap mt-4 ">
        <a href="/" className="text-indigo-100 inline-flex items-center  lg:mb-0 px-4 py-2 bg-blue-800 rounded-md font-medium ">Apply Now
         
        </a>
        <span className="text-gray-100 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1">
       
        </span>
     
      </div>
              </div>
            </div>
          
          </div>
                      </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JobNav;
