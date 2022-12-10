import ProductRow from "./ProductRow"

const ProductTable = () => {
    return (
        <div>
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                <div className="p-4 bg-white">
                    <label for="table-search" className="sr-only">Search</label>
                    <div className="relative mt-1">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                        </div>
                        <input type="text" id="table-search" className="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-500" placeholder="Search for items" />
                    </div>
                </div>
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 " />
                                    <label for="checkbox-all-search" className="sr-only">checkbox</label>
                                </div>
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Product name
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Color
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Category
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Price
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody className="">
                        <ProductRow />
                        <ProductRow />
                        <ProductRow />
                        <ProductRow />
                        <ProductRow />
                        <ProductRow />
                        <ProductRow />
                        <ProductRow />
                        <ProductRow />
                        <ProductRow />
                        <ProductRow />
                        <ProductRow />
                        <ProductRow />
                        <ProductRow />
                        <ProductRow />
                        <ProductRow />
                        <ProductRow />
                        <ProductRow />
                        <ProductRow />
                        <ProductRow />
                        <ProductRow />
                        <ProductRow />
                        <ProductRow />
                        <ProductRow />
                        <ProductRow />
                        <ProductRow />
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default ProductTable