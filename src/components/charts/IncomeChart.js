import React from "react";
import {
    Bar, BarChart, CartesianGrid, Legend,
    ResponsiveContainer, Tooltip, XAxis,
    YAxis
} from "recharts";

const data = [
    { name: "Jan", sell: 4000 },
    { name: "Feb", sell: 3000 },
    { name: "Mar", sell: 2000 },
    { name: "Apr", sell: 2780 },
    { name: "May", sell: 1890 },
    { name: "June", sell: 2390 },
    { name: "July", sell: 3490 },
    { name: "Aug", sell: 3490 },
    { name: "Aug", sell: 3490 },
    { name: "Oct", sell: 3490 },
    { name: "Nov", sell: 3490 },
    { name: "Dec", sell: 3490 },
];

const IncomeChart = () => {

    return (
        <div>
            <h2 className='text-lg'>Income statistics</h2>
            <ResponsiveContainer>
                <BarChart data={data} >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="sell" fill="#FFD333" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default IncomeChart