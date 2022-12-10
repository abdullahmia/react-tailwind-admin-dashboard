import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { CiBellOn } from "react-icons/ci";
import { Link } from 'react-router-dom';
import avatar from '../../assets/avatar.jpg';

const Header = () => {
    return (
        <nav className="bg-white border-b border-gray-200 fixed z-30 w-full">
            <div className="px-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start">
                        <button id="toggleSidebarMobile" aria-expanded="true" aria-controls="sidebar" className="lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded">
                            <svg id="toggleSidebarMobileHamburger" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                            </svg>
                            <svg id="toggleSidebarMobileClose" className="w-6 h-6 hidden" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                            </svg>
                        </button>
                        <a href="#" className="text-xl font-bold flex items-center lg:ml-2.5">
                            <img src="https://demo.themesberg.com/windster/images/logo.svg" className="h-6 mr-2" alt="Windster Logo" />
                            <span className="self-center whitespace-nowrap">Windster</span>
                        </a>
                        <form action="#" method="GET" className="hidden lg:block lg:pl-32">
                            <label for="topbar-search" className="sr-only">Search</label>
                            <div className="mt-1 relative lg:w-64">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                                    </svg>
                                </div>
                                <input type="text" name="email" id="topbar-search" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full pl-10 p-2.5" placeholder="Search" />
                            </div>
                        </form>
                    </div>
                    <div className="flex items-center">
                        <button id="toggleSidebarMobileSearch" type="button" className="lg:hidden text-gray-500 hover:text-gray-900 hover:bg-gray-100 p-2 rounded-lg">
                            <span className="sr-only">Search</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                            </svg>
                        </button>
                        <Menu as={"div"} className="relative">

                            <Menu.Button className="m-6 inline-flex relative w-fit">
                                <div className="absolute inline-block top-0 right-0 bottom-auto left-auto translate-x-2/4 -translate-y-1/2 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 p-1 text-xs bg-red-600 rounded-full z-10"></div>
                                <div className="">
                                    <div>
                                        <CiBellOn className='text-3xl text-gray-700' />
                                    </div>
                                </div>
                            </Menu.Button>



                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute right-[0px] top-[70px] z-10 mt-2 w-96 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className='px-4 flex items-center justify-between py-2 border-b'>
                                        <h2 className='text-md font-semibold'>Notification</h2>
                                        <button className='text-sm text-indigo-500'>Mark All as Read</button>
                                    </div>
                                    <div className="py-1">
                                        <ul
                                            className="py-1 text-sm text-gray-700 divide-y-2"
                                            aria-labelledby="dropdownDefault"
                                        >
                                            <li className="mt-1 block py-2 px-4 hover:bg-gray-100">
                                                <Link to='/profile' className="w-full flex items-center gap-4">
                                                    <div>
                                                        <img src={avatar} className="w-10" alt="" />
                                                    </div>
                                                    <div>
                                                        <p className='font-semibold'>Salman Mia liked your post</p>
                                                        <p className='text-gray-600'>25 munites ago</p>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className="mt-1 block py-2 px-4 hover:bg-gray-100">
                                                <Link to='/profile' className="w-full flex items-center gap-4">
                                                    <div>
                                                        <img src={avatar} className="w-10" alt="" />
                                                    </div>
                                                    <div>
                                                        <p className='font-semibold'>Abdullah Mia commented your post</p>
                                                        <p className='text-gray-600'>1 hours ago</p>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className="mt-1 block py-2 px-4 hover:bg-gray-100">
                                                <Link to='/notification' className="w-full flex items-center gap-4">
                                                    <div>
                                                        <img src={avatar} className="w-10" alt="" />
                                                    </div>
                                                    <div>
                                                        <p className='font-semibold'>Jakaria Md liked your post</p>
                                                        <p className='text-gray-600'>2 hours ago</p>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className="mt-1 block py-2 px-4 hover:bg-gray-100">
                                                <Link to='/notification' className="w-full flex items-center gap-4">
                                                    <div>
                                                        <img src={avatar} className="w-10" alt="" />
                                                    </div>
                                                    <div>
                                                        <p className='font-semibold'>Md Rifat liked your post</p>
                                                        <p className='text-gray-600'>1 day ago</p>
                                                    </div>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <Link to='/notification' className='border-t py-2 block text-center'>Sell all 15 notifications</Link>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                        <Menu as={"div"} className="relative">
                            <Menu.Button className="p-2 rounded-lg hover:bg-gray-100">
                                <div className='flex items-center gap-2'>
                                    <img src={avatar} className="w-14 rounded-full" alt="" />
                                    <div className='text-left'>
                                        <h2 className='text-md font-semibold'>Abdullah Mia</h2>
                                        <p className='text-sm'>abdullah@gmail.com</p>
                                    </div>
                                </div>
                            </Menu.Button>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute right-[0px] top-[68px] z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1">
                                        <ul
                                            className="py-1 text-sm text-gray-700 divide-y-2"
                                            aria-labelledby="dropdownDefault"
                                        >
                                            <li className="mt-1 block py-2 px-4 hover:bg-gray-100">
                                                <Link to='/profile' className="w-full flex items-center gap-4 text-[#262626]">
                                                    Profile
                                                </Link>
                                            </li>

                                            <li className="mt-1 block py-2 px-4 hover:bg-gray-100">
                                                <Link to='/inbox' className="w-full flex items-center gap-4 text-[#262626]">
                                                    Inbox
                                                </Link>
                                            </li>

                                            <li className="mt-1 block py-2 px-4 hover:bg-gray-100">
                                                <Link to='/settings' className="w-full flex items-center gap-4 text-[#262626]">
                                                    Settings
                                                </Link>
                                            </li>


                                            <li className="mt-1 block py-2 px-4 hover:bg-gray-100">
                                                <button

                                                    className="w-full flex items-center gap-4 text-[#262626]"
                                                >
                                                    Logout
                                                </button>
                                            </li>


                                        </ul>
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header