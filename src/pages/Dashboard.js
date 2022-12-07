import IncomeChart from '../components/charts/IncomeChart';
import InfoCards from '../components/dashbaord/InfoCards';
import LetestCustomers from '../components/dashbaord/LetestCustomers';
import RecentOrders from '../components/dashbaord/RecentOrders';
import Button from '../components/kits/Button';
import Layout from "../components/layout/Layout";

const Dashboard = () => {
    return (
        <Layout title="Dashbaord | Extremeroot">
            <div class="w-full">
                <div className="flex items-center justify-between py-4">
                    <div>
                        <h2 className="text-2xl font-semibold">Dashbaord</h2>
                    </div>
                    <div>
                        <select className="border p-3">
                            <option>7 October, 2023</option>
                        </select>
                        <Button>Export</Button>
                    </div>
                </div>
                <InfoCards />
                <div className='grid grid-cols-12 gap-7 my-4'>
                    <div className='bg-white shadow rounded-md p-5 col-span-4'>
                        <h3>Active users</h3>
                        <div className='text-center bg-blue-300 py-5 rounded-md mt-3'>
                            <h2 className='text-3xl font-semibold text-blue-800'>150</h2>
                        </div>
                        <div className='divide-y mt-3'>
                            <div className='py-2 flex items-center justify-between text-gray-600 text-sm'>
                                <span>Active pages</span>
                                <span>Users</span>
                            </div>
                            <div className='py-2 flex items-center justify-between text-sm'>
                                <span>/products/brandix-z4</span>
                                <span>2</span>
                            </div>
                            <div className='py-2 flex items-center justify-between text-sm'>
                                <span>/categories/drivetrain</span>
                                <span>20</span>
                            </div>
                            <div className='py-2 flex items-center justify-between text-sm'>
                                <span>/categories/monitors</span>
                                <span>10</span>
                            </div>
                            <div className='py-2 flex items-center justify-between text-sm'>
                                <span>/account/orders</span>
                                <span>6</span>
                            </div>
                            <div className='py-2 flex items-center justify-between text-sm'>
                                <span>/cart</span>
                                <span>60</span>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white shadow rounded p-5 col-span-8'>
                        <IncomeChart />
                    </div>
                </div>

                {/* Recent Orders */}
                <RecentOrders />
                {/* Letest Users */}
                <LetestCustomers />
            </div>
        </Layout>
    )
}

export default Dashboard;