import { Link } from "react-router-dom";
import ProductForm from "../../components/forms/ProductForm";
import Layout from "../../components/layout/Layout";

const NewProduct = () => {
    return (
        <Layout title="New Product">
            <div className="flex items-center justify-between py-3">
                <div>
                    <p className="text-gray-600">
                        <Link to='/'>Dashbaord</Link>
                        <span> / </span>
                        <Link to='/product'>Prodcuts</Link>
                        <span> / </span>
                        <span>New</span>

                    </p>
                    <h2 className="text-3xl">New Products</h2>
                </div>
                <div>
                    <button className="bg-gray-100 px-6 py-3 text-sm capitalize rounded">Duplicate</button>
                    <Link to='/product/new' className="hidden sm:inline-flex ml-5 text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded text-sm px-5 py-2.5 text-center items-center mr-3">Save</Link>
                </div>
            </div>

            {/* Add Product forms */}
            <ProductForm />
        </Layout>
    )
}

export default NewProduct;