import { Link } from "react-router-dom"
import Layout from "../../components/layout/Layout"
import OrderCustomer from "../../components/orders/OrderCustomer"
import OrderItems from "../../components/orders/OrderItems"
import OrderStatus from "../../components/orders/OrderStatus"

const OrderDetail = () => {
  return (
    <Layout title={"#AGAD323"}>
      <div className="flex items-center justify-between py-3">
        <div>
          <p className="text-gray-600">
            <Link to='/'>Dashbaord</Link>
            <span> / </span>
            <Link to='/'>Dashbaord</Link>
            <span> / </span>
            <span>Orders <span className="font-semibold">#AGAD323</span></span>
          </p>
          <h2 className="text-3xl">Orders <span className="font-semibold">#AGAD323</span></h2>
        </div>
      </div>
      <div className="flex border-t border-b py-2 text-sm text-gray-700">
        <div className="border-r pr-4">October 7, 2020 at 9:08 pm</div>
        <div className="border-r px-4">6 items</div>
        <div className="border-r px-4">Total $5,882.00</div>
        <span className="bg-green-200 px-3 rounded mx-4">Paid</span>
        <span className="bg-yellow-200 px-3 rounded">Partially Fulfilled</span>
      </div>

      {/* Order Summary */}
      <div className="grid lg:grid-cols-12 mt-8 gap-7">
        <div className="lg:col-span-8 col-span-12">
          {/* Note about order */}
          <div>
            <textarea placeholder="Note about order" className="w-full rounded shadow-lg broder p-3 text-sm text-gray-700 focus:ring-0 focus:outline-none" cols="30" rows="2"></textarea>
          </div>


          {/* Order items */}
          <OrderItems />
        </div>
        <div className="lg:col-span-4 col-span-12">
          <OrderStatus />
          <OrderCustomer />
        </div>
      </div>

    </Layout>
  )
}

export default OrderDetail