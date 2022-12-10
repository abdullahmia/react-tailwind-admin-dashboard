import avatar from '../../assets/avatar.jpg';

const OrderCustomer = () => {
    return (
        <div>
            <div className="p-3 mt-6 bg-white shadow-lg border rounded">
                <h2 className="font-semibold text-gray-700">Customer</h2>
                <div className='flex items-center gap-2'>
                    <img src={avatar} className="rounded-full w-14" alt="" />
                    <div className='text-gray-700'>
                        <h2 className='text-[15px] font-semibold'>Jessica Moore</h2>
                        <p className='text-[13px]'>This is a first order</p>
                    </div>
                </div>
            </div>


            <div className="p-3 mt-6 bg-white shadow-lg border rounded">
                <h2 className="font-semibold text-gray-700">Contact Person</h2>
                <div className='text-gray-700 mt-4'>
                    <h2 className='text-[14px]'>Jessica Moore</h2>
                    <p className='text-[14px] text-blue-700'>moore@example.com</p>
                    <p className='text-[14px] text-gray-600'>+56378920-543</p>
                </div>
            </div>

            <div className="p-3 mt-6 bg-white shadow-lg border rounded">
                <h2 className="font-semibold text-gray-700">Shipping address</h2>
                <div className='text-gray-700 mt-4'>
                    <h2 className='text-[14px]'>Jessica Moore</h2>
                    <p className='text-[14px] text-gray-600'>Random Federation</p>
                    <p className='text-[14px] text-gray-600'>Random Federation</p>
                    <p className='text-[14px] text-gray-600'>115302, Moscow</p>
                    <p className='text-[14px] text-gray-600'>ul. Varshavskaya, 15-2-178</p>
                </div>
            </div>

            <div className="p-3 mt-6 bg-white shadow-lg border rounded">
                <h2 className="font-semibold text-gray-700">Billing address</h2>
                <div className='text-gray-700 mt-4'>
                    <h2 className='text-[14px]'>Jessica Moore</h2>
                    <p className='text-[14px] text-gray-600'>Random Federation</p>
                    <p className='text-[14px] text-gray-600'>Random Federation</p>
                    <p className='text-[14px] text-gray-600'>115302, Moscow</p>
                    <p className='text-[14px] text-gray-600'>ul. Varshavskaya, 15-2-178</p>
                </div>
            </div>
        </div>
    )
}

export default OrderCustomer