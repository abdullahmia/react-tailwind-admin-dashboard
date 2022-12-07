import { useState } from 'react';
import avatar from '../../assets/avatar.jpg';

const RecentOrders = () => {
    const [isActionOpen, setIsActionOpen] = useState(false);

    // handle action toggole
    const handleActionToggole = () => {
        setIsActionOpen(!isActionOpen);
    }
    return (
        <div className="bg-white p-5 mt-5 shadow rounded">
            <h2 className="text-lg font-semibold text-gray-600">Recent orders</h2>

            <div class="overflow-x-auto relative shadow-md sm:rounded-lg p-5">
                <div class="flex justify-between items-center pb-4 bg-white">
                    <div>
                        <button onClick={handleActionToggole} class="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 " type="button">
                            <span class="sr-only">Action button</span>
                            Action
                            <svg class="ml-2 w-3 h-3" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                        </button>
                        {/* <!-- Dropdown menu --> */}
                        <div class={`${isActionOpen ? 'block' : 'hidden'} absolute z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow`}>
                            <ul class="py-1 text-sm text-gray-700" aria-labelledby="dropdownActionButton">
                                <li>
                                    <a href="#" class="block py-2 px-4 hover:bg-gray-100 ">Reward</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 px-4 hover:bg-gray-100">Promote</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 px-4 hover:bg-gray-100">Activate account</a>
                                </li>
                            </ul>
                            <div class="py-1">
                                <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 ">Delete User</a>
                            </div>
                        </div>
                    </div>
                    <label for="table-search" class="sr-only">Search</label>
                    <div class="relative">
                        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg class="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                        </div>
                        <input type="text" id="table-search-users" class="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search for users" />
                    </div>
                </div>
                <table class="w-full text-sm text-left text-gray-500 ">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" class="p-4">
                                <div class="flex items-center">
                                    <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500" />
                                    <label for="checkbox-all-search" class="sr-only">checkbox</label>
                                </div>
                            </th>
                            <th scope="col" class="py-3 px-6">
                                No
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Status
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Customer
                            </th>

                            <th scope="col" class="py-3 px-6">
                                Date
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Total
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b">
                            <td class="p-4 w-4">
                                <div class="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500" />
                                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                                </div>
                            </td>
                            <td class="py-4 px-6 uppercase">
                                #asdf3
                            </td>
                            <td class="py-4 px-6 uppercase">
                                Processing
                            </td>
                            <th scope="row" class="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap">
                                <img class="w-10 h-10 rounded-full" src={avatar} alt="Jese" />
                                <div class="pl-3">
                                    <div class="text-base font-semibold">Neil Sims</div>
                                    <div class="font-normal text-gray-500">neil.sims@flowbite.com</div>
                                </div>
                            </th>

                            <td class="py-4 px-6">
                                3 Days ago
                            </td>
                            <td class="py-4 px-6">
                                $443453
                            </td>
                        </tr>
                        <tr class="bg-white border-b">
                            <td class="p-4 w-4">
                                <div class="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500" />
                                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                                </div>
                            </td>
                            <td class="py-4 px-6 uppercase">
                                #asdf3
                            </td>
                            <td class="py-4 px-6 uppercase">
                                Processing
                            </td>
                            <th scope="row" class="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap">
                                <img class="w-10 h-10 rounded-full" src={avatar} alt="Jese" />
                                <div class="pl-3">
                                    <div class="text-base font-semibold">Neil Sims</div>
                                    <div class="font-normal text-gray-500">neil.sims@flowbite.com</div>
                                </div>
                            </th>

                            <td class="py-4 px-6">
                                3 Days ago
                            </td>
                            <td class="py-4 px-6">
                                $443453
                            </td>
                        </tr>
                        <tr class="bg-white border-b">
                            <td class="p-4 w-4">
                                <div class="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500" />
                                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                                </div>
                            </td>
                            <td class="py-4 px-6 uppercase">
                                #asdf3
                            </td>
                            <td class="py-4 px-6 uppercase">
                                Processing
                            </td>
                            <th scope="row" class="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap">
                                <img class="w-10 h-10 rounded-full" src={avatar} alt="Jese" />
                                <div class="pl-3">
                                    <div class="text-base font-semibold">Neil Sims</div>
                                    <div class="font-normal text-gray-500">neil.sims@flowbite.com</div>
                                </div>
                            </th>

                            <td class="py-4 px-6">
                                3 Days ago
                            </td>
                            <td class="py-4 px-6">
                                $443453
                            </td>
                        </tr>
                        <tr class="bg-white border-b">
                            <td class="p-4 w-4">
                                <div class="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500" />
                                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                                </div>
                            </td>
                            <td class="py-4 px-6 uppercase">
                                #asdf3
                            </td>
                            <td class="py-4 px-6 uppercase">
                                Processing
                            </td>
                            <th scope="row" class="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap">
                                <img class="w-10 h-10 rounded-full" src={avatar} alt="Jese" />
                                <div class="pl-3">
                                    <div class="text-base font-semibold">Neil Sims</div>
                                    <div class="font-normal text-gray-500">neil.sims@flowbite.com</div>
                                </div>
                            </th>

                            <td class="py-4 px-6">
                                3 Days ago
                            </td>
                            <td class="py-4 px-6">
                                $443453
                            </td>
                        </tr>
                        <tr class="bg-white border-b">
                            <td class="p-4 w-4">
                                <div class="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500" />
                                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                                </div>
                            </td>
                            <td class="py-4 px-6 uppercase">
                                #asdf3
                            </td>
                            <td class="py-4 px-6 uppercase">
                                Processing
                            </td>
                            <th scope="row" class="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap">
                                <img class="w-10 h-10 rounded-full" src={avatar} alt="Jese" />
                                <div class="pl-3">
                                    <div class="text-base font-semibold">Neil Sims</div>
                                    <div class="font-normal text-gray-500">neil.sims@flowbite.com</div>
                                </div>
                            </th>

                            <td class="py-4 px-6">
                                3 Days ago
                            </td>
                            <td class="py-4 px-6">
                                $443453
                            </td>
                        </tr>
                        <tr class="bg-white border-b">
                            <td class="p-4 w-4">
                                <div class="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500" />
                                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                                </div>
                            </td>
                            <td class="py-4 px-6 uppercase">
                                #asdf3
                            </td>
                            <td class="py-4 px-6 uppercase">
                                Processing
                            </td>
                            <th scope="row" class="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap">
                                <img class="w-10 h-10 rounded-full" src={avatar} alt="Jese" />
                                <div class="pl-3">
                                    <div class="text-base font-semibold">Neil Sims</div>
                                    <div class="font-normal text-gray-500">neil.sims@flowbite.com</div>
                                </div>
                            </th>

                            <td class="py-4 px-6">
                                3 Days ago
                            </td>
                            <td class="py-4 px-6">
                                $443453
                            </td>
                        </tr>
                        <tr class="bg-white border-b">
                            <td class="p-4 w-4">
                                <div class="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500" />
                                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                                </div>
                            </td>
                            <td class="py-4 px-6 uppercase">
                                #asdf3
                            </td>
                            <td class="py-4 px-6 uppercase">
                                Processing
                            </td>
                            <th scope="row" class="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap">
                                <img class="w-10 h-10 rounded-full" src={avatar} alt="Jese" />
                                <div class="pl-3">
                                    <div class="text-base font-semibold">Neil Sims</div>
                                    <div class="font-normal text-gray-500">neil.sims@flowbite.com</div>
                                </div>
                            </th>

                            <td class="py-4 px-6">
                                3 Days ago
                            </td>
                            <td class="py-4 px-6">
                                $443453
                            </td>
                        </tr>
                        <tr class="bg-white border-b">
                            <td class="p-4 w-4">
                                <div class="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500" />
                                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                                </div>
                            </td>
                            <td class="py-4 px-6 uppercase">
                                #asdf3
                            </td>
                            <td class="py-4 px-6 uppercase">
                                Processing
                            </td>
                            <th scope="row" class="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap">
                                <img class="w-10 h-10 rounded-full" src={avatar} alt="Jese" />
                                <div class="pl-3">
                                    <div class="text-base font-semibold">Neil Sims</div>
                                    <div class="font-normal text-gray-500">neil.sims@flowbite.com</div>
                                </div>
                            </th>

                            <td class="py-4 px-6">
                                3 Days ago
                            </td>
                            <td class="py-4 px-6">
                                $443453
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default RecentOrders