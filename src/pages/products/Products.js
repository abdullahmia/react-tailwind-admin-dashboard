import { Link } from "react-router-dom"
import Layout from "../../components/layout/Layout"
import ProductTable from "../../components/products/ProductTable"

const Products = () => {
  return (
    <Layout title="Products">
        {/* Breadcurms */}
        <div className="flex items-center justify-between py-3">
            <div>
                <p className="text-gray-600">
                    <Link to='/'>Dashbaord</Link>
                    <span> / </span>
                    <span>Products</span>
                </p>
                <h2 className="text-3xl">Products</h2>
            </div>
            <div>
                <button className="bg-gray-100 px-6 py-3 text-sm capitalize rounded">import</button>
                  <Link to='/product/new' className="hidden sm:inline-flex ml-5 text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded text-sm px-5 py-2.5 text-center items-center mr-3">New Product</Link>
            </div>
        </div>


        {/* Products table */}
        <ProductTable />
    </Layout>
  )
}

export default Products