import productImg from '../../assets/product.jpg';


const OrderItem = () => {
  return (
    <div className='py-2 px-4 text-sm flex items-center justify-between'>
        <div className='flex items-center gap-5'>
            <img src={productImg} className="w-10 rounded" alt="" />
            <h2 className='text-gray-700 hover:underline'>Brandix Brake Kit BDX-750Z370-S</h2>
        </div>
        <div className='flex items-center gap-20 text-gray-700'>
            <div className='flex items-center gap-8'>
                <h2>$342.3</h2>
                <h2>1</h2>
            </div>
            <div>
                <h2>$342.3</h2>
            </div>
        </div>
    </div>
  )
}

export default OrderItem