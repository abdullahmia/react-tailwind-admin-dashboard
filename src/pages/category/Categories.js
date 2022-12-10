import { Link } from 'react-router-dom';
import CategoryTable from '../../components/category/CategoryTable';
import Layout from '../../components/layout/Layout';


const Categories = () => {
  return (
    <Layout title="Category">
          <div className="flex items-center justify-between py-3">
              <div>
                  <p className="text-gray-600">
                      <Link to='/'>Dashbaord</Link>
                      <span> / </span>
                      <span>Category</span>
                  </p>
                  <h2 className="text-3xl">Category</h2>
              </div>
              <div>
                  <button className="bg-gray-100 px-6 py-3 text-sm capitalize rounded">import</button>
                  <Link to='/category/new' className="hidden sm:inline-flex ml-5 text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded text-sm px-5 py-2.5 text-center items-center mr-3">New Categroy</Link>
              </div>
          </div>


          {/* CAtegories */}
          <CategoryTable />
    </Layout>
  )
}

export default Categories