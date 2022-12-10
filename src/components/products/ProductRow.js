import { CiEdit, CiTrash } from 'react-icons/ci';
import productImg from '../../assets/product.jpg';

const ProductRow = () => {

    return (
        <tr className="bg-white border-b hover:bg-gray-50 overflow-hidden">
            <td className="p-4 w-4">
                <div className="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 " />
                    <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                </div>
            </td>
            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap flex items-center gap-3">
                <img src={productImg} className="w-10" alt="" />
                Apple MacBook Pro 17"
            </th>
            <td className="py-4 px-6">
                Sliver
            </td>
            <td className="py-4 px-6">
                Laptop
            </td>
            <td className="py-4 px-6">
                $2999
            </td>
            <td className="py-4 px-6 space-x-3">
                <button className='bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition'>
                    <CiTrash size={18} />
                </button>
                <button className='bg-indigo-500 text-white p-3 rounded-full hover:bg-indigo-600 transition'>
                    <CiEdit size={18} />
                </button>
            </td>
        </tr>
    )
}

export default ProductRow