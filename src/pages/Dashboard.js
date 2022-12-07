import Layout from "../components/layout/Layout";

const Dashboard = () => {
    return (
        <Layout title="Dashbaord | Extremeroot">
            <div class="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
                <div>
                    <div>
                        <h2 className="text-2xl font-semibold">Dashbaord</h2>
                    </div>
                    <div>
                        <select className="border p-3">
                            <option>7 October, 2023</option>
                        </select>
                        <button className="">Export</button>
                    </div>
                </div>
                
            </div>
        </Layout>
    )
}

export default Dashboard;