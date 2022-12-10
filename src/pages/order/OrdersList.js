import { Link } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import OrdersTable from '../../components/orders/OrdersTable';

const OrdersList = () => {
  return (
    <Layout title="Orders ">
          <div className="flex items-center justify-between py-3">
              <div>
                  <p className="text-gray-600">
                      <Link to='/'>Dashbaord</Link>
                      <span> / </span>
                      <span>Orders</span>
                  </p>
                  <h2 className="text-3xl">Orders</h2>
              </div>
              
          </div>

          <OrdersTable />
    </Layout>
  )
}

export default OrdersList;