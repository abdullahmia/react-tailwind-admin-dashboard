import OrderItem from "./OrderItem"

const OrderItems = () => {
    return (
        <div className="bg-white border shadow-lg my-4 rounded">
            <h2 className="text-lg p-4">Items</h2>

            <div className="divide-y">
                <OrderItem />
                <OrderItem />
                <OrderItem />
                <OrderItem />
                <OrderItem />
                <OrderItem />
            </div>

            {/* Order Total */}
            <div className="border-t">
                <div className="p-4 text-gray-700 space-y-3">
                    <div className="flex items-center justify-between">
                        <h2>Subtotal</h2>
                        <h2>$5,877.00</h2>
                    </div>
                    <div className="flex items-center justify-between">
                        <h2>Store Credit</h2>
                        <h2>$25.00</h2>
                    </div>
                    <div className="flex items-center justify-between">
                        <h2>Shipping</h2>
                        <h2>$25.00</h2>
                    </div>
                </div>
            </div>
            <div className="border-t">
                <div className="p-4 text-gray-700 space-y-3">
                    <div className="flex items-center justify-between">
                        <h2>Total</h2>
                        <h2>$5,877.00</h2>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default OrderItems