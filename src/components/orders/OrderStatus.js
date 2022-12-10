const OrderStatus = () => {
  return (
    <div className="p-3 bg-white shadow-lg rounded border">
          <h2 className="font-semibold text-gray-700">Order Status</h2>
          <div className="mt-4 space-y-3">
            <select className="block border w-full py-2 rounded px-2 focus:outline-none">
                <option value="pending">Pending</option>
                  <option value="Payment approved">Payment approved</option>
                  <option value="Confrim">Confirm</option>
                  <option value="Shipped">Shipped</option>
            </select>
              <button className="w-full text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded text-sm px-5 py-2 text-center items-center mr-3">Update Order</button>
          </div>
    </div>
  )
}

export default OrderStatus